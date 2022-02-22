$(document).ready(function() {
    // Processing triggered on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500 && $(this).scrollTop() < 4650) {
            // Displays the button to return to the top of the page
            $('#toTopBtn').fadeIn();
        } else {
            // Hide the button to return to the top of the page
            $('#toTopBtn').fadeOut();
        }
    });
    // Processing triggered by the click of the button to return to the top of the page
    $('#toTopBtn').click(function() {
        // Animates the scroll effect
        $("html, body").animate({
            scrollTop: 0
        }, 350);
    return false;
    });
});