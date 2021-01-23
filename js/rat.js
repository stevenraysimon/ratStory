$(document).ready(function(){
setTimeout(function(){ $('#loading').fadeOut('slow'); }, 3000);
function myOnLoadedData() { console.log('Loaded data'); }

var isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // is mobile..
    isMobile = true;
    console.log("Mobile");
} else{
  isMobile = false;
  console.log("Not Mobile");
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

function setUpDesktopAudio(){

      $(window).scroll(function(){
          /**************** Specials *****************/

          if ($(window).scrollTop() > title_sound_start && $(window).scrollTop() < title_sound_end) {
              //title_sound.currentTime = 0;
              title_sound.play();
              hasEnded(title_sound);
          }  else{
              title_sound.pause();
          }
          /*****************/

          if ($(window).scrollTop() > one_sound_start && $(window).scrollTop() < one_sound_end) {
              //one_sound.currentTime = 0;
              one_sound.play();
          }  else{
              one_sound.pause();
          }
          /*****************/
          if ($(window).scrollTop() > two_sound_start && $(window).scrollTop() < two_sound_end) {
              //one_sound.currentTime = 0;
              two_sound.play();
          }  else{
              two_sound.pause();
          }
          /***************/
          if ($(window).scrollTop() > three_sound_start && $(window).scrollTop() < three_sound_end) {
              //one_sound.currentTime = 0;
              three_sound.play();
          }  else{
              three_sound.pause();
          }
          /*****************/
          if ($(window).scrollTop() > four_sound_start && $(window).scrollTop() < four_sound_end) {
              //one_sound.currentTime = 0;
              four_sound.play();
              swapImage2();
          }  else{
              four_sound.pause();
          }
          /******************/
          if ($(window).scrollTop() > five_sound_start && $(window).scrollTop() < five_sound_end) {
              //one_sound.currentTime = 0;
              five_sound.play();
          }  else{
              five_sound.pause();
          }
          /******************/
          if ($(window).scrollTop() > six_sound_start && $(window).scrollTop() < six_sound_end) {
              //one_sound.currentTime = 0;
              six_sound.play();
          }  else{
              six_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > seven_sound_start && $(window).scrollTop() < seven_sound_end) {
              //one_sound.currentTime = 0;
              seven_sound.play();
          }  else{
              seven_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > eight_sound_start && $(window).scrollTop() < eight_sound_end) {
              //one_sound.currentTime = 0;
              eight_sound.play();
              swapImage3();
          }  else{
              eight_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > nine_sound_start && $(window).scrollTop() < nine_sound_end) {
              //one_sound.currentTime = 0;
              nine_sound.play();
          }  else{
              nine_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > ten_sound_start && $(window).scrollTop() < ten_sound_end) {
              //one_sound.currentTime = 0;
              ten_sound.play();
          }  else{
              ten_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > eleven_sound_start && $(window).scrollTop() < eleven_sound_end) {
              //one_sound.currentTime = 0;
              eleven_sound.play();
          }  else{
              eleven_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > twelve_sound_start && $(window).scrollTop() < twelve_sound_end) {
              //one_sound.currentTime = 0;
              twelve_sound.play();
          }  else{
              twelve_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > thirteen_sound_start && $(window).scrollTop() < thirteen_sound_end) {
              //one_sound.currentTime = 0;
              thirteen_sound.play();
          }  else{
              thirteen_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > fourteen_sound_start && $(window).scrollTop() < fourteen_sound_end) {
              //one_sound.currentTime = 0;
              fourteen_sound.play();
          }  else{
              fourteen_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > fifteen_sound_start && $(window).scrollTop() < fifteen_sound_end) {
              //one_sound.currentTime = 0;
              fifteen_sound.play();
          }  else{
              fifteen_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > sixteen_sound_start && $(window).scrollTop() < sixteen_sound_end) {
              //one_sound.currentTime = 0;
              sixteen_sound.play();
          }  else{
              sixteen_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > seventeen_sound_start && $(window).scrollTop() < seventeen_sound_end) {
              //one_sound.currentTime = 0;
              seventeen_sound.play();
          }  else{
              seventeen_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > eighteen_sound_start && $(window).scrollTop() < eighteen_sound_end) {
              //one_sound.currentTime = 0;
              eighteen_sound.play();
          }  else{
              eighteen_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > nineteen_sound_start && $(window).scrollTop() < nineteen_sound_end) {
              //one_sound.currentTime = 0;
              nineteen_sound.play();
              swapImage4();
          }  else{
              nineteen_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > twenty_sound_start && $(window).scrollTop() < twenty_sound_end) {
              //one_sound.currentTime = 0;
              twenty_sound.play();
          }  else{
              twenty_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > twentyone_sound_start && $(window).scrollTop() < twentyone_sound_end) {
              //one_sound.currentTime = 0;
              twentyone_sound.play();
          }  else{
              twentyone_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > twentytwo_sound_start && $(window).scrollTop() < twentytwo_sound_end) {
              //one_sound.currentTime = 0;
              twentytwo_sound.play();
          }  else{
              twentytwo_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > twentythree_sound_start && $(window).scrollTop() < twentythree_sound_end) {
              //one_sound.currentTime = 0;
              twentythree_sound.play();
          }  else{
              twentythree_sound.pause();
          }
          /********************/
          if ($(window).scrollTop() > twentyfour_sound_start && $(window).scrollTop() < twentyfour_sound_end) {
              //one_sound.currentTime = 0;
              twentyfour_sound.play();
          }  else{
              twentyfour_sound.pause();
          }
          /********************/

  });//Window scroll
}//Set up desktop audio

function setupMobileAudio() {
    document.addEventListener('touchstart', function () {
        // to force Mobile Safari to load the audio.
        //document.removeEventListener('click', arguments.callee, false);

                /**************** Specials *****************/

                if ($(window).scrollTop() > title_sound_start && $(window).scrollTop() < title_sound_end) {
                    //title_sound.currentTime = 0;
                    title_sound.play();
                    hasEnded(title_sound);
                }  else{
                    title_sound.pause();
                }
                /*****************/

                if ($(window).scrollTop() > one_sound_start && $(window).scrollTop() < one_sound_end) {
                    //one_sound.currentTime = 0;
                    one_sound.play();
                }  else{
                    one_sound.pause();
                }
                /*****************/
                if ($(window).scrollTop() > two_sound_start && $(window).scrollTop() < two_sound_end) {
                    //one_sound.currentTime = 0;
                    two_sound.play();
                }  else{
                    two_sound.pause();
                }
                /***************/
                if ($(window).scrollTop() > three_sound_start && $(window).scrollTop() < three_sound_end) {
                    //one_sound.currentTime = 0;
                    three_sound.play();
                }  else{
                    three_sound.pause();
                }
                /*****************/
                if ($(window).scrollTop() > four_sound_start && $(window).scrollTop() < four_sound_end) {
                    //one_sound.currentTime = 0;
                    four_sound.play();
                    swapImage2();
                }  else{
                    four_sound.pause();
                }
                /******************/
                if ($(window).scrollTop() > five_sound_start && $(window).scrollTop() < five_sound_end) {
                    //one_sound.currentTime = 0;
                    five_sound.play();
                }  else{
                    five_sound.pause();
                }
                /******************/
                if ($(window).scrollTop() > six_sound_start && $(window).scrollTop() < six_sound_end) {
                    //one_sound.currentTime = 0;
                    six_sound.play();
                }  else{
                    six_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > seven_sound_start && $(window).scrollTop() < seven_sound_end) {
                    //one_sound.currentTime = 0;
                    seven_sound.play();
                }  else{
                    seven_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > eight_sound_start && $(window).scrollTop() < eight_sound_end) {
                    //one_sound.currentTime = 0;
                    eight_sound.play();
                    swapImage3();
                }  else{
                    eight_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > nine_sound_start && $(window).scrollTop() < nine_sound_end) {
                    //one_sound.currentTime = 0;
                    nine_sound.play();
                }  else{
                    nine_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > ten_sound_start && $(window).scrollTop() < ten_sound_end) {
                    //one_sound.currentTime = 0;
                    ten_sound.play();
                }  else{
                    ten_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > eleven_sound_start && $(window).scrollTop() < eleven_sound_end) {
                    //one_sound.currentTime = 0;
                    eleven_sound.play();
                }  else{
                    eleven_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > twelve_sound_start && $(window).scrollTop() < twelve_sound_end) {
                    //one_sound.currentTime = 0;
                    twelve_sound.play();
                }  else{
                    twelve_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > thirteen_sound_start && $(window).scrollTop() < thirteen_sound_end) {
                    //one_sound.currentTime = 0;
                    thirteen_sound.play();
                }  else{
                    thirteen_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > fourteen_sound_start && $(window).scrollTop() < fourteen_sound_end) {
                    //one_sound.currentTime = 0;
                    fourteen_sound.play();
                }  else{
                    fourteen_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > fifteen_sound_start && $(window).scrollTop() < fifteen_sound_end) {
                    //one_sound.currentTime = 0;
                    fifteen_sound.play();
                }  else{
                    fifteen_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > sixteen_sound_start && $(window).scrollTop() < sixteen_sound_end) {
                    //one_sound.currentTime = 0;
                    sixteen_sound.play();
                }  else{
                    sixteen_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > seventeen_sound_start && $(window).scrollTop() < seventeen_sound_end) {
                    //one_sound.currentTime = 0;
                    seventeen_sound.play();
                }  else{
                    seventeen_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > eighteen_sound_start && $(window).scrollTop() < eighteen_sound_end) {
                    //one_sound.currentTime = 0;
                    eighteen_sound.play();
                }  else{
                    eighteen_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > nineteen_sound_start && $(window).scrollTop() < nineteen_sound_end) {
                    //one_sound.currentTime = 0;
                    nineteen_sound.play();
                    swapImage4();
                }  else{
                    nineteen_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > twenty_sound_start && $(window).scrollTop() < twenty_sound_end) {
                    //one_sound.currentTime = 0;
                    twenty_sound.play();
                }  else{
                    twenty_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > twentyone_sound_start && $(window).scrollTop() < twentyone_sound_end) {
                    //one_sound.currentTime = 0;
                    twentyone_sound.play();
                }  else{
                    twentyone_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > twentytwo_sound_start && $(window).scrollTop() < twentytwo_sound_end) {
                    //one_sound.currentTime = 0;
                    twentytwo_sound.play();
                }  else{
                    twentytwo_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > twentythree_sound_start && $(window).scrollTop() < twentythree_sound_end) {
                    //one_sound.currentTime = 0;
                    twentythree_sound.play();
                }  else{
                    twentythree_sound.pause();
                }
                /********************/
                if ($(window).scrollTop() > twentyfour_sound_start && $(window).scrollTop() < twentyfour_sound_end) {
                    //one_sound.currentTime = 0;
                    twentyfour_sound.play();
                }  else{
                    twentyfour_sound.pause();
                }
                /********************/


    }, false);
}//Set up mobile audio

// Usage:
preload(['scurry/scurry1.jpg','scurry/scurry2.jpg','scurry/scurry3.jpg','scurry/scurry4.jpg','scurry/scurry5.jpg','scurry/scurry6.jpg', 'tomato2.jpg', '3.jpg', 'feet2.jpg', 'feet3.jpg', 'dills.jpg']);

var extra = -190;

var title_sound = document.getElementById('title_sound');
var title_sound_start = $('a[href="#title_start"]').offset().top +extra;
var title_sound_end = $('a[href="#title_end"]').offset().top +extra;

var one_sound = document.getElementById('one_sound');
var one_sound_start = $('a[href="#one_start"]').offset().top +extra;
var one_sound_end = $('a[href="#one_end"]').offset().top +extra;

var two_sound = document.getElementById('two_sound');
var two_sound_start = $('a[href="#two_start"]').offset().top +extra;
var two_sound_end = $('a[href="#two_end"]').offset().top +extra;

var three_sound = document.getElementById('three_sound');
var three_sound_start = $('a[href="#three_start"]').offset().top +extra;
var three_sound_end = $('a[href="#three_end"]').offset().top +extra;

var four_sound = document.getElementById('four_sound');
var four_sound_start = $('a[href="#four_start"]').offset().top +extra;
var four_sound_end = $('a[href="#four_end"]').offset().top +extra;

var five_sound = document.getElementById('five_sound');
var five_sound_start = $('a[href="#five_start"]').offset().top +extra;
var five_sound_end = $('a[href="#five_end"]').offset().top +extra;

var six_sound = document.getElementById('six_sound');
var six_sound_start = $('a[href="#six_start"]').offset().top +extra;
var six_sound_end = $('a[href="#six_end"]').offset().top +extra;

var seven_sound = document.getElementById('seven_sound');
var seven_sound_start = $('a[href="#seven_start"]').offset().top +extra;
var seven_sound_end = $('a[href="#seven_end"]').offset().top +extra;

var eight_sound = document.getElementById('eight_sound');
var eight_sound_start = $('a[href="#eight_start"]').offset().top +extra;
var eight_sound_end = $('a[href="#eight_end"]').offset().top +extra;

var nine_sound = document.getElementById('nine_sound');
var nine_sound_start = $('a[href="#nine_start"]').offset().top +extra;
var nine_sound_end = $('a[href="#nine_end"]').offset().top +extra;

var ten_sound = document.getElementById('ten_sound');
var ten_sound_start = $('a[href="#ten_start"]').offset().top +extra;
var ten_sound_end = $('a[href="#ten_end"]').offset().top +extra;

var eleven_sound = document.getElementById('eleven_sound');
var eleven_sound_start = $('a[href="#eleven_start"]').offset().top +extra;
var eleven_sound_end = $('a[href="#eleven_end"]').offset().top +extra;

var twelve_sound = document.getElementById('twelve_sound');
var twelve_sound_start = $('a[href="#twelve_start"]').offset().top +extra;
var twelve_sound_end = $('a[href="#twelve_end"]').offset().top +extra;

var thirteen_sound = document.getElementById('thirteen_sound');
var thirteen_sound_start = $('a[href="#thirteen_start"]').offset().top +extra;
var thirteen_sound_end = $('a[href="#thirteen_end"]').offset().top +extra;

var fourteen_sound = document.getElementById('fourteen_sound');
var fourteen_sound_start = $('a[href="#fourteen_start"]').offset().top +extra;
var fourteen_sound_end = $('a[href="#fourteen_end"]').offset().top +extra;

var fifteen_sound = document.getElementById('fifteen_sound');
var fifteen_sound_start = $('a[href="#fifteen_start"]').offset().top +extra;
var fifteen_sound_end = $('a[href="#fifteen_end"]').offset().top +extra;

var sixteen_sound = document.getElementById('sixteen_sound');
var sixteen_sound_start = $('a[href="#sixteen_start"]').offset().top +extra;
var sixteen_sound_end = $('a[href="#sixteen_end"]').offset().top +extra;

var seventeen_sound = document.getElementById('seventeen_sound');
var seventeen_sound_start = $('a[href="#seventeen_start"]').offset().top +extra;
var seventeen_sound_end = $('a[href="#seventeen_end"]').offset().top +extra;

var eighteen_sound = document.getElementById('eighteen_sound');
var eighteen_sound_start = $('a[href="#eighteen_start"]').offset().top +extra;
var eighteen_sound_end = $('a[href="#eighteen_end"]').offset().top +extra;

var nineteen_sound = document.getElementById('nineteen_sound');
var nineteen_sound_start = $('a[href="#nineteen_start"]').offset().top +extra;
var nineteen_sound_end = $('a[href="#nineteen_end"]').offset().top +extra;

var twenty_sound = document.getElementById('twenty_sound');
var twenty_sound_start = $('a[href="#twenty_start"]').offset().top +extra;
var twenty_sound_end = $('a[href="#twenty_end"]').offset().top +extra;

var twentyone_sound = document.getElementById('twentyone_sound');
var twentyone_sound_start = $('a[href="#twentyone_start"]').offset().top +extra;
var twentyone_sound_end = $('a[href="#twentyone_end"]').offset().top +extra;

var twentytwo_sound = document.getElementById('twentytwo_sound');
var twentytwo_sound_start = $('a[href="#twentytwo_start"]').offset().top +extra;
var twentytwo_sound_end = $('a[href="#twentytwo_end"]').offset().top +extra;

var twentythree_sound = document.getElementById('twentythree_sound');
var twentythree_sound_start = $('a[href="#twentythree_start"]').offset().top +extra;
var twentythree_sound_end = $('a[href="#twentythree_end"]').offset().top +extra;

var twentyfour_sound = document.getElementById('twentyfour_sound');
var twentyfour_sound_start = $('a[href="#twentyfour_start"]').offset().top +extra;
var twentyfour_sound_end = $('a[href="#twentyfour_end"]').offset().top +extra;

function hasEnded(sound){
  sound.onended = function(){
      sound.load();
      sound.currentTime = 0;
      sound.pause();
  }
}

if (isMobile == true){
  setupMobileAudio();
} else{
  setUpDesktopAudio();
}//Mobile check

var swapT = 1;

setInterval(function() {
if (swapT == 1){
    $('#swapText').css('color', 'white');
    $('#swapImage1').attr('src', 'tomato1.jpg');
    swapT = 0;
} else{
    $('#swapText').css('color', 'black');
    $('#swapImage1').attr('src', 'tomato2.jpg');
    swapT = 1;
}

}, 2000);

function swapImage2(){
    var swap = 1;
    setInterval(function() {
        if (swap == 1){
            $('#swapImage2').attr('src', '3.jpg');
            swap = 0;
        } else{
            $('#swapImage2').attr('src', '4.jpg');
            swap = 1;
        }

        }, 3000);
}

function swapImage3(){
    var swap = 1;
    setInterval(function() {
        if (swap == 1){
            $('#swapImage3').attr('src', 'think1.jpg');
            swap = 0;
        } else{
            $('#swapImage3').attr('src', 'think2.jpg');
            swap = 1;
        }

        }, 3000);
}

function swapImage4(){
    var swap = 1;
    setInterval(function() {
        if (swap == 1){
            $('#swapImage4').attr('src', 'cafeteria.jpg');
            swap = 0;
        } else{
            $('#swapImage4').attr('src', 'dills.jpg');
            swap = 1;
        }

        }, 3000);
}
/*********************  Scurry ************************/

var i = 1;
var h = 1;

setInterval(function() {
		if (i == 1){
			$('.scurry').attr('src', 'scurry/scurry'+i+'.jpg');
			i++;
		}
		else if (i == 2){
			$('.scurry').attr('src', 'scurry/scurry'+i+'.jpg');
			i++;
		}
		else if (i == 3){
			$('.scurry').attr('src', 'scurry/scurry'+i+'.jpg');
			i++;
		}
		else if (i == 4){
			$('.scurry').attr('src', 'scurry/scurry'+i+'.jpg');
			i++;
		}
        else if (i == 5){
			$('.scurry').attr('src', 'scurry/scurry'+i+'.jpg');
			i++;
		}
        else if (i == 6){
			$('.scurry').attr('src', 'scurry/scurry'+i+'.jpg');
			i=1;
		}

}, 300);

setInterval(function() {
		if (h == 1){
			$('#feetImages').attr('src', 'feet'+h+'.jpg');
			h++;
		}
		else if (h == 2){
			$('#feetImages').attr('src', 'feet'+h+'.jpg');
			h++;
		}
		else if (h == 3){
			$('#feetImages').attr('src', 'feet'+h+'.jpg');
			h=1;
		}

}, 600);


/***************** Scroll Automatically if the "S" key is pressed *****************/

//var seconds = 500;

var howFarFromTop = document.body.scrollTop;
var currentPos = document.body.scrollHeight - howFarFromTop;
var stopScroll = howFarFromTop / currentPos;

var pixels_per_second = 30;
var distance;
var scroll_duration;

distance = Math.abs($(document.body).scrollTop() - document.body.scrollHeight);
scroll_duration = (distance / pixels_per_second) * 1000;

$(document).bind('keydown',function(e){
       if(e.keyCode == 83) {
           pixels_per_second = 30;
          $('body,html').animate({scrollTop: document.body.scrollHeight}, scroll_duration);
       }
        if (e.keyCode == 88){
            $('html, body').stop();
       }
}); //Close Keypress


}); //Close Doc Ready
