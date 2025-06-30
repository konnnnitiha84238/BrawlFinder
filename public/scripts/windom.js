//Loads custom icons

document.addEventListener("DOMContentLoaded", function(event) { 
  const icon = document.getElementById('dynamic-favicon');
  const name = document.getElementById('dynamic-title');
  var selectedValue = localStorage.getItem("selectedOption");
    icon.setAttribute('href', 'https://cdn.glitch.global/0613af7e-1287-4cc5-82d6-2cf4a331136e/taisaku.png?v=1733667132449');
    name.textContent = 'taisaku';
    localStorage.setItem("name", "taisaku");
    localStorage.setItem("icon", "https://cdn.glitch.global/0613af7e-1287-4cc5-82d6-2cf4a331136e/taisaku.png?v=1733667132449");
  var themeid = localStorage.getItem("theme");
  //Loads theme
  themeEle = document.createElement("link");
  themeEle.rel="stylesheet";
  if(themeid == "b") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/themes/bannana.css";
}
if(themeid == "bg") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/themes/blue-green.css";
}
if(themeid == "cr") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/themes/cherryRed.css";
}
if(themeid == "d") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/themes/dark.css";
}
if(themeid == "fg") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/themes/forestGreen.css";
}
if(themeid == "light") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/solid/light.css";
}
if(themeid == "m") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/themes/milkshake.css";
}
if(themeid == "nb") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/themes/nightBlue.css";
}
if(themeid == "rb") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/themes/red-black.css";
}
if(themeid == "v4") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/solid/legacy.css";
}
if(themeid == "midnight") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/solid/midnight.css";
}
if(themeid == "black-red") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-red.css";
}
if(themeid == "black-blue") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-blue.css";
}
if(themeid == "black-green") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-green.css";
}
if(themeid == "red") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/red.css";
}
if(themeid == "purple") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/purple.css";
}
if(themeid == "black-orange") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-orange.css";
}
if(themeid == "ocean-blue") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/solid/ocean-blue.css";
}
if(themeid == "black-purple") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-purple.css";
}
if(themeid == "black-coral") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-coral.css";
}
if(themeid == "black-ruby") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-ruby.css";
}
if(themeid == "black-yellow") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-yellow.css";
}
if(themeid == "black-pink") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-pink.css";
}
if(themeid == "black-white") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/black-white.css";
}
if(themeid == "dark-purple") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/dark-purple.css";
}
if(themeid == "sunset") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/sunset.css";
}
if(themeid == "indigo") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/indigo.css";
}
if(themeid == "fire-ice") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/fire-ice.css";
}
if(themeid == "purple-blue") {
    themeEle.href = "https://cdn.jsdelivr.net/gh/wakame02/kasukuma@master/static/css/theme/gradient/purple-blue.css";
}
document.body.appendChild(themeEle);
});

document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", function() {
    var backgroundInput = document.getElementById("background-input");
    var imageURL = backgroundInput.value;

    if (imageURL !== "") {
      localStorage.setItem("backgroundImage", imageURL);
      document.body.style.backgroundImage = "url('" + imageURL + "')";
      backgroundInput.value = "";
    } else {

    }
  });

  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function() {
    localStorage.removeItem("backgroundImage");
    document.body.style.backgroundImage = "url('default-background.jpg')";
  });

  var savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')";
  }
});

var eventKey = localStorage.getItem("eventKey") || "`";
var panicLink = localStorage.getItem("panicLink") || "https://classroom.google.com/";

document.addEventListener("keydown", function(event) {
  if (event.key === eventKey) {
    if (window.self !== window.top) {
      window.parent.location.href = panicLink;
    } else {
      window.location.href = panicLink;
    }
  }
});

var eventKeyInput = document.getElementById("eventKeyInput");
eventKeyInput.addEventListener("input", function() {
  eventKey = eventKeyInput.value;
});

var linkInput = document.getElementById("linkInput");
linkInput.addEventListener("input", function() {
  panicLink = linkInput.value;
});

function saveEventKey() {
  eventKey = eventKeyInput.value;
  localStorage.setItem("eventKey", eventKey);
  localStorage.setItem("panicLink", panicLink);
}

// Retrieve selected option from localStorage and update the head section
const selectedOption = localStorage.getItem('selectedOption');
if (selectedOption) {
    updateHeadSection(selectedOption);
}
