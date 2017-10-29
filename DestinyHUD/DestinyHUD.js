if (typeof dhud === `undefined`) { dhud = {}; }


dhud.API_KEY = `05dcc6c93fbd44bab9b93f1302d45188`;
dhud.API_ROOT = `https://www.bungie.net/Platform/`;
dhud.CLIENT_ID = `21910`;
dhud.CLIENT_SECRET = `0u2vuaAv9EZfwwaXe4EDHmCn-2hODD-QmsXmVVVrmGQ`;
dhud.BASIC_AUTHORIZATION_HEADER = `Basic ` + btoa(dhud.CLIENT_ID + `:` + dhud.CLIENT_SECRET);

Object.defineProperty(dhud, `BUNGIE_ID`, {
  get: function() {
    return MEMBERSHIP_ID;
  },
  set: function(x) {
    MEMBERSHIP_ID = x;
    getPlayerInfo();
  }
});


function sendAjax(postBody, path, authType, callback) {
  
  var url = dhud.API_ROOT + path;
  var authHeader = dhud.BASIC_AUTHORIZATION_HEADER;
  var auth = authType || ``;
  var xhr = new XMLHttpRequest();

  if (auth.toUpperCase() === `BEARER`) {
    authHeader = `Bearer ` + dhud.accessToken;
  }

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      callback(this.responseText);
    }
  };

  if (!postBody) {
    xhr.open(`GET`, url, true);
  } else {
    xhr.open(`POST`, url, true);
  }
  xhr.setRequestHeader(`X-API-Key`, dhud.API_KEY);
  xhr.setRequestHeader(`Content-Type`, `application/x-www-form-urlencoded`);
  xhr.setRequestHeader(`Authorization`, authHeader);
  if (postBody) {
    xhr.send(postBody);
  } else {
    xhr.send();
  }

}


function getAccessToken() {
  var code = urlParameters.code;
  var postBody = `grant_type=authorization_code&code=` + code;
  var path = `App/OAuth/Token/`;
  var authType = `BASIC`;
  function processIt(data) {
    var response = JSON.parse(data);
    dhud.accessToken = response.access_token;
    dhud.refreshToken = response.refresh_token;
    dhud.BUNGIE_ID = response.membership_id;
  }
  sendAjax(postBody, path, authType, processIt);
}


function getManifest() {
  var get = undefined;
  var path = `Destiny2/Manifest/`;
  var authType = `BASIC`;
  function processIt(data) {
    var response = JSON.parse(data);
    dhud.MANIFEST = response.Response;
  }
  sendAjax(get, path, authType, processIt);
}

function getPlayerInfo() {
  var get = undefined;
  var path = `User/GetBungieAccount/540784/254/`;
  var authType = `BASIC`;
  function processIt(data) {
    var response = JSON.parse(data);
    dhud.MEMBERSHIP_TYPE = response.Response.destinyMemberships["0"].membershipType;
    dhud.MEMBERSHIP_ID = response.Response.destinyMemberships["0"].membershipId;
    dhud.DISPLAY_NAME = response.Response.destinyMemberships["0"].displayName;
  }
  sendAjax(get, path, authType, processIt);
}





/**
######################################################################

  Runtime

######################################################################
 */

processUrlParameters();
if (urlParameters.state !== localStorage.State) {
  console.warn(`The State Parameter is incorrect.\nThere may be Security Concerns.`);
}
localStorage.removeItem('State');
getAccessToken();
getManifest();
console.info(`End of DestinyHUD Runtime`);
console.log(dhud);






/**
######################################################################

  Utilities

######################################################################
 */

// Creates an object with URL parameters, then removes them
// from the address bar without causing a redirect.
// Based on: https://stackoverflow.com/a/2880929  &  https://stackoverflow.com/a/41061471
function processUrlParameters() {
  window.urlParameters = {};
  var match;
  var plus     = /\+/g;
  var search = /([^&=]+)=?([^&]*)/g;
  var decode = function (text) { return decodeURIComponent(text.replace(plus, ` `)); };
  var query  = window.location.search.substring(1);
  while((match = search.exec(query)) !== null) {
    urlParameters[decode(match[1])] = decode(match[2]);
  }
  window.history.replaceState(null, null, window.location.pathname);
}

// Generate a nonce that is 32 alphanumeric characters long, returns a string.
// This is used in the Authorization step, but is here too in case I need it.
// Based on: https://stackoverflow.com/a/1349426
function nonce() {
  var text = ``;
  var possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
  var i = 0;
  for(i; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// END CODE
