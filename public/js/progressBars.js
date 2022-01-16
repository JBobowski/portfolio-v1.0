//variables for language bars
var javaBar = document.getElementById("java");
var htmlBar = document.getElementById("html");
var phpBar = document.getElementById("php");
var pyBar = document.getElementById("python");
var cBar = document.getElementById("c");

//variables for library bars
var bootBar = document.getElementById("bootstrap");
var ajsBar = document.getElementById("animeJS");

//separate timeline animations to ensure they all run at the same time
anime.timeline({loop: false})
    .add({
        targets: [javaBar, htmlBar],
        width: 100,
        easing: 'linear',
        duration: 1500
        
    });
anime.timeline({loop: false})
    .add({
        targets: [phpBar, pyBar],
        width: 60,
        easing: 'linear',
        duration: 1500
    });
anime.timeline({loop: false})
    .add({
        targets: [cBar],
        width: 30,
        easing: 'linear',
        duration: 1500
    });
anime.timeline({loop: false})
    .add({
        targets: [bootBar],
        width: 90,
        easing: 'linear',
        duration: 1500
    });
anime.timeline({loop: false})
    .add({
        targets: [ajsBar],
        width: 40,
        easing: 'linear',
        duration: 1500
    });

//makes all lists, that the labels and bars are in, the same height as each other
$(document).ready(function(){
    $(".adjust").css({
        'height': ($(".reference").height()+'px')
    });
});
$(document).ready(function(){
    $(".adjust2").css({
        'height': ($(".reference2").height()+'px')
    });
});
