//Hamburger menu toggler

$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});

//Scrolling sticky navbar

$(window).on("scroll", function(){
  if($(window).scrollTop()) {
    $("nav").addClass("grey");
  }
  else {
    $("nav").removeClass("grey");
  }
});

//Link closes Hamburger menu

$(document).ready(function(){
    $(".linkToggler").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});


// Smooth scroll

$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2200, function() {

          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

  // Fade in Animation

  window.sr = ScrollReveal();


  sr.reveal('#main', {duration: 4200});
  sr.reveal('#telefonija', {duration: 4200});
  sr.reveal('#proizvodi', {duration: 2700});
  sr.reveal('#Ovlastenja', {duration: 2700});
  sr.reveal('#Ekanaliza', {duration: 2700});
  sr.reveal('#edukacija', {duration: 2700});
  sr.reveal('#textInfo', {duration: 4200});
  sr.reveal('#kontaktpage', {duration: 2700});



// Turns jquery off on Mobile

if($(window).width() < 1024){
  sr.reveal('#Geodezija', {duration: 0});
  sr.reveal('#Prodaja', {duration: 0});
  sr.reveal('#Ovlastenja', {duration: 0});
  sr.reveal('#Ekanaliza', {duration: 0});
  sr.reveal('#edukacija', {duration: 0});
  sr.reveal('#medij', {duration: 0});
  sr.reveal('#kontaktpage', {duration: 0});
  sr.reveal('.lineReveal', {duration: 0});
}

// Loader close

$(document).ready(function() {
window.onload = function () {
$('#preloader').fadeOut(1000, function(){ $('#preloader').remove(); } );
}
});

// Navbar resize

// $(document).ready(function() {
//   $(window).on("scroll", function() {
//     if ($(window).scrollTop() >= 50) {
//       $(".navbar").addClass("compressed");
//     } else {
//       $(".navbar").removeClass("compressed");
//     }
//   });
// });

// AnimateCSS

$(document).ready(function() {
  $('.fade-in-up').waypoint(function() {
      $('.fade-in-up').addClass('animated fadeInUp');
  }, { offset: '50%' });
});
