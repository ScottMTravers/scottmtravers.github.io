// Bootstrap Smooth Scroll
$("#fixed-navbar a").on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
    // Prevent default anchor click behavior
        event.preventDefault();
    // Store hash
        var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
    // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});

// Contact Form Tab Toggle
$(document).ready(function(){

    $('#contact-tab').on('click', function() {
        $('.nav-tabs li:first-child a').tab('show');
    });
    $('#hire-tab').on('click', function() {
        $('.nav-tabs li:eq(1) a').tab('show');
    });
});

// Collapse Navbar at XS-Device
$('.navbar-collapse a').click(function (e) {
    if  (window.innerWidth < 768){
        $('.navbar-collapse').collapse('toggle');
    }
});

// Add asterik to required form inputs
var requiredFields = document.querySelectorAll('[required]');
for (let i = 0; i < requiredFields.length; i++){
    var label = requiredFields[i];
    var input = label.previousElementSibling;
    var requiredSpan = document.createElement('span');
    requiredSpan.classList = 'orange-text';
    requiredSpan.textContent = '*';
    input.appendChild(requiredSpan);
}

// Current Year
var date = new Date();
var year = date.getYear() + 1900;
var copyright = document.querySelector('.fa-copyright');
copyright.textContent = ' ' + year;
