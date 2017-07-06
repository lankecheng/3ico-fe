//公用
(function() {
    var loginDialog = new Dialog();
    var registerDialog = new Dialog();

    //关闭登录弹窗
    $(document).on('click', '#js-dialog-login-close', function () {
        loginDialog.close();
    });
    //关闭注册弹窗
    $(document).on('click', '#js-dialog-register-close', function () {
        registerDialog.close();
    });

    //注册tab切换
    $(document).on('click', '.js-dialog-register-tab', function () {
        var $this = $(this);
        var val = $this.data('val');
        $('.js-dialog-register-tab').removeClass('active');
        $this.addClass('active');
        $('.js-register-con').hide();
        $('#js-register-'+val).show();
    });

    //发送验证码
    $(document).on('click', '.js-dialog-register-code', function () {
        var $this = $(this);
        var val = $this.data('val');
        var phone = $('#js-dialog-register-'+val+'-phone').val();
        console.log(phone);
        //后续代码...
    });

    registerDialog.innerHTML = '<div class="dialog-register">'+
    '<div id="js-dialog-register-close" class="close">×</div>'+
    '<div class="tabs">'+
    '<div data-val="gr" class="js-dialog-register-tab tab active">个人用户注册</div>'+
    '<div data-val="qy" class="js-dialog-register-tab tab">企业用户注册</div>'+
    '</div>'+
    '<form class="js-register-con" id="js-register-gr" onsubmit="return false">'+
    '<div class="bd">'+
    '<div class="item">'+
    '<div class="label">用户名</div>'+
    '<div class="content"><input type="text" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">密码</div>'+
    '<div class="content"><input type="password" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">确认密码</div>'+
    '<div class="content"><input type="password" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">手机号</div>'+
    '<div class="content"><input id="js-dialog-register-gr-phone" type="text" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">验证码</div>'+
    '<div class="content">'+
    '<input type="text" style="width: 100px;"/>'+
    '<button data-val="gr" class="btn js-dialog-register-code" type="button">发送验证码</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="ft">'+
    '<button type="submit" class="btn-submit">注册个人用户</button>'+
    '</div>'+
    '</form>'+
    '<form class="js-register-con" style="display: none;" id="js-register-qy" onsubmit="return false">'+
    '<div class="bd">'+
    '<div class="item">'+
    '<div class="label">用户名</div>'+
    '<div class="content"><input type="text" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">密码</div>'+
    '<div class="content"><input type="password" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">确认密码</div>'+
    '<div class="content"><input type="password" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">企业名称</div>'+
    '<div class="content"><input type="text" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">手机号</div>'+
    '<div class="content"><input id="js-dialog-register-qy-phone" type="text" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">验证码</div>'+
    '<div class="content">'+
    '<input type="text" style="width: 100px;"/>'+
    '<button data-val="qy" class="btn js-dialog-register-code" type="button">发送验证码</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="ft">'+
    '<button type="submit" class="btn-submit">注册企业用户</button>'+
    '</div>'+
    '</form>'+
    '</div>';

    loginDialog.innerHTML = '<div class="dialog-login">'+
    '<div id="js-dialog-login-close" class="close">×</div>'+
    '<form onsubmit="return false">'+
    '<div class="bd">'+
    '<div class="item">'+
    '<div class="label">用户名</div>'+
    '<div class="content"><input type="text" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">密码</div>'+
    '<div class="content"><input type="password" /></div>'+
    '</div>'+
    '<div class="item">'+
    '<div class="label">验证码</div>'+
    '<div class="content">'+
    '<input type="text" style="width: 100px;"/>'+
    '<img src="img/demo/code.png" alt="" class="code-pic"/>'+
    '<div id="js-login-code-refresh" class="btn-refresh"></div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="ft">'+
    '<label class="remember"><input type="checkbox" />&nbsp;&nbsp;记住我</label>'+
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="forget" href="javascript:;">忘记密码？</a>'+
    '<button type="submit" class="btn-login">登录</button>'+
    '</div>'+
    '</form>'+
    '</div>';


    $('#js-login,.js-login').on('click', function () {
        loginDialog.showModal();
    });
    $('#js-register').on('click', function () {
        registerDialog.showModal();
    });

    //form表单初始化
    $('.js-datepicker').datepicker({
        dateFormat: 'yy-mm-dd'
    });
    $('#js-area,.js-area').citys({
        required: true,
        nodata: 'disabled'
    });
})()
