(function () {
    $(document).on('click', '#js-show-download', function () {
        $(this).hide();
        $('#js-download, #js-cancel-download').css('display', 'inline-block');
        $('.js-download-checkbox,.js-download-checkbox-all').css('visibility', 'visible');
    });
    $(document).on('click', '#js-cancel-download', function () {
        $('#js-show-download').css('display', 'inline-block');
        $('#js-download, #js-cancel-download').css('display', 'none');
        $('.js-download-checkbox,.js-download-checkbox-all').css('visibility', 'hidden');
    });

    $(document).on('change', '#js-download-checkbox-all', function () {
        var checked = this.checked;
        var checkboxs = $('.js-download-checkbox');
        for (var i = 0; i < checkboxs.length; i++) {
            var checkbox = checkboxs[i];
            checkbox.checked = checked;
        }
    });
})();
