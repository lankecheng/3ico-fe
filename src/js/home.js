(function () {
    var banner = new Swiper('#js-home-banner', {
        loop: true,
        pagination: '#js-home-banner-pagination',
        autoplay: 6000,
        paginationClickable: true,
    });
    var notice = new Swiper('#js-home-notice', {
        loop: true,
        prevButton: '#js-home-notice-prev',
        nextButton: '#js-home-notice-next',
        autoplay: 4000,
    });
    $(document).on('click', '.js-ico-tab', function (e) {
        var tab = $(this).data('val');
        $('.js-ico-tab').find('a').removeClass('active');
        $(this).find('a').addClass('active');
        $('.js-ico-bd').hide();
        $('#js-' + tab).show();
    });
})()
