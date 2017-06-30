(function () {
    $('#js-qyrz-select').on('change', function () {
        var $this = $(this);
        var val = $this.val();
        $('.js-qyrz-con').hide();

        $('#js-qyrz-con-' + val).show();

        if (val === 'fws') {
            $('#js-qyrz-fws-second').show();
        } else {
            $('#js-qyrz-fws-second').hide();
        }
    });

    $(document).on('click', '.js-multiple-file', function (e) {
        $(this).siblings('input[type=file]').click();
    });

    $('.js-multiple-file-remove').on('click', function (e) {
        var $this = $(this);
        $this.parent().remove();
        e.stopPropagation();
    });
})()
