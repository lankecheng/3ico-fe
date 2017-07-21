(function () {
    $.ajax({
        type: 'get',
        url: 'http://172.16.200.15:8080/api/user/profile/info',
        headers: {
            Authorization: localStorage.getItem('token'),
        }
    }).then(function (res) {
        $('#js-login').html('<span><i class="ico-user"></i>已登录</span>');
        $('#js-register').html('<span id="js-logout" class="register">退出</span>');
    });

    $(document).on('click', '#js-logout', function () {
        $.ajax({
            type: 'post',
            url: 'http://172.16.200.15:8080/api/auth/logout',
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        }).then(function (res) {
            localStorage.removeItem('token');
            location.reload();
        });
    });
})()
