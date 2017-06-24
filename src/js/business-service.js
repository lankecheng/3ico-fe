(function () {
    var topSwiper = new Swiper('#js-fuwu-top-swiper', {
        loop: true,
        pagination: '#js-fuwu-top-swiper-pagination',
        autoplay: 5000,
        paginationClickable: true,
    });

    var fuwuSwipers = ['kd', 'df', 'sw', 'qt'].map(function (item) {
        return new Swiper('#js-fuwu-module-swiper-' + item, {
            loop: true,
            prevButton: '#js-fuwu-module-prev-' + item,
            nextButton: '#js-fuwu-module-next-' + item,
            slidesPerView: 4,
        });
    });

    $('.js-fwd-tab').on('click', function () {
        var $this = $(this);
        var val = $this.data('val');
        $this.siblings().removeClass('active');
        $this.addClass('active');
        $('.js-fwd-con').hide();
        $('#js-fwd-' + val).show();
    });
})()