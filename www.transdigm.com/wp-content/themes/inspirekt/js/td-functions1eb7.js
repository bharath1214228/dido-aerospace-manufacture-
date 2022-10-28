jQuery(function($){

  $(document).ready(function(){
    $('.history-slider').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 7,
      dots: true,
      responsive: [
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
      }
      ]
    });
  });

  $(document).ready(function(){
    $('.products-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      responsive: [
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      }
      ]
    });
  });

});
