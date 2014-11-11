(function () {

	var $imgs = $('.films img');
	var $heading = $('.heading');
	var $nextImg = $('.next img');
	var $films = $('.films');
	var $slide = $('.slide');
	var $slider1 = $('#slider1');
	var $slider2 = $('#slider2');
	var $slider3 = $('#slider3');
	var $pct = $('#points');

	$heading.on('click', function () {
		var $this = $(this);
		$this.css({transform: 'translate(0, -200%)'});
		$this.closest('.intro').css({zIndex: 50});
		setTimeout(function () {
		  $('.films img').addClass('loaded');
	  }, 0);
	});
	$('[src$="tiff.png"]').on('click', function () {
		updateImgs.call(this);
		$(this).css({transform: 'translate(45%, 50%) scale(1.5)'});
	});
	$('[src$="sundance.png"').on('click', function () {
		updateImgs.call(this);
		$(this).css({transform: 'translate(-45%, 50%) scale(1.5)'});
	});
	$('[src$="cannes.png"]').on('click', function () {
		updateImgs.call(this);
		$(this).css({transform: 'translate(40%,-40%) scale(1.5)'});
	});
	$('[src$="sfiff.png"').on('click', function () {
		updateImgs.call(this);
		$(this).css({transform: 'translate(-40%,-40%) scale(1.5)'});
	});
	var updateImgs = function () {
		var $this = $(this);
		$imgs.css({visibility: 'hidden', transition: 'all 0s ease-in'});
		$this.css({visibility: 'visible', transition: 'all 0.5s ease-in'});
		$heading.hide();
		$nextImg.show().css({visibility:'visible', transition: 'all 2s ease-in', transform: 'translate(0, -200%)'});
	};

	$nextImg.on('click', function() {
		$films.hide();
		$slide.show().css({visibility: 'visible', transition: 'all 2s ease-in'});
	});
	$slide.on('release', function(){
		$slide.hide();
	});
/*
	// slider setup
	$('.slider').each(function () {
		var $this = $(this);
		var $totalBar = $('<div>').addClass('total-bar');
		var $percentBar = $('<div>').addClass('percent-bar');
		var $handle = $('<div>').addClass('handle');
		$this.append($totalBar);
		$this.append($percentBar);
		$this.append($handle);
		$this.data('pos', 50);
	});
	$('.slider .handle').on('hover', affordSlider);
	$('.slider .handle').on('mousedown', activateSlider);
	$('body').on('mousemove', updateSlider);
	$('body').on('mouseup', releaseSlider);

	var affordSlider = function () {
		var $this = $(this);
	};

	var activateSlider = function (e) {
		var $this = $(this);
		var $slider = $this.closest('.slider');
		$slider.data('x', e.pageX);
	};

	var updateSlider = function () {
		var $this = $(this);
		var $slider = $this.closest('.slider');
		var $lowEnd = $($slider.find('.low-end'));
		var $highEnd = $($slider.find('.high-end'));
		var pos = parseInt($slider.data('pos'), 10);
		$slider.data('x');
		$lowEnd.toggle(pos > 50);
		$highEnd.toggle(pos =< 50);
	};

	var releaseSlider = function () {
		var $this = $(this);
	};
*/

}());

$(document).ready(function()
{
  $('#slider1').sGlide({
  	  'unit': "px",
      'width': 300,
      'height': 10,
      'image': 'images/knob.png',
      'startAt': 50,
      'colorShift': '#f7931e',
      'buttons': false,
      drag: function(o){
        // console.log(o.guid+': '+o.sliderValue+'%');
        //$('.pct').html(Math.round(o.value)+'<sup>%<sup>');
      }   
  });
  $('#slider2').sGlide({
  	  'unit': "px",
      'width': 300,
      'height': 10,
      'image': 'images/knob.png',
      'startAt': 50,
      'colorShift': '#f7931e',
      'buttons': false,
      drag: function(o){
        // console.log(o.guid+': '+o.sliderValue+'%');
        //$('.pct').html(Math.round(o.value)+'<sup>%<sup>');
      }   
  });
  $('#slider3').sGlide({
  	  'unit': "px",
      'width': 300,
      'height': 10,
      'image': 'images/knob.png',
      'startAt': 50,
      'colorShift': '#f7931e',
      'buttons': false,
      drag: function(o){
        // console.log(o.guid+': '+o.sliderValue+'%');
        //$('.pct').html(Math.round(o.value)+'<sup>%<sup>');
      }   
  });
});