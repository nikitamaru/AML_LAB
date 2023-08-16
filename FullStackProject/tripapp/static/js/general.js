$(document).ready(function() {


    // Calling carousel function
    $("#boxes").owlCarousel({
    	responsiveClass:true,
       responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        768:{
            items:3,
        }
    }
    });

    $(".company-logo.owl-carousel").owlCarousel({
    	responsiveClass:true,
       responsive:{
        0:{
            items:1,
        },
        567:{
            items:3,
        },
          768:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
    });

   // humberger menu

    $('.menu').bind('click',function(event){
          $('.mainnav ul').slideToggle();
      });

      $(window).resize(function(){
          var w = $(window).width();
          if(w > 767) {
              $('.mainnav ul').removeAttr('style');
          }
      });

      //banner height according window size

      $('.banner').height($(window).height());

    //header menu li active class
  $("header .mainnav ul li a").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);

//search-bar toggle

 $('.searchbar a').click(function(){
      $('.search-box').toggle();
    });


//tab

 var $tabs = $('#horizontalTab');
    $tabs.responsiveTabs({
    startCollapsed: 'accordion',
   collapsible: 'accordion',
   click: function(e, tab) {
    $('.info').html('Tab <strong>' + tab.id + '</strong> clicked!');
},
    activate: function(e, tab) {
    $('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
},
   activateState: function(e, state) {
   //console.log(state);
   $('.info').html('Switched from <strong>' + state.oldState + '</strong> state to <strong>' + state.newState + '</strong> state!');
}
});



//file-upload
$('#btn').click(function(){
   $("input[type='file']").trigger('click');
})

$('#upload').click(function(){
   $("input[type='file']").trigger('click');
})

$("input[type='file']").change(function(){
   $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
})

//drop-down
$(function(){

  $('#select').wombatSelect();

});

$(function(){

  $('#footer-dropdown').wombatSelect();

});


//savedata

$('.upload-data #save').click(function(){
  $('.upload-data .save-data').css('display','block');
  $('.upload-data .lyrics-data').css('display','none');
});

//accordian view
if(!$($(".upload-data ul.tabs li.current a").attr("href")).is(':visible')) {
  $('.upload-data ul.tabs li.current a').click();
}

// Next and Back functionality
// $('.upload-data button.btn-pink.next').click(function(){
//   $('.upload-data ul.tabs li.current').closest('li').next().addClass('r-tabs-state-active current');
//   $('.upload-data ul.tabs li.current').closest('li').prev().removeClass('current');
//   //trigger click event
//   $('.upload-data ul.tabs li.current a').click();

//   //footer
//   if($('.upload-data ul.tabs li.current a').attr('href') == '#tab-5' || $('.upload-data ul.tabs li.current a').attr('href') == '#tab-6') {
//     $('.upload footer').show();
//   } else {
//     $('.upload footer').hide();
//   }

// });


$('#required_button').click(function(){
  console.log("Click me");

  try {
    var imgVal = $('#lrc_song_file_macro_1').val();

  } catch (error) {
    var imgVal = 'not empty'
  }
        if(imgVal=='')
        {
            alert("empty input file");


        }

        else{
          console.log("wtf");

          // alert("in else");

  $('.upload-data ul.tabs li.current').closest('li').next().addClass('r-tabs-state-active current');
  $('.upload-data ul.tabs li.current').closest('li').prev().removeClass('current');
  //trigger click event
  $('.upload-data ul.tabs li.current a').click();

  //footer
  if($('.upload-data ul.tabs li.current a').attr('href') == '#tab-5' || $('.upload-data ul.tabs li.current a').attr('href') == '#tab-6') {
    $('.upload footer').show();
  } else {
    $('.upload footer').hide();
  }
}
        return false;
});


$('#required_button_2').click(function(){
  console.log("Click me");

  try {
    var title_macro_1 = $('#title_macro_1').val();
    var artist_macro_1 = $('#artist_macro_1').val();

    // var checkbox = ;





  } catch (error) {
    var imgVal = 'not empty'
  }
        if(title_macro_1=='')
        {
            alert("Title is required");


        }
        else if(artist_macro_1=='')
        {
          alert("Artist Name is required");
        }
        else if($('input[id="checkbox_olds"]:checkbox').length == 0)
        {
          alert("Please agree to the terms and service");
        }


        else{
          console.log("wtf");

          // alert("in else");

  $('.upload-data ul.tabs li.current').closest('li').next().addClass('r-tabs-state-active current');
  $('.upload-data ul.tabs li.current').closest('li').prev().removeClass('current');
  //trigger click event
  $('.upload-data ul.tabs li.current a').click();

  //footer
  if($('.upload-data ul.tabs li.current a').attr('href') == '#tab-5' || $('.upload-data ul.tabs li.current a').attr('href') == '#tab-6') {
    $('.upload footer').show();
  } else {
    $('.upload footer').hide();
  }
}
        return false;
});



$('#required_button_3').click(function(){
  console.log("Click me");

  try {
    var imgVal = $('#track_image').val();

  } catch (error) {
    var imgVal = 'not empty'
  }
        if(imgVal=='')
        {
            alert("Track image is required");


        }

        else{
          console.log("wtf");

          // alert("in else");

  $('.upload-data ul.tabs li.current').closest('li').next().addClass('r-tabs-state-active current');
  $('.upload-data ul.tabs li.current').closest('li').prev().removeClass('current');
  //trigger click event
  $('.upload-data ul.tabs li.current a').click();

  //footer
  if($('.upload-data ul.tabs li.current a').attr('href') == '#tab-5' || $('.upload-data ul.tabs li.current a').attr('href') == '#tab-6') {
    $('.upload footer').show();
  } else {
    $('.upload footer').hide();
  }
}
        return false;
});



$('#required_button_4').click(function(){
  console.log("Click me");

  try {
    var imgVal = $('#lrc_song_file_macro_1').val();

  } catch (error) {
    var imgVal = 'not empty'
  }
        if(imgVal=='')
        {
            alert("empty input file");


        }

        else{
          console.log("wtf");

          // alert("in else");

  $('.upload-data ul.tabs li.current').closest('li').next().addClass('r-tabs-state-active current');
  $('.upload-data ul.tabs li.current').closest('li').prev().removeClass('current');
  //trigger click event
  $('.upload-data ul.tabs li.current a').click();

  //footer
  if($('.upload-data ul.tabs li.current a').attr('href') == '#tab-5' || $('.upload-data ul.tabs li.current a').attr('href') == '#tab-6') {
    $('.upload footer').show();
  } else {
    $('.upload footer').hide();
  }
}
        return false;
});



$('#save').click(function(){
  console.log("Click me");

  try {
    var imgVal = $('#lrc_song_file_macro_1').val();

  } catch (error) {
    var imgVal = 'not empty'
  }
        if(imgVal=='')
        {
            alert("empty input file");


        }

        else{
          console.log("wtf");

          // alert("in else");

  $('.upload-data ul.tabs li.current').closest('li').next().addClass('r-tabs-state-active current');
  $('.upload-data ul.tabs li.current').closest('li').prev().removeClass('current');
  //trigger click event
  $('.upload-data ul.tabs li.current a').click();

  //footer
  if($('.upload-data ul.tabs li.current a').attr('href') == '#tab-5') {
    $('.upload footer').show();
  } else {
    $('.upload footer').hide();
  }
}
        return false;
});



$('.back-title .back').click(function(){
  $('.upload-data ul.tabs li.current').closest('li').prev().addClass('r-tabs-state-active current');
  $('.upload-data ul.tabs li.current').closest('li').next().removeClass('current');
  //trigger click event
    $('.upload-data ul.tabs li.current a').click();

     //footer
  if($('.upload-data ul.tabs li.current a').attr('href') == '#tab-5' || $('.upload-data ul.tabs li.current a').attr('href') == '#tab-6') {
    $('.upload footer').show();
  } else {
    $('.upload footer').hide();
  }

});


//step-6 data hide
$('#save').click(function(){
  $(document).ready(function(){
    document.getElementById("modal_stop").click();
});
$('.upload footer').hide();
});


//step-6 li:hover

$(".upload-data .content-box.editing ul.lyrics.preview li").click(
  function () {
    $(".upload-data .content-box.editing ul.lyrics.preview li").removeClass('active');
    $(this).addClass("active");
  }
);

//equal-height
$('.footer-data .volume ul li').equalHeights();


//login option button


loginToggle();
$('.form-details .login li').click(function() {
  if(!$(this).hasClass('active')) {
    $('.form-details .login').find('.active').removeClass('active');
    $(this).addClass('active');
    loginToggle();
  } else {
    loginToggle();
  }
});

//banner from height
var callback = function () {
     var h = $(window).height();
     var k = $('header').height();
     $('main .banner.form').height(h+k);


};

  $(document).ready(callback);
  $(window).resize(callback);

 //banner top margin
  $('.form-details').css('top',$('header').height());

//filter-data

var filteredData = function() {
  if($('.songs .small-banner .filter-data li.solo').hasClass('active')) {
      $('div.row-data').addClass('hide');
      $('.row-data.solo').removeClass('hide');
      $('div.row-data.solo:odd').css('margin-right', '0px');
    }
    else if($('.songs .small-banner .filter-data li.collabs').hasClass('active')) {
      $('div.row-data').addClass('hide');
      $('.row-data.collabs').removeClass('hide');
      $('div.row-data.collabs:odd').css('margin-right', '0px');
    }
    else if($('.songs .small-banner .filter-data li.devotional').hasClass('active')) {
      $('div.row-data').addClass('hide');
      $('.row-data.devotional').removeClass('hide');
      $('div.row-data.devotional:odd').css('margin-right', '0px');
    }
    else if($('.songs .small-banner .filter-data li.trending').hasClass('active')) {
      $('div.row-data').addClass('hide');
      $('.row-data.trending').removeClass('hide');
      $('div.row-data.trending:odd').css('margin-right', '0px');
    }
    else {
      $('div.row-data').removeClass('hide');
      $('div.row-data:odd').css('margin-right', '0px');
    }
};

if($('.songs .small-banner .filter-data li').hasClass('active')) {
  filteredData();
}

$('.songs .small-banner .filter-data li').on('click', function() {
    $('ul li.active').removeClass('active');
    $(this).addClass('active');
    filteredData();
});

$('.songs.songs-detail .video .row-data.details  .video-banner .play').click(function(){

$('.songs.songs-detail .video .row-data.details .video-banner .video-img video').css('display','block')
$( '.songs.songs-detail .video .row-data.details .video-banner .video-img img' ).css('display','none')
$('.songs.songs-detail .video .row-data.details  .video-banner .play img').css('display','none')

});

});



//equal-height
$.fn.equalHeights = function(){
  var max_height = 0;
  $(this).each(function(){
    max_height = Math.max($(this).height(), max_height);
  });
  $(this).each(function(){
    $(this).height(max_height);
  });
};


function myFunction() {
  var x = document.getElementById("id_password");
  if (x.type === "password") {
    x.type = "text";
    $('.form-details .input-icon a[title="Show Password"]').css('color','#08808a');
  } else {
    x.type = "password";
    $('.form-details .input-icon a[title="Show Password"]').css('color','#BABABA')
  }


}

function myFunctionPsw1() {
  var x = document.getElementById("id_password1");
  if (x.type === "password") {
    x.type = "text";
    $('.form-details .input-icon a[title="Show New Password1"]').css('color','#08808a');

  } else {
    x.type = "password";
      $('.form-details .input-icon a[title="Show New Password1"]').css('color','#BABABA')
  }
}

function myFunctionPsw2() {
  var x = document.getElementById("id_password2");
  if (x.type === "password") {
    x.type = "text";
    $('.form-details .input-icon a[title="Show New Password2"]').css('color','#08808a');

  } else {
    x.type = "password";
      $('.form-details .input-icon a[title="Show New Password2"]').css('color','#BABABA')
  }
}
