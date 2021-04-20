$(function () {


  $('.catalog__select').styler();

  $(".star").rateYo({
    starWidth: "11px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    readOnly: true,
    spacing: "7px",
  });

  $(".star-card").rateYo({
    starWidth: "18px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    readOnly: true,
    spacing: "13px",
  });


  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').removeClass('catalog__btn--active');
    $(this).addClass('catalog__btn--active');
  });

  $('.catalog__list').on('click', function () {
    $('.card-products').addClass('card-products--list');
    $('.catalog__content').addClass('catalog__content--list');
  });

  $('.catalog__grid').on('click', function () {
    $('.card-products').removeClass('card-products--list');
    $('.catalog__content').removeClass('catalog__content--list');
  });


  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__num--from').text(data.from);
      $('.filter-price__num--to').text(data.to);
    },
    onChange: function (data) {

      $('.filter-price__num--from').text(data.from);
      $('.filter-price__num--to').text(data.to);
    },
  });

  $('.main-slider__slider').slick({
    arrows: false,
    dots: true
  });


  $('.partners__list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.icon, .menu__link').on('click', function () {
    $('.icon').toggleClass('icon--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);

});