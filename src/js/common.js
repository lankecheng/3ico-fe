(function () {
    $.ajax({
        type: 'get',
        url: 'http://119.23.160.90:8080/api/user/profile/info',
        headers: {
            Authorization: localStorage.getItem('token'),
        }
    }).then(function (res) {
        $('#js-login').html('<a href="/manage/index.html#/admin"><i class="ico-user"></i>个人中心</a>');
        $('#js-register').html('<span id="js-logout" class="register">退出</span>');
    });

    $(document).on('click', '#js-logout', function () {
        $.ajax({
            type: 'post',
            url: 'http://119.23.160.90:8080/api/auth/logout',
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        }).then(function (res) {
            localStorage.removeItem('token');
            location.reload();
        });
    });
})()
