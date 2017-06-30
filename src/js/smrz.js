(function () {

    $('#js-smrz-identify-long').on('change', function () {
        if (this.checked) {
            $('#js-smrz-identify-end-time').hide();
        } else {
            $('#js-smrz-identify-end-time').show();
        }
    });
})()
