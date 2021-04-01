$(function () {
  $('.wrapper__slider').slick({
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