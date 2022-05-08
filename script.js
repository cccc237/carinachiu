
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Reference from https://github.com/RyanFitzgerald/devportfolio/blob/master/js/scripts.js
    // Create timeline
    // $('#experience-timeline').each(function() {

    //     $this = $(this); // Store reference to this
    //     $userContent = $this.children('div'); // user content

    //     // Create each timeline block
    //     $userContent.each(function() {
    //         $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
    //     });

    //     // Add icons to each block
    //     $this.find('.vtimeline-point').each(function() {
    //         $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
    //     });

    //     // Add dates to the timeline if exists
    //     $this.find('.vtimeline-content').each(function() {
    //         var date = $(this).data('date');
    //         if (date) { // Prepend if exists
    //             $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
    //         }
    //     });

    // });

    // const swiper = new Swiper('.swiper', {
    //     autoplay:{
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    //     // Optional parameters
    //     loop: true,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });

  