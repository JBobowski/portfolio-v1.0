/*var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '../node_modules/animejs/lib/anime.min.js';
  document.body.appendChild(script);
*/

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