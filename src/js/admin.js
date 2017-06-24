(function () {
    $(document).on('click', '.js-sidebar-menu-title', function () {
        var $this = $(this);
        $this.toggleClass('active');
        $this.next().slideToggle();
        var $siblings = $this.parent().siblings();
        $siblings.find('ul').slideUp();
        $siblings.find('.js-sidebar-menu-title').removeClass('active');
    });
})()