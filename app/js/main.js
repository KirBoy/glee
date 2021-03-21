$(function(){
  $('.wrapper__slider').slick({
    arrows: false,
    dots: true
  });

  $('.partners__list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5
  });

  var mixer = mixitup('.products__inner');
  var mixer = mixitup('.new__inner');
  
});