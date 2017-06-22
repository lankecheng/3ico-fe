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
        autoplay: 5000,
    });
    var dscyySwiper = new Swiper('#js-home-dscyy-swiper', {
        loop: true,
        prevButton: '#js-home-dscyy-prev',
        nextButton: '#js-home-dscyy-next',
        slidesPerView: 4,
    });

    var fuwuSwipers = ['kd', 'df', 'sw', 'qt'].map(function (item) {
        return new Swiper('#js-home-fuwu-swiper-' + item, {
            loop: true,
            prevButton: '#js-home-fuwu-prev-' + item,
            nextButton: '#js-home-fuwu-next-' + item,
            slidesPerView: 4,
        });
    });

    $('.js-hitr-title').on('click', function () {
        var $this = $(this);
        var val = $this.data('val');
        $this.siblings().removeClass('active');
        $this.addClass('active');
        $('.js-hitr-con').hide();
        $('#js-hitr-' + val).show();
    });
    $('.js-hfw-tab').on('click', function () {
        var $this = $(this);
        var val = $this.data('val');
        $this.siblings().removeClass('active');
        $this.addClass('active');
        $('.js-hfw-con').hide();
        $('#js-hfw-' + val).show();
    });

    $('#js-hp-show-all').on('click', function () {
        var $this = $(this);
        var hasClose = $this.hasClass('close');
        var $con = $('#js-hp-con');

        if (hasClose) {
            $con.removeClass('all');
            $this.text('查看更多');
            $this.removeClass('close');
        } else {
            $con.addClass('all');
            $this.text('收起');
            $this.addClass('close');
        }
    });
})()