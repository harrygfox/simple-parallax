var screen1 = document.getElementById("screen1");
var title = document.getElementById("title");
var lightbulb = document.getElementById("lightbulb");


// Applies a 25% movement in the OPPOSITE direction to the scroll so as to simulate slow movement up the page.
var slow = 4;
// inverted it will speed up the movement up of an element by 4


window.onscroll = function() {
    var y = window.scrollY;
    screen1.style.backgroundPosition = "0px " + (y / slow) + "px";
    title.style.opacity = "1" - (y/300);
    title.style.transform = "translate(0px," + (y/-slow) + "px)";
    lightbulb.style.transform = "translate(0px," + (y/-0.5) + "px)";
}
