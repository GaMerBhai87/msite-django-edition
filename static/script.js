
let mimo_invite = "https://getmimo.com/invite/8kbblv";

let my_yt_chnl = "https://youtube.com/channel/UC6nMdm3J17YKsg8nBn_4kYw";

function mimo_red() {
  window.location.replace("https://getmimo.com/invite/8kbblv");
}

function yt_red() {
   window.location.replace("https://youtube.com/channel/UC6nMdm3J17YKsg8nBn_4kYw");
}

// Get the button and the iframe
var btn = document.getElementById("myBtn");
var frame = document.getElementById("myFrame");

// When the user clicks the button, open the popup window
btn.onclick = function() {
  frame.style.display = "block";
  frame.src = "popup1.html";
}

// When the user clicks anywhere outside of the popup window, close it
window.onclick = function(event) {
  if (event.target == frame) {
    frame.style.display = "none";
  }
}

