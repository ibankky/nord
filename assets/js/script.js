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
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
          }
        },
      ]
    
    });
  });
