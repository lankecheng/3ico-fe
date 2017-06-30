(function () {
    $('#js-qyrz-select').on('change', function () {
        var $this = $(this);
        $('.js-qyrz-con').hide();

        $('#js-qyrz-con-' + $this.val()).show();
    });
})()
