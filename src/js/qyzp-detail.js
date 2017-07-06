(function () {
    $('.js-qyzp-detail-tab').on('click', function () {
        var $this = $(this);
        var val = $this.data('val');
        $this.siblings().removeClass('active');
        $this.addClass('active');
        $('.js-qyzp-detail-con').hide();
        $('#js-qyzp-detail-' + val).show();
    });
})()
