// navbar on scroll
window.onscroll = function() {scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navb").style.backgroundColor = 'black';
    document.getElementById("navb").style.boxShadow = '0 0 5px #29bec7';
  } else {
    document.getElementById("navb").style.backgroundColor = "transparent";
    document.getElementById("navb").style.boxShadow = 'none';
  }
}
// ripples function
$(".head").ripples({
    resolution: 400,
    perturbance: 0.05,

  });

// typed js

      var typed = new Typed('.type', {
  strings: ['I’m FRONT-END DEVELOPER .','I’m REACT DEVELOPER.', 'I’m FREELANCER .'],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,

});
    
// aos 
AOS.init();

//loading
$(document).ready(()=>{
  $(".main").delay(2000).fadeOut(1000)
})
// proggress animation
var offsetTop = $('.skill').offset().top;
	$(window).scroll(function() {
  var height = $(window).height();
  if($(window).scrollTop()+height > offsetTop) {
    $('.par-full').each(function(){
      $(this).find('.par').delay(500).animate({
        width:$(this).attr('data-percent')
      },3000);
    });
  }
  });
//cointer function
$(window).scroll(startCounter);

function startCounter() {
  let scrollY = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight;
  let divPos = document.querySelector('.state').offsetTop;

  if (scrollY > divPos) {
    $(window).off("scroll", startCounter);

    $('.number').each(function() {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text().replace(/,/g, '')
      }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(commaSeparateNumber(Math.floor(this.Counter)));
        },
        complete: function() {
          $this.text(commaSeparateNumber(this.Counter));
          //alert('finished');
        }
      });
    });

    function commaSeparateNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
