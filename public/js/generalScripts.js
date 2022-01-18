var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById("nav");



var homeDiv = document.getElementById("homeDiv");
var experienceDiv = document.getElementById("experienceDiv");
var projectsDiv = document.getElementById("projectsDiv");
var aboutDiv = document.getElementById("aboutDiv");
var contactDiv = document.getElementById("contactDiv");



var nameIntro = document.getElementById("nameIntro");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var middle = document.getElementById("middle");
var lettersLeft = document.getElementById("letters-left");
var lettersRight = document.getElementById("letters-right");



//variables for language bars
var javaBar = document.getElementById("java");
var htmlBar = document.getElementById("html");
var phpBar = document.getElementById("php");
var pyBar = document.getElementById("python");
var cBar = document.getElementById("c+");



//variables for library bars
var bootBar = document.getElementById("bootstrap");
var ajsBar = document.getElementById("animeJS");



//variables for nav buttons
var homeButton = document.getElementById("showHome");
var experienceButton = document.getElementById("showExp");
var projectsButton = document.getElementById("showProj");
var aboutButton = document.getElementById("showAbo");
var contactButton = document.getElementById("showCon");

homeButton.style.display = "none";
experienceButton.style.display = "none";
projectsButton.style.display = "none";
aboutButton.style.display = "none";
contactButton.style.display = "none";

(function($) {
  $('#projects-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#icon').click(function() {
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');

    homeButton.style.display = "block";
    experienceButton.style.display = "block";
    projectsButton.style.display = "block";
    aboutButton.style.display = "block";
    contactButton.style.display = "block";
  });

  $('#showHome').click(function() {
    homeDiv.style.display = "block";
    experienceDiv.style.display = "none";
    projectsDiv.style.display = "none";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";

    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle("show");

    homeButton.style.display = "none";
    experienceButton.style.display = "none";
    projectsButton.style.display = "none";
    aboutButton.style.display = "none";
    contactButton.style.display = "none";

    tl.play();
  });
  $('#showExp').click(function () {
    homeDiv.style.display = "none";
    experienceDiv.style.display = "block";
    projectsDiv.style.display = "none";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";

    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle("show");

    homeButton.style.display = "none";
    experienceButton.style.display = "none";
    projectsButton.style.display = "none";
    aboutButton.style.display = "none";
    contactButton.style.display = "none";

    bar1.play();
    bar2.play();
    bar3.play();
    bar4.play();
    bar5.play();
  });
  $('#showProj').click(function () {
    homeDiv.style.display = "none";
    experienceDiv.style.display = "none";
    projectsDiv.style.display = "block";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";

    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle("show");    

    homeButton.style.display = "none";
    experienceButton.style.display = "none";
    projectsButton.style.display = "none";
    aboutButton.style.display = "none";
    contactButton.style.display = "none";
  });
  $('#showAbo').click(function () {
    homeDiv.style.display = "none";
    experienceDiv.style.display = "none";
    projectsDiv.style.display = "none";
    aboutDiv.style.display = "block";
    contactDiv.style.display = "none";

    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle("show");

    homeButton.style.display = "none";
    experienceButton.style.display = "none";
    projectsButton.style.display = "none";
    aboutButton.style.display = "none";
    contactButton.style.display = "none";
  });
  $('#showCon').click(function () {
    homeDiv.style.display = "none";
    experienceDiv.style.display = "none";
    projectsDiv.style.display = "none";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "block";

    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle("show");

    homeButton.style.display = "none";
    experienceButton.style.display = "none";
    projectsButton.style.display = "none";
    aboutButton.style.display = "none";
    contactButton.style.display = "none";
  });



})(window.jQuery);

var tl = anime.timeline({
  duration: 600
});

// Add children
tl
.add({
  targets: [nameIntro, line1, line2],
  opacity: [0.5, 1],
  scaleX: [0, 1],
  easing: "easeInOutExpo",
  duration: 700,
})
.add({
  targets: [line1, line2],
  duration: 600,
  easing: "easeOutExpo",
  translateY: (el, i) => (-0.625 + 0.625*2*i) + "em",
})
.add({
  targets: middle,
  opacity: [0, 1],
  scaleY: [0.5, 1],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=600',
}).add({
  targets: lettersLeft,
  opacity: [0, 1],
  translateX: ["0.5em", 0],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=300',
}).add({
  targets: lettersRight,
  opacity: [0, 1],
  translateX: ["-0.5em", 0],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=600',
});


//separate timeline animations to ensure they all run at the same time
var bar1 = anime.timeline({
  autoplay: false,
  duration: 1000,
});
  bar1.add({
    targets: [javaBar, htmlBar],
    width: 100,
    easing: 'linear',
  });

var bar2 = anime.timeline({
  autoplay: false,
  duration: 1000,
});
  bar2.add({
    targets: [phpBar, pyBar],
    width: 60,
    easing: 'linear',
  });

var bar3 = anime.timeline({
  autoplay: false,
  duration: 1000,
});
  bar3.add({
    targets: [cBar],
    width: 30,
    easing: 'linear',
  });

var bar4 = anime.timeline({
  autoplay: false,
  duration: 1000,
});
  bar4.add({
    targets: [bootBar],
    width: 90,
    easing: 'linear',
  });

var bar5 = anime.timeline({
  autoplay: false,
  duration: 1000,
});
  bar5.add({
    targets: [ajsBar],
    width: 40,
    easing: 'linear',
  });
