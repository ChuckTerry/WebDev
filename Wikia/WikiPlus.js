// Get URL
var shortUrl = document.location.pathname;

/** #TODO:
  Replace if statement with function.  Function will then be called
  When the URL is correct.  Maybe Wrap the buttons in a container too.
*/

// If page is Special:WikiActivity 
if (shortUrl.indexOf("WikiActivity") !== -1) {

  // Global Object
  var specialPlus; if (specialPlus === undefined) { specialPlus = {}; }

  // Setup Default button values
  specialPlus.showTalk = true;
  specialPlus.showEdit = true;
  
  // Get NavBar ID
  var navBar = document.getElementsByClassName("activity-nav");
  var navBarPart = navBar[0]; 
  
  // Add Toggle Talk Button After NavBar
  var talkButton = document.createElement("input");
  talkButton.type = "button";
  talkButton.id = "talk-button";
  talkButton.value = "Hide Talk";
  navBarPart.appendChild(talkButton);
  talkButton.addEventListener("click", TalkToggle);
  
  // Add Toggle Edit Button After NavBar
  var editButton = document.createElement("input");
  editButton.type = "button";
  editButton.id = "edit-button";
  editButton.value = "Hide Edit";
  navBarPart.appendChild(editButton);
  editButton.addEventListener("click", EditToggle);
    
  // Setup Array of page types
  var talkPages = document.getElementsByClassName("activity-type-talk");
  var editPages = document.getElementsByClassName("activity-type-edit");

}

// When Edit Button is clicked
function EditToggle() {
  if (specialPlus.showEdit === true) {
    for (var x = 0; x < editPages.length; x++) {
    editPages[x].style.display="none";
    }
    specialPlus.showEdit = false;
    editButton.value = "Show Edit";
    return;
  } // Else
    for (var y = 0; y < editPages.length; y++) {
    editPages[y].style.display="block";
    }
    specialPlus.showEdit = true;
    editButton.value = "Hide Edit";
    return;
}

// When Talk Button is clicked
function TalkToggle() {
  if (specialPlus.showTalk === true) {
    for (var x = 0; x < talkPages.length; x++) {
    talkPages[x].style.display="none";
    }
    specialPlus.showTalk = false;
    talkButton.value = "Show Talk";
    return;
  } else {
    for (var y = 0; y < talkPages.length; y++) {
    talkPages[y].style.display="block";
    }
    specialPlus.showTalk = true;
    talkButton.value = "Hide Talk";
    return;
  }
}

