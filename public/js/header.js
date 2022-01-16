
var theLetters = document.querySelector('.letters');
theLetters.innerHTML = theLetters.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
    .add({
        targets: '.moveLetters .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 1250,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
    });
    