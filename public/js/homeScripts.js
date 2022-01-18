var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
});



var nameIntro = document.getElementById("nameIntro");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var middle = document.getElementById("middle");
var lettersLeft = document.getElementById("letters-left");
var lettersRight = document.getElementById("letters-right");

anime.timeline({loop: false})
        .add({
          targets: [nameIntro, line1, line2],
          opacity: [0.5, 1],
          scaleX: [0, 1],
          easing: "easeInOutExpo",
          duration: 700
        })
        .add({
          targets: [line1, line2],
          duration: 600,
          easing: "easeOutExpo",
          translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
        })
        .add({
          targets: middle,
          opacity: [0, 1],
          scaleY: [0.5, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=600'
        })
        .add({
          targets: lettersLeft,
          opacity: [0, 1],
          translateX: ["0.5em", 0],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=300'
        })
        .add({
          targets: lettersRight,
          opacity: [0, 1],
          translateX: ["-0.5em", 0],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=600'
        });

var homeDiv = document.getElementById("homeDiv");
var experienceDiv = document.getElementById("experienceDiv");
var projectsDiv = document.getElementById("projectsDiv");
var aboutDiv = document.getElementById("aboutDiv");
var contactDiv = document.getElementById("contactDiv");




(function($) {

$('#showExp').click(function () {
  homeDiv.style.display = "none";
  experienceDiv.style.display = "block";
  projectsDiv.style.display = "none";
  aboutDiv.style.display = "none";
  contactDiv.style.display = "none";

  
  nav.classList.toggle("show");
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
});
$('#showProj').click(function () {
  homeDiv.style.display = "none";
  experienceDiv.style.display = "none";
  projectsDiv.style.display = "block";
  aboutDiv.style.display = "none";
  contactDiv.style.display = "none";
});
$('#showAbo').click(function () {
  homeDiv.style.display = "none";
  experienceDiv.style.display = "none";
  projectsDiv.style.display = "none";
  aboutDiv.style.display = "block";
  contactDiv.style.display = "none";
});
$('#showCon').click(function () {
  homeDiv.style.display = "none";
  experienceDiv.style.display = "none";
  projectsDiv.style.display = "none";
  aboutDiv.style.display = "none";
  contactDiv.style.display = "block";
});

})(window.jQuery);