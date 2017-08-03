(function () {
    if (localStorage.getItem('token')) {
        $.ajax({
            type: 'post',
            url: 'http://119.23.160.90:8080/api/assist/verify',
            data: {
            },
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        }).then(function (res) {

        }).fail(function (res) {
            localStorage.removeItem('token');
            alert(res.responseJSON.error_msg);
        });
    }
    $.ajax({
        type: 'get',
        url: 'http://119.23.160.90:8080/api/user/profile/info',
        headers: {
            Authorization: localStorage.getItem('token'),
        }
    }).then(function (res) {
        $('#js-login').html('<a href="/manage/index.html#/admin"><i class="ico-user"></i>个人中心</a>');
        $('#js-register').html('<span id="js-logout" class="register">退出</span>');
        $('.js-user-yue').html('');
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

    // function getData() {
    //     $.ajax({
    //         method: 'post',
    //         url: 'https://www.chbtc.com/getTradeData?symbol=btc',
    //         dataType: 'jsonp',
    //     }).then(function (res) {
    //         var data = res.datas;
    //         $('#js-BTC').html(data[data.length - 1].CNY);
    //     }).fail(function (err) {
    //         console.log(err);
    //     });
    //     $.ajax({
    //         method: 'get',
    //         url: 'https://www.chbtc.com/getTradeData?symbol=eth',
    //         dataType: 'jsonp',
    //     }).then(function (res) {
    //         var data = res.datas;
    //         $('#js-ETH').html(data[data.length - 1].CNY);
    //     }).fail(function(err) {
    //         console.log(err);
    //     });
    //     setTimeout(function() {
    //         getData();
    //     }, 1000*10);
    // }

    // getData();
})()
