$(function() {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500
    });


    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });


    $(".rate-starone").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true
    });

    $(".icon-th-list").on('click', function() {
        $('.product__item-var').addClass('list');
        $(".icon-th-list").addClass('active');
        $(".icon-th-large").removeClass('active');
    });
    $(".icon-th-large").on('click', function() {
        $('.product__item-var').removeClass('list');
        $(".icon-th-list").removeClass('active');
        $(".icon-th-large").addClass('active');
    });


    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function() {
        $('.header__box').toggleClass('active');
    });

    var mixer = mixitup('.products__inner-box');
});