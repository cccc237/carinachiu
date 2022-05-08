
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

    ( function($) {
  
        $(document).ready(function() {
          
          var s           = $('.slider'),
              sWrapper    = s.find('.slider-wrapper'),
              sItem       = s.find('.slide'),
              btn         = s.find('.slider-link'),
              sWidth      = sItem.width(),
              sCount      = sItem.length,
              slide_date  = s.find('.slide-date'),
              slide_title = s.find('.slide-title'),
              slide_text  = s.find('.slide-text'),
              slide_more  = s.find('.slide-more'),
              slide_image = s.find('.slide-image img'),
              sTotalWidth = sCount * sWidth;
          
          sWrapper.css('width', sTotalWidth);
          sWrapper.css('width', sTotalWidth);
          
          var clickCount  = 0;
          
          btn.on('click', function(e) {
            e.preventDefault();
      
            if( $(this).hasClass('next') ) {
              
              ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
            } else if ( $(this).hasClass('prev') ) {
              
              ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
            }
            TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
      
      
            //CONTENT ANIMATIONS
      
            var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
            var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
      
            TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
      
          });
                
        });
      })(jQuery);
      
      $('.overlay').addClass('overlay-blue');
      