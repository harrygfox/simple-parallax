var screen1 = document.getElementById("screen1"),
    title = document.getElementById("title"),
    lightbulb = document.getElementById("lightbulb"),
    slow = 4,
    fast = 0.5,
    fadeSpeed = 300,
    y,
    // Applies a 25% movement in the OPPOSITE direction to the scroll so as to simulate slow movement up the page.
        // inverted it will speed up the movement up of an element by 4
    supportPageOffset = window.pageXOffset !== undefined,
        // true or false, browser does not have property .pageXOffset
        // if false (and property is undefined then the browser is probably ie8)
    isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        // true or false, the document is rendered in "Standards mode"
        // if false (and is "BackCompat"), document is rendered in Quirks mode and is probably old.
        
window.onscroll = function() {
    y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
       // defines y as pageYOffset if modern browser
    screen1.style.backgroundPosition = "0px " + (y / slow) + "px";
        // Move elements background position not element itself
    title.style.opacity = "1" - (y / fadeSpeed);
    title.style.transform = "translate(0px," + (y / -slow) + "px)";
    lightbulb.style.transform = "translate(0px," + (y / -fast) + "px)";
}
