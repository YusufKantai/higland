// Toggle navigation menu
$('#menu-btn').click(function(){
    $('nav .navigation ul').addClass('active');
});

// Close navigation menu
$('#close-btn').click(function(){
    $('nav .navigation ul').removeClass('active');
});

// Initialize Swiper with autoplay
var swiper = new Swiper('.infrastructure-slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Prevent autoplay from stopping when user interacts with slider
    },
});
