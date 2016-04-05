// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};
/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {

  $('.menu-button').on('click', function(ev) {
  ev.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('nav').toggleClass('active');
});


$(function() { // add class on scroll
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 20);
    $element2.toggleClass(className, $document.scrollTop() >= 1);
  });
});

  $('.fullpage').fullpage({
      //Navigation
      //menu: '#menu',
      lockAnchors: false,
      //anchors:['firstPage', 'secondPage'],
      navigation: false,
      navigationPosition: 'right',
      //navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      //normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      resize : false,
      //sectionsColor : ['#ccc', '#fff'],
      paddingTop: '0',
      paddingBottom: '0',
      //fixedElements: 'header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,

      //Custom selectors
      sectionSelector: 'section',
      slideSelector: '.fp-slide',

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });

/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });



});




