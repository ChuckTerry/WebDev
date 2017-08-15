# BrowseIt

BrowseIt is used to display Browser Information.  It relies on [Bowser](https://github.com/ded/bowser) to get basic information about the browser.  Using that data, it generates a friendly object containing information about the Browser.

You can also see a basic demo [Here](https://tda0909.github.io/BrowseIt/).

---

## BrowseIt Object
**BrowseIt {**<br />
&nbsp;&nbsp;&nbsp;**OS** : [string]<br />
&nbsp;&nbsp;&nbsp;**OSVersion** : [string]<br />
&nbsp;&nbsp;&nbsp;**battery {**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**charging** : [boolean]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**level** : [string]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**chargingTime** : [number]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**dischargingTime** : [number]<br />
&nbsp;&nbsp;&nbsp;**}**<br />
&nbsp;&nbsp;&nbsp;**browser** : [string] *(Same as name)*<br />
&nbsp;&nbsp;&nbsp;**capability** : [string]<br />
&nbsp;&nbsp;&nbsp;**cookiesEnabled** : [boolean]<br />
&nbsp;&nbsp;&nbsp;**deviceType** : [string]<br />
&nbsp;&nbsp;&nbsp;**doNotTrack** : [string]<br />
&nbsp;&nbsp;&nbsp;**javaEnabled** : [boolean]<br />
&nbsp;&nbsp;&nbsp;**language** : [string]<br />
&nbsp;&nbsp;&nbsp;**name** : [string] *(Same as browser)*<br />
&nbsp;&nbsp;&nbsp;**online** : [boolean]<br />
&nbsp;&nbsp;&nbsp;**procCores** : [number]<br />
&nbsp;&nbsp;&nbsp;**renderEngine** : [string]<br />
&nbsp;&nbsp;&nbsp;**screen {**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**availHeight** : [number]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**availWidth** : [number]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**colorDepth** : [number]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**height** : [number]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**orientation** : [string]<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**width** : [number]<br />
&nbsp;&nbsp;&nbsp;**}**<br />
&nbsp;&nbsp;&nbsp;**supportedLanguages** : [array of strings]<br />
&nbsp;&nbsp;&nbsp;**touchPoints** : [number]<br />
&nbsp;&nbsp;&nbsp;**version** : [string]<br />
&nbsp;&nbsp;&nbsp;**vibrationEnabled** : [boolean]<br />
**}**<br />

---

## Detailed Information

### OS
Operating System.<br />
**Type** - String<br />
**Possible Values** - mac, windows, windowsphone, linux, chromeos, android, ios, blackberry, firefoxos, webos, bada, tizen, sailfish

---

### OSVersion
Operating System Version (If OS is not *Android*, *iOS*, *Windows Phone*, *WebOS*, *Bada*, or *Tizen* it will be *undefined*).<br />
**Type** - String<br />

---

### battery.charging
Is the Battery Charging.<br />
**Type** - Boolean<br />

---

### battery.level
Battery Charge Percentage.<br />
**Type** - Number<br />
**Possible Values** - 0-100

---

### battery.chargingTime
Approximate time (Milliseconds) until Battery is Fully Charged.<br />
**Type** - Number<br />
**Possible Values** - Any *Number* or *Infinity*

---

### battery.dischargingTime
Approximate time (Milliseconds) until Battery is completely empty.<br />
**Type** - Number<br />
**Possible Values** - Any *Number* or *Infinity*

---

### browser
Name of Browser (Same as **name**).<br />
**Type** - String<br />
**Possible Values** - chrome, firefox, msie, msedge, safari, android, ios, opera, phantom, blackberry, webos, silk, bada, tizen, seamonkey, sailfish, ucbrowser, qupzilla, vivaldi, sleipnir, kMeleon

---

### capability
Capability of the Browser<br />
**Type** - String<br />
**Possible Values** - Minimal, Moderate, Full, Unknown
**Additional Information** - Based on [Yahoo's Browser Grading](http://developer.yahoo.com/yui/articles/gbs.)<br/>
"Minimal" = *x*, "Moderate" = *c*, "Full" = *a*; "Unknown" is used when browseIt/bowser can't determine the browser's capability (You should assume this is the same as "Minimal")

---

### cookiesEnabled
Are Cookies Enabled in this Browser.<br />
**Type** - Boolean<br />

---

### deviceType
What type of generic device is this Browser running on.<br />
**Type** - String<br />
**Possible Values** - Mobile, Tablet, Non-Mobile

---

### doNotTrack
Has the Browser sent a [Do Not Track Request](https://en.wikipedia.org/wiki/Do_Not_Track).<br />
**Type** - Boolean<br />

---

### javaEnabled
Is Java (Not Javascript) enabled on the Browser.<br />
**Type** - Boolean<br />

---

### language
The Primary Language of the Browser.<br />
**Type** - String<br />
**Possible Values** - any *Language Tag*; Most Browsers use an [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag)

---

### name
Name of Browser (Same as **browser**).<br />
**Type** - String<br />
*See browser above for list of Possible Values*

---

### online
Is the Browser Online. **WARNING:**  This is interpreted in different ways depending on the Browser.<br />
**Type** - Boolean<br />

---

### procCores
Number of Cores the Browser's Device can use.<br />
**Type** - Number<br />
**Possible Values** - any *Number* (Usually 1-8)

---

### renderEngine
The Browser's [Render Engine](https://en.wikipedia.org/wiki/Web_browser_engine).<br />
**Type** - String<br />
**Possible Values** - webkit, blink, gecko, msie, msedge

---

### screen.availHeight
Screen's Available Height in Pixels.<br />
**Type** - Number<br />
**Possible Values** - any *Number*

---

### screen.availWidth
Screen's Available Width in Pixels.<br />
**Type** - Number<br />
**Possible Values** - any *Number*

---

### screen.colorDepth
Screen's Color Depth (aka Pixel Depth).<br />
**Type** - Number<br />
**Possible Values** - any *Number* (Usually 8, 15, 16, 18, 24, 30, 36, or 48)

---

### screen.height
Screen's Total Height in Pixels.<br />
**Type** - Number<br />
**Possible Values** - any *Number*

---

### screen.orientation
The Screen's Orientation.<br />
**Type** - String<br />
**Possible Values** - Landscape, Portrait

---

### screen.width
Screen's Total Width in Pixels.<br />
**Type** - Number<br />
**Possible Values** - any *Number*

---

### supportedLanguages
List of Languages the Browser Supports.<br />
**Type** - Array *of* Strings<br />
**Possible Values** - any number of *strings* representing languages.

---

### touchPoints
Total Touch Points on the Device's Screen.<br />
**Type** - Number<br />
**Possible Values** - any *Number*

---

### version
Browser's Version.<br />
**Type** - String<br />
**Possible Values** - any *string* (usually in "XX.xx" format)

---

### vibrationEnabled
Is Vibration Enable on the Device. **WARNING:** Currently Unreliable<br />
**Type** - Boolean<br />

