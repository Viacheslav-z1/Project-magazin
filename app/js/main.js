$(function () {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true
  });

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

  $('.filter-recent__stars').rateYo({
    starWidth: "11px",
    readOnly: true,
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    
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