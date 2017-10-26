/**
  Attempt to Authorize our app with Bungie, then save the state to local storage.
  This is just a small security addition to try to catch any intercepted requests.
  More than likely that will never happen, and even so, javascript isn't the optimal
  way to do so.  It's also a placeholder so I remember to handle itcorrectly in the
  future.  Consider this licensed under The GNU General Public License v3.0.
**/

// Funtion that generates a 32 character nonce (used as a state).
// Based on: https://stackoverflow.com/a/1349426
function createState() {
  var text = ``;
  var possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
  var i = 0;
  for(i; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// Get our current location with no parameters.
var page = location.origin + location.pathname;

// Check if we're at our app's homepage.
if (page !== `https://zebadee.cc/dhud/`) {

  // If not, go to it, and pop an alert telling us to authorize it again.
  location = `https://zebadee.cc/dhud/`;
  alert(`Loading App Home Page\nPlease Authorize Again.`);

} else {
  // If we're already there, create a new state.
  var DestinyHudState = createState();

  // Use local storage to save the state.
  localStorage.setItem(`State`, DestinyHudState);

  // Authorize our app using the state.
  window.location = `https://www.bungie.net/en/OAuth/Authorize?client_id=21910&response_type=code&state=` + DestinyHudState;
}
// END CODE
