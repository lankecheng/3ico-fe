(function () {
    var topSwiper = new Swiper('#js-home-top-swiper', {
        loop: true,
        pagination: '#js-home-top-swiper-pagination',
        autoplay: 5000,
        paginationClickable: true,
    });
    var infoSwiper = new Swiper('#js-home-info-swiper', {
        loop: true,
        prevButton: '#js-home-info-prev',
        nextButton: '#js-home-info-next',
    });
})()