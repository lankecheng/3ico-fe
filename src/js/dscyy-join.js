(function () {
    $('#js-area').citys({
        required: true,
        nodata: 'disabled'
    });

    var $upload = $('#js-upload-file');
    $upload.find('.btn-text').click(function () {
        $upload.find('input[type=file]').click();
    });
})();