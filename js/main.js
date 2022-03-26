var Swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	visibilityFullFit: true,
	loop: true,
    nav:true,
	autoplay: true,
  centeredSlides: true,
	slidesPerView: 3,
	grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	autoplayDisableOnInteraction: false,
	speed: 2000,
	breakpoints: {
		480: {
			slidesPerView: 1
		},
		740: {
			slidesPerView: 2
		},
		960: {
			slidesPerView: 3
		},
		1280: {
			slidesPerView: 3
		}
	}
});
// ------------step-wizard-------------
$(document).ready(function () {
  $('.nav-tabs > li a[title]').tooltip();
  
  //Wizard
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

      var target = $(e.target);
  
      if (target.parent().hasClass('disabled')) {
          return false;
      }
  });

  $(".next-step").click(function (e) {

      var active = $('.wizard .nav-tabs li.active');
      active.next().removeClass('disabled');
      nextTab(active);

  });
  $(".prev-step").click(function (e) {

      var active = $('.wizard .nav-tabs li.active');
      prevTab(active);

  });
});
$('.menuToggle').on('click',function(){
  $(this).toggleClass('menuToggle_open');
  $(".menu").toggleClass('hideMenu');

});
// $(function(){
//   var hash = window.location.hash;
//   hash && $('.navbar-nav a[href="' + hash + '"]').tab('show'); 
//   $('.navbar a').click(function (e) {
//      $(this).tab('show');
//      var scrollmem = $('body').scrollTop();
//      window.location.hash = this.hash;
//   });
// });



  // // themecolors
  document.body.classList.add(localStorage.getItem("pageColor") || "root");
  var el = document.querySelectorAll('.color-switcher li');
  var classesList = [];
  
   // loop on elements
    for (var i = 0 ; i < el.length; i++) {
     //get classes list
     classesList.push(el[i].getAttribute('data-color'));
     el[i].addEventListener("click",function(){
       //remove all old classes
       document.body.classList.remove(...classesList);
       document.body.classList.add(this.getAttribute("data-color"));
       //add data to local storage
       localStorage.setItem("pageColor",this.getAttribute("data-color"));
     },
     false
     );
   }
   var theInterval;




$('.scrollTo').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top-90
  }, 500);
  return false;
});

// carol

$('.carol').owlCarousel({
  loop:true,
  margin:10,
  rtl:true,
  dots:false,
  nav:true,
  mouseDrag:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
$('.caroll').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  nav:true,
  rtl:true,
  mouseDrag:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
});
// slides
// owl
$('.slides').owlCarousel({
  loop:true,
  margin:10,
  rtl:true,
  dots:false,
  nav:true,
  mouseDrag:false,
  autoplay:true,
  speed: 1900,
  navSpeed: 500,
  autoplayTimeout: 12000,
  slideSpeed:1000,
  lazyLoad: 'progressive',
  // animateOut: 'slideOutIn',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
});

// owl
$('.owll').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  nav:true,
  rtl:true,
  mouseDrag:false,
  autoplay:true,
  speed: 1700,
  navSpeed: 500,
  autoplayTimeout: 8000,
  lazyLoad: 'progressive',
  // animateOut: 'slideOutIn',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:5
      }
  }
});

$('#owll').owlCarousel({
  loop:true,
  margin:10,
  rtl:true,
  dots:false,
  nav:true,
  mouseDrag:false,
  autoplay:true,
  speed: 1000,
  navSpeed: 500,
  autoplayTimeout: 3000,
  lazyLoad: 'progressive',
  // animateOut: 'slideOutIn',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
});



$("#input-1").hover(function() {
    $('#basic-addon2').show();
}
)
 $("#basic-addon2").mouseover(function(){
    $('#basic-addon2').show();
});
$("#basic-addon2").mouseout(function(){
  $('#basic-addon2').hide();
});
$("body").click(function(){
  $('#basic-addon2').hide();
});
$('#carouselExampleIndicators22').carousel({
  interval: 200* 100
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// $(".searchBox").hover(function() {
// 	$(this).addClass("hovered");
//     $("#intro , .intro").on("click", function() {
//      $(".searchBox").removeClass("hovered");
// });
//     });
$(window).scroll(function(){
	$('.Bar').toggleClass('scrolled', $(this).scrollTop() > 0);

});

// $('.js-scroll').click (function () {
// $(document).ready(function () {
//   $('section').animate({
//     scrollTop:$('section').offset().top+300
//       }, 1000)
  
//     })
//    })
// $(function(){
//   var hash = window.location.hash;
//   hash && $('.navbar-nav a[href="' + hash + '"]').tab('show'); 
//   $('.navbar-nav a').click(function (e) {
//      $(this).tab('show');
//      var scrollmem = $('body').scrollTop();
//      window.location.hash = this.hash;
//   });
// });



$(function(){
  $('.label').click(function(){
      $(this).next('.test').slideToggle();
  });
});
$(document).ready(function() {
  $("#example").DataTable({
    aaSorting: [],
    responsive: true,

    columnDefs: [
      {
        responsivePriority: 1,
        targets: 0
      },
      {
        responsivePriority: 2,
        targets: -1
      }
    ]
  });

  $(".dataTables_filter input")
    .attr("placeholder", "Search here...")
    .css({
      width: "300px",
      display: "inline-block"
    });

  $('[data-toggle="tooltip"]').tooltip();
});


// $('.dropdown').hover(function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(200);
// }, function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
// });



// Gets the video src from the data-src on each button
$(document).ready(function() {
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
  
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
      
  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc); 
  })  
  // document ready  
  });

  






let showFilters = false;
if (showFilters){
 document.getElementById("FiltersBox").style.display = "grid";
} else {
 document.getElementById("FiltersBox").style.display = "none";
}

function toggleFilters (){
  showFilters = !showFilters;
  
  if (showFilters){
    document.getElementById("FiltersBox").style.display = "grid";
  } else {
    document.getElementById("FiltersBox").style.display = "none";
  }
};


