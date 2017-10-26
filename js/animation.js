// LANDING SECTION TEXT ANIMATION

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
  document.body.appendChild(css);

  // functions calls
  animateTheClkBtn(); // Bouncing click
  // signUpButton();
};

// scrolling navbar animation
var a = $("#trans").offset().top;
$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('#trans').css({"background":"rgba(70, 70, 70, 0.5)"});

    } else {
       $('#trans').css({"background":"transparent"});
    }
});
$(document).ready(function(){
});


// FUNTION FOR BOUNCING CLICK ANIMATION
function animateTheClkBtn() {
    // $(".boxtext").animate({bottom:"600px"}, 50000, animateTheBox);
    /*! Fades in page on load */
	// $('#clk-btn').css('display', 'none');
	// $('#clk-btn').fadeIn(3000);

	// moves downwards and then upwards
	$("#clk-btn").animate({ 
        top: "+=20px"}, 1000 );
	$("#clk-btn").animate({ 
        top: "-=20px"}, 1000 ,animateTheClkBtn);

	// $('#clk-btn').fadeOut(3000);
}