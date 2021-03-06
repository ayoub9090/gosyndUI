(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });


  $('.select2').select2({
    width: '100%'
  });
  $('.select2-optgroup').select2({
    width: '100%'
  });
  $('.select2-multi').select2({
    width: '100%'
  });

  $("body").on('click', '.select2-results__group', function () {
    $(this).siblings().toggle();
  })

  $(".select2-tags").select2({
    tags: true,
    tokenSeparators: [',', ' '],
    width: '100%'
  });

  $('.date-picker').datepicker();





  $(".datepicker-year").datepicker({
    format: "yyyy",
    viewMode: "years",
    minViewMode: "years",
    autoclose: true //to close picker once year is selected
  });


})(jQuery); // End of use strict


$(document).ready(function () {
  if ($(".tip").length) {
    //activate tooltip
    $(".tip").tooltip();
  }
});


function showSuccess() {
  $('.success-gif').show();
  setTimeout(function () {
    $('.success-gif').hide();
  }, 1500)
}

function toggleContactUs() {
  $('form.user').toggleClass('hideUser');
  $('.contact-us').toggleClass('showContact');
}

$(".toggle-password").click(function () {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

function toggleContactUs() {
  //$('.first-toggled-animation').toggleClass('hide');
  $('.toggledAnimate').toggleClass('show');
}

function goNext(s) {
  let step = parseInt(s);

  if (step == 1) {
    $('.step' + (step - 1)).toggleClass('hide');
  }

  $('.step' + (step)).toggleClass('hide');

  $('.register-form--step' + (step)).toggleClass('hide');
  $('.register-form--step' + (step + 1)).toggleClass('hide');

  $('.step-progress > div').css({
    'width': (step * 25) + '%'
  });
  $('.step-progress > div').attr({
    'aria-valuenow': (step * 25) + '%'
  });

  if (step == 1) {
    $('.step-progress').toggleClass('hide');
    $('.steps-description').addClass('hide');
    $('.steps-description--then').removeClass('hide');
    $('.step-percentage').toggleClass('hide');
  } else if (step == 4) {
    $('.steps-description').addClass('hide');
    $('.steps-description--then').removeClass('hide');
  }

  $('.step-percentage').text((step * 25) + '%');

}


function showForgetPassword() {
  $('.h-100-sm-overflow').addClass('no-overflow');
  setTimeout(function () {
    $('.h-100-sm-overflow').removeClass('no-overflow');
  }, 1200);
  $('.forget-password').removeClass('hide');
  $('.login-form').addClass('hide');
}


function showResetPassword() {
  $('.h-100-sm-overflow').addClass('no-overflow');
  setTimeout(function () {
    $('.h-100-sm-overflow').removeClass('no-overflow');
  }, 1200);
  $('.reset-password').removeClass('hide');
  $('.login-form').addClass('hide');
  $('.forget-password').addClass('hide');
}

function showLogin() {
  $('.h-100-sm-overflow').addClass('no-overflow');
  setTimeout(function () {
    $('.h-100-sm-overflow').removeClass('no-overflow');
  }, 1200);
  $('.reset-password').addClass('hide');
  $('.login-form').removeClass('hide');
  $('.forget-password').addClass('hide');
}


let startStickyPoint = document.querySelector('.main-nav').offsetHeight;
window.addEventListener('scroll', function () {
  var header = document.querySelector('.main-nav');
  header.classList.toggle("stickyNav", window.scrollY > startStickyPoint);
})

function goSearch() {
  $('.masthead--searchInput').focus()
}

function openAutoComplete() {
  $('.masthead--search').addClass('showAutoComplete');
}

function closeAutoComplete() {
  $('.masthead--search').removeClass('showAutoComplete');
}

if ($('.tender-row').length > 0) {
  const swiper = new Swiper('.tender-row', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 15,
      }
    }

  });
}
if ($('.home-big-row').length > 0) {
  const swiper = new Swiper('.home-big-row', {
    preventClicksPropagation: false,
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: -20,
    loop: true,
    breakpoints: {

      768: {
        slidesPerView: 1.6,
        spaceBetween: -50
      },
      1600: {
        slidesPerView: 1.6,
        spaceBetween: 0
      }
    }

  });
}




function toggleCheck(el) {
  $(el).toggleClass('checked');
}

//Map areas scripts

$('.map-menu a.map-nav').click(function () {
  $('.map-menu li.active').removeClass('active showSub');

  $(this).parent('li').addClass('active showSub');

  setTimeout(function () {
    let top = $('.map-menu li.active').offset().top - $('.map-menu').offset().top;
    $('.map-menu .effect').css('top', top);
  }, 430);
});


$(document).ready(function () {
  //highlight map areas
  if ($('.svgMap').length > 0) {
    $('.map-menu a.map-nav').each(function () {
      let area = $(this).attr('data-area');
      $('path.' + area).addClass('activeArea');
    });
  }
});


function toggleMap(area) {
  $('path.activeArea').removeClass('activeArea');

  $('path.' + area).addClass('activeArea');
}


function toggleView() {
  if ($('.tenders-boxes--table').length > 0) {
    $('.togglerView .grid-sort').fadeIn(200);
    $('.togglerView .table-icon').fadeOut(200);
    $('.tenders-boxes').removeClass('tenders-boxes--table');
  } else {
    $('.togglerView .grid-sort').fadeOut(200);
    $('.togglerView .table-icon').fadeIn(200);
    $('.tenders-boxes').addClass('tenders-boxes--table');
  }
}