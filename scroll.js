var screen1 = document.getElementById("screen1");
var title = document.getElementById("title");
var lightbulb = document.getElementById("lightbulb");
lightbulb.style.transform = "translate(0px,500px)"
var screen2 = document.getElementById("screen2");

// Applies a 20% movement in the OPPOSITE direction to the scroll so as to simulate slow movement up the page.
var slow = 4;


window.onscroll = function() {
    var y = window.scrollY;
    screen1.style.backgroundPosition = "0px " + (y / slow) + "px";
    title.style.opacity = "1" - (y/300);
    title.style.transform = "translate(0px," + (y/-slow) + "px)"

    lightbulb.style.transform = "translate(0px," + (y/-0.25) + "px)"
    screen2.style.transform = "translate(0px," + (y/-1.1) + "px)"
}
