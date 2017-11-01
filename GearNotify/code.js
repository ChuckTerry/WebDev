function getData() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var div = document.createElement(`DIV`);
      var fragment = document.createDocumentFragment();
      div.innerHTML = this.responseText;
      fragment.appendChild(div);
      processData(fragment);
    }
  };
  xhr.open(`GET`, `https://destiny-vendor-gear-tracker.com/`, true);
  xhr.send();
}

function processData(rawData) {
  var devrimKay = parseInt(rawData.getElementById(`vendor_plus_1`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_1`).innerHTML);
  var miniTool = parseInt(rawData.getElementById(`vendor_plus_7`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_7`).innerHTML);
  var drang = parseInt(rawData.getElementById(`vendor_plus_9`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_9`).innerHTML);
  var asherMir = parseInt(rawData.getElementById(`vendor_plus_4`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_4`).innerHTML);
  var manOWar = parseInt(rawData.getElementById(`vendor_plus_8`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_8`).innerHTML);
  var failsafe = parseInt(rawData.getElementById(`vendor_plus_3`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_3`).innerHTML);
  var sloane = parseInt(rawData.getElementById(`vendor_plus_2`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_2`).innerHTML);
  var zavala = parseInt(rawData.getElementById(`vendor_plus_5`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_5`).innerHTML);
  var shaxx = parseInt(rawData.getElementById(`vendor_plus_6`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_6`).innerHTML);
  var ikoraRey = parseInt(rawData.getElementById(`vendor_plus_13`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_13`).innerHTML);
  var banshee = parseInt(rawData.getElementById(`vendor_plus_14`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_14`).innerHTML);
  var benedict = parseInt(rawData.getElementById(`vendor_plus_15`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_15`).innerHTML);
  var deadOrbit = parseInt(rawData.getElementById(`vendor_plus_10`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_10`).innerHTML);
  var futureWarCult = parseInt(rawData.getElementById(`vendor_plus_11`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_11`).innerHTML);
  var newMonarchy = parseInt(rawData.getElementById(`vendor_plus_12`).innerHTML) - parseInt(rawData.getElementById(`vendor_minus_12`).innerHTML);
  if (devrimKay >= 3) pushNotification(`Devrim Key may have a 300 power engram.`);
  if (miniTool >= 3) pushNotification(`The MIDA Mini-Tool may be power 300.`);
  if (drang >= 3) pushNotification(`The Drang may be power 300.`);
  if (asherMir >= 3) pushNotification(`Devrim Key may have a 300 power engram.`);
  if (manOWar >= 3) pushNotification(`The Man O' War may be power 300.`);
  if (failsafe >= 3) pushNotification(`Failsafe may have a 300 power engram.`);
  if (sloane >= 3) pushNotification(`Sloane may have a 300 power engram.`);
  if (zavala >= 3) pushNotification(`Zavala may have a 300 power engram.`);
  if (shaxx >= 3) pushNotification(`Shaxx may have a 300 power engram.`);
  if (ikoraRey >= 3) pushNotification(`Ikora Rey may have a 300 power engram.`);
  if (banshee >= 3) pushNotification(`Banshee-44 may have a 300 power engram.`);
  if (benedict >= 3) pushNotification(`Benedict 99-40 may have a 300 power engram.`);
  if (deadOrbit >= 3) pushNotification(`Dead Orbit may have a 300 power engram.`);
  if (futureWarCult >= 3) pushNotification(`Future War Cult may have a 300 power engram.`);
  if (newMonarchy >= 3) pushNotification(`New Monarchy may have a 300 power engram.`);
  var currentDate = new Date();
  console.log(currentDate, devrimKay, miniTool, drang, asherMir, manOWar, failsafe, sloane, zavala, shaxx, ikoraRey, banshee, benedict, deadOrbit, futureWarCult, newMonarchy);
}

function pushNotification(text) {
  if (!(`Notification` in window)) {
    console.warn(`This browser does not support desktop notification`);
  } else if (Notification.permission === `granted`) {
    var notification = new Notification(text);
  } else if (Notification.permission !== `denied`) {
    Notification.requestPermission(function (permission) {
      if (permission === `granted`) {
        var notification = new Notification(text);
      }
    });
  }
}

getData();
setInterval(function(){ getData(); }, 180000);
