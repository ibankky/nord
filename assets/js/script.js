$(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        cssEase: 'linear',
        asNavFor: '.slider-for',
        focusOnSelect: true
      });
  });

  $(function(){
    $('.main-gallery').slick({
      centerMode: true,
      infinite: true,
      centerPadding: '150px',
      slidesToShow: 1,
      speed: 500,
      variableWidth: false,
      asNavFor: '.slider-caption',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            //centerPadding: '60px',
            slidesToShow: 1,
            centerPadding: '0',
          }
        },
      ]
    
    });
  });
  $(function(){
    $('.slider-caption').slick({
      slidesToShow: 1,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      draggable:false
    })
  })
  

  $(function(){
    AOS.init({
      easing: 'ease-in-out-sine',
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true,
    });
  });
  $(function(){
    window.onscroll = function () {
      myFunction()
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky-nav")
      } else {
          navbar.classList.remove("sticky-nav");
      }
  }
  });
  
