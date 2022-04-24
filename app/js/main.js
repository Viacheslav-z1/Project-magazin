$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  

  $('.product-tabs__link').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });


  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true
  });
  $('.product-cart__slides-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-cart__slides-small',
  });
  $('.product-cart__slides-small').slick({
    vertical: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product-cart__slides-big',
  });
  $('.product-slider__wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/product-cart/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/product-cart/icon/arrow-right.svg" alt=""></button>',
  });

  $('.product-cart__input').styler();
 

  $('.filter-price__input').ionRangeSlider({
    type: "double",

    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  // $('.product-2__add-to-cart').on('click',function () {
  //   $('.product-2__added-to_cart').toggleClass('active');
  //   $('.product-2__add-to-cart').toggleClass('active');
  // });

  // $('.product-2__cart-btn', this).on('click', function () {
  //   $('.product-2__added-to_cart').removeClass('active');
  //   $('.product-2__add-to-cart').removeClass('active');
  // });

  $(this).find('.product-2__add-to-cart').on('click', function () {
    $('.product-2__added-to_cart').toggleClass('active');
    $('.product-2__add-to-cart').toggleClass('active');
  });

  $(this).find('.product-2__cart-btn').on('click', function () {
    $('.product-2__added-to_cart').removeClass('active');
    $('.product-2__add-to-cart').removeClass('active');
  });

  $('.filter-recent__stars').rateYo({
    starWidth: "11px",
    readOnly: true,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    
  });

  $('.product-2__star').rateYo({
    starWidth: "20px",
    readOnly: true,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
  var config = {
    controls: {
      scope: 'local'
    }
  };
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

 


})