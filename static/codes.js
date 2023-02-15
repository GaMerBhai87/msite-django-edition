
function dis_img() {
  var a = document.getElementsByTagName("input")[0].value;
  if (a == "Show a confused monkey") {
    document.getElementsByTagName("input")[0].value = "Hide a confused monkey";
    document.getElementById("vinayak").style.display = "block";
}
else {
  document.getElementsByTagName("input")[0].value = "Show a confused monkey";
  document.getElementById("vinayak").style.display = "none";
}}


//function playsound(audioname) {
//    let audio = new Audio(audioname);
//    audio.play();
    
//}


function dis_srav() {
  var a = document.getElementsByTagName("input")[1].value;
  if (a == "Show kandammessi") {
    document.getElementsByTagName("input")[1].value = "Hide kandammessi";
    document.getElementById("srav_img").style.display = "block";
}
else {
  document.getElementsByTagName("input")[1].value = "Show kandammessi";
  document.getElementById("srav_img").style.display = "none";
}}

//let sbutton = document.getElementById("kdm")

//sbutton.addEventListener("click", playsound)