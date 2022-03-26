
  
  //toggle settings
  $(function(){
    $("#toggle").click(function(){
        $("#contact").slideToggle("slow");
        return false;
    });
    $(".collapse-icon").click(function(){
      $(".menu-item").slideToggle("slow");
      return false;
  });

  const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
  const sec = urlParams.get('sec')
 
  $('html, body').animate({
   
  scrollTop: $('#' + sec).offset().top-90
  
  }, 1000);
});




$('.nav-tabs').on('click', 'li', function() {
  $('.nav-tabs li.active').removeClass('active');
  $(this).addClass('active');
});
$(document).ready(function() { 
  $.rvFontsize({
      targetSection: '.welcome',
      store: true, // store.min.js required!
      controllers: {
          appendTo: '.rvfs-controllers',
          showResetButton: true
      }
  }); 
});


$(function () {

  initHijrDatePicker();

  //initHijrDatePickerDefault();

  $('.disable-date').hijriDatePicker({

      minDate:"2020-01-01",
      maxDate:"2021-01-01",
      viewMode:"years",
      hijri:true,
      debug:true
  });

});


function initHijrDatePicker() {

  $(".hijri-date-input").hijriDatePicker({
      locale: "ar-sa",
      format: "DD-MM-YYYY",
      hijriFormat:"iYYYY-iMM-iDD",
      dayViewHeaderFormat: "MMMM YYYY",
      hijriDayViewHeaderFormat: "iMMMM iYYYY",
      showSwitcher: true,
      allowInputToggle: true,
      showTodayButton: false,
      useCurrent: true,
      isRTL: false,
      viewMode:'months',
      keepOpen: false,
      hijri: false,
      debug: true,
      showClear: true,
      showTodayButton: true,
      showClose: true
  });
}

function initHijrDatePickerDefault() {

  $(".hijri-date-input").hijriDatePicker();
};


$(document).ready(function () {
  $(".link_travel").click(function () {
    $(".one_travel").hide();
    $(".New_tab").show();
  });
  $(".Travel").click(function () {
    $(".one_travel").show();
    $(".New_tab").hide();
  });
});

$('.link1Div, .link2Div, .link3Div').hide();
$('.link1').click(function(e){
  
  $('.link1Div').fadeToggle();
$('.link2Div,.link3Div').hide();
});
$('.link2').click(function(e){
  
  $('.link2Div').slideToggle();
$('.link1Div,.link3Div').hide();

});
$('.link3').click(function(e){
  
  $('.link3Div').slideToggle();
$('.link1Div, .link2Div').hide();

});

// $(document).click(function(){
//      $('.link1Div, .link2Div, .link3Div').hide();

// });



//just some js to simulate fake loading time

function removeClass(){  
myButton.className = myButton.className.replace(new RegExp('(?:^|\\s)loading(?!\\S)'), '');
}

var myButton = document.getElementById('myButton');


myButton.addEventListener("click", function() {
myButton.className = myButton.className + ' loading';
setTimeout(removeClass, 2000);
}, false);

// setting'icons
$(document).ready(function() {
$('.nav-toggle').click(function(){
var collapse_content_selector = $(this).attr('href');
var toggle_switch = $(this);
  $('.btn-group').removeClass('selected');
  if($(collapse_content_selector).css('display')=='none'){
    $('.btn-group').hide();

  }

$(collapse_content_selector).toggle(function(){
  if($(this).css('display')=='none'){
    toggle_switch.parent().parent().removeClass('selected');

  }else{
    toggle_switch.parent().parent().addClass('selected');

  }
});
});


})
// function hide id  collapse3 when click img

function hideAll(){
  $('#collapse3').hide();
 }

$('#switch-img1').click(function() {
  hideAll();

})

$('#switch-img2').click(function() {
  hideAll();

})
$('#switch-img3').click(function() {
  hideAll();

})


function hideAll(){
$('#collapse3').hide();

}

function imgSmile(){
  hideAll();
};



// counterUp

