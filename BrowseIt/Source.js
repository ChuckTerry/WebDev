function getBrowserInfo() {
  
  /** Global Object */
  if (window.browseIt === undefined) { window.browseIt = {}; }
  
  /** Check for Bowser Dependency */
  if (window.bowser === undefined) {
  	console.error("Use Bowser.js for full functionality.");
  	return false;
  }
  
  /** Basic Browser Information */
  browseIt.name = bowser.name;
  browseIt.version = bowser.version;
  
  /** Device Type */
  if (bowser.mobile) {
    browseIt.deviceType = "Mobile";
  } else if (bowser.tablet) {
    browseIt.deviceType = "Tablet";
  } else {
    browseIt.deviceType = "Non-Mobile";
  }
  
  /** Rendering Engine */
  browseIt.renderEngine = "Unknown";
  var knownEngines =  ["blink", "gecko", "msedge", "msie", "webkit"];
  var knownEnginesLength = knownEngines.length;
  for (var i = 0; i < knownEnginesLength; i++) {
    if (bowser.hasOwnProperty(knownEngines[i])) {
      browseIt.renderEngine = knownEngines[i];
    }
  }
  
  /** Browser Flags */
  browseIt.browser = "Unknown";
  var knownBrowsers =  ["android", "bada", "blackberry", "chrome", "firefox", "ios", "kMeleon", "msedge", "msie", "opera", "phantom", "qupzilla", "safari", "sailfish", "seamonkey", "silk", "sleipnir", "tizen", "ucbrowser", "vivaldi", "webos"];
  var knownBrowsersLength = knownBrowsers.length;
  for (var i = 0; i < knownBrowsersLength; i++) {
    if (bowser.hasOwnProperty(knownBrowsers[i])) {
      browseIt.browser = knownBrowsers[i];
    }
  }

  /** Operating System */
  browseIt.OS = "Unknown";
  var knownOSs =  ["android", "bada", "blackberry", "chromeos", "firefoxos", "ios", "linux", "mac", "sailfish", "tizen", "webos", "windows", "windowsphone"];
  var knownOSsLength = knownBrowsers.length;
  for (var i = 0; i < knownOSsLength; i++) {
    if (bowser.hasOwnProperty(knownOSs[i])) {
      browseIt.OS = knownOSs[i];
    }
  }
  
  /** Operating System Version */
  // TODO: Add Logic beyond Bowser to check for OS Version
  browseIt.OSVersion = "Unknown";
  if (bowser.osversion !== undefined) { browseIt.OSVersion = bowser.osversion; }
  
  /** Browser Capabilities */
  if (bowser.x) {
    browseIt.capability = "Minimal";
  } else if (bowser.c) {
    browseIt.capability = "Moderate";
  } else if (bowser.a) {
    browseIt.capability = "Full";
  } else {
    browseIt.capability = "Unknown";
  }

  /** Cookies Allowed */
  browseIt.cookiesEnabled = navigator.cookieEnabled;
  	
  /** Do Not Track Request */
  // TODO: Lookup Current Standards on Do Not Track Requests
  browseIt.doNotTrack = "false";
  var dnt = navigator.doNotTrack;
  
  if (dnt) { browseIt.doNotTrack = true; }
  
  if ((dnt == "no") || (dnt == "No") || (dnt == "NO")) {
  	browseIt.doNotTrack = false;
  }
  if ((dnt == "yes") || (dnt == "Yes") || (dnt == "YES")) {
  	browseIt.doNotTrack = true;
  }
  
  /** Java Enabled */
  browseIt.javaEnabled = navigator.javaEnabled();
  
  /** CPU Cores */
  browseIt.procCores = navigator.hardwareConcurrency;
  
  /** Language(s) */
  browseIt.language = navigator.language;
  browseIt.supportedLanguages = navigator.languages;
  
  /** Vibration Enabled */
  // TODO: Test behavior. This seems to show the wrong value occasionally.
  if (navigator.vibrate(1)) {
    browseIt.vibrationEnabled = "true?";
  } else {
    browseIt.vibrationEnabled = false;
  }
  
  /** Battery Information */
  if (browseIt.battery === undefined) { browseIt.battery = {}; }
  
  navigator.getBattery().then(function(battery) {
  	browseIt.battery.charging = battery.charging;
  	browseIt.battery.level = battery.level * 100;
  	browseIt.battery.chargeTime = battery.chargingTime;
  	browseIt.battery.dischargeTime = battery.dischargingTime;
  });
  
  /** Device Touch Points */
  browseIt.touchPoints = navigator.maxTouchPoints;
  
  /** Connected to Internet */
  // TODO: Add a ping method since navigator.onLine can be unreliable.
  browseIt.online = navigator.onLine;
  
  /** Screen Information */
  if (browseIt.screen === undefined) { browseIt.screen = {}; }
  
  browseIt.screen.width  = screen.width;
  browseIt.screen.height  = screen.height;
  browseIt.screen.availHeight  = screen.availHeight;
  browseIt.screen.availWidth  = screen.availWidth;
  browseIt.screen.colorDepth  = screen.colorDepth;
  browseIt.screen.orientation  = screen.orientation.type.split("-")[0];

  return browseIt;

}

/** TODO:
 	
 	- GeoLocation Services
       navigator.geolocation

 	- Gamepad Information
 	    navigator.getGamepads()
 	
   - Non-Mobile OS Versions
       var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}

*/
