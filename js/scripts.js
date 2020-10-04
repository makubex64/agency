(function ($) {
    "use strict"; // Start of use strict


    // Smooth scrolling using jQuery easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // fadein 

})(jQuery); // End of use strict

<<<<<<< HEAD
$(document).ready(function(){
        $(".masthead-subheading").delay(4000).fadeIn();

})
=======
var navBarLi = document.querySelectorAll('.nav-item .nav-link')
console.log(navBarLi)
>>>>>>> 8f26df0197c67337a7b02a9e89268b5b94721f60
