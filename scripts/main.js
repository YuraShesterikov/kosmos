$(function () {
  $('.burger, .overley, .header__item').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overley').toggleClass('overley--show')
    $('.burger').toggleClass('burger--close')
  })
  $('.header__item').on('click', function (e) {
    e.preventDefault()
    $('.overley').removeClass('overley--show')
  })
  $(".header__nav").on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  $(".footer__title--company").on("click", function () {
    $('.footer__list--company').toggle()
    $(this).toggleClass('footer__title--active')
  });
  $(".footer__title--priv").on("click", function () {
    $('.footer__list--priv').toggle()
    $(this).toggleClass('footer__title--active')
  });


});