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
if (window.params.isMobile) {
  $('body').addClass('mobile');
  $('section').each(function(index, el) {
    var content = $(this).html();
    content = '<div class="cell">'+content+'</div>';
    $(this).html(content);
  });
}


jQuery(document).ready(function($) {

/*loading svg*/
  $.ajax({
      url : "images/house.svg",
      dataType: "text",
      success : function (data) {
          $(".houseMap").html(data);
      }
  });

  $.ajax({
      url : "images/floor-1.svg",
      dataType: "text",
      success : function (data) {
          $(".floorPlan").html(data);
      }
  });

  $.ajax({
      url : "table.txt",
      dataType: "text",
      success : function (data) {
          $(".tableBlock").html(data);
      }
  });


var houseSec = $('.houseSection, .flatSection, .floorSection, .flatsTable');


/* house svg click */
$(document).on('click', 'g.floor', function() {
  $('.houseSection').removeClass('current');
  var number = $(this).data('floor');
  $('.floorSection[data-num="' + number + '"]').addClass('current');
  $('.floorNav span').removeClass('active');
  $('.floorNav span[data-floor="' + number + '"]').addClass('active');
});

/* floor svg click */
$(document).on('click', '.floorPlan  polygon', function() {
  $(houseSec).removeClass('current');
  var floorNumber = $(this).parents('.floorSection').data('num');
  var number = $(this).data('flat');
  $('.flatSection[data-floor="' + floorNumber + '"][data-num="' + number + '"]').addClass('current');
});


/* floor navigation click (1,2,3)*/
$('.floorNav span').click(function() {
  $(houseSec).removeClass('current');
 $('.floorNav span').removeClass('active');
  $(this).addClass('active');
  var number = $(this).data('floor');
  $('.floorSection[data-num="' + number + '"]').addClass('current');
  $('body').removeClass('viewingFlat');
});



/* backToHouse */
$('.backToHouse').click(function() {
  $('.floorNav span').removeClass('active');
  $(houseSec).removeClass('current');
  $('.houseSection').addClass('current');
  $('.flatsTable').removeClass('current');
});


/* backToFloor */
$('.backToFloor').click(function() {
  var number = $('.current').data('floor');
  $(houseSec).removeClass('current');
  $('.floorSection[data-num="' + number + '"]').addClass('current');
  $('body').removeClass('viewingFlat');
  $('body').removeClass('viewingTable');
});




/* change backTo block ( toFloor or toHouse ) */
$(document).click(function () {
if ($('.floorSection').hasClass('current')) {
  $('body').addClass('viewingFloor');
} else if ($('.flatSection').hasClass('current')) {
  $('body').removeClass('viewingFloor');
  $('body').addClass('viewingFlat');  
  $('body').removeClass('viewingTable');  
}
else if ($('.flatsTable').hasClass('current')) {
  $('body').removeClass('viewingFloor');
  $('body').removeClass('viewingFlat');
  $('body').addClass('viewingTable'); 
  $('.viewingTable .backToFloor').click(function() {
      $(houseSec).removeClass('current');
      $('.floorSection[data-num="1"]').addClass('current');
      $('body').removeClass('viewingFlat');
      $('body').removeClass('viewingTable');
      $('.flatsNav span').removeClass('active');
      $('.flatsNav span:nth-child(1)').addClass('active');
  });   
}
else {
  $('body').removeClass('viewingFloor');
  $('body').removeClass('viewingFlat');
  $('body').removeClass('viewingTable');  
}
});



/* flats navigation (on the left bottom) ) */
$('.flatsNav span').click(function () {
  $('.flatsNav span').removeClass('active');
  $(this).addClass('active');
  $('body').removeClass('viewingFlat');
  $('body').removeClass('viewingTable');
});

$('.flatsNav span:nth-child(1)').click(function () {
  $(houseSec).removeClass('current');
  $('.floorSection[data-num="1"]').addClass('current');
  $('.floorNav span').removeClass('active');
  $('.floorNav span:nth-child(1)').addClass('active');
});

$('.flatsNav span:nth-child(2)').click(function () {
  $(houseSec).removeClass('current');
  $('.flatsTable').addClass('current');
  $('.floorNav span').removeClass('active');
});


$('.addInfo, .property').css('opacity', '1')

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


  if (!window.params.isMobile) {
    $('body').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.fullpage/2.5.9/jquery.fullPage.min.css">');

    if ( $('.fullpage').length > 0) {
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
          scrollingSpeed: 1500,
          autoScrolling: true,
          fitToSection: true,
          fitToSectionDelay: 0,
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
      $(document).on('click', '.scroll_down', function(){
        $.fn.fullpage.moveSectionDown();
      });
    }
    
  }




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

$('.offerSlider').slick({
  dots: false,
  arrows: false,
  adaptiveHeight: true
});

});




