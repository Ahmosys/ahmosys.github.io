// Allows you to add animations to DOM elements triggered on the scroll.
// https://scrollrevealjs.org/
$(document).ready(function() {
    ScrollReveal().reveal("#skills .card", { 
        reset: false,
        interval: 150,
        origin: 'bottom',
        distance: '100px',
    });
    ScrollReveal().reveal("#courses .card", { 
        delay: 350,
        reset: false,
        interval: 150,
        origin: 'bottom',
        distance: '100px',
    });
});