// 
$(window).scroll(function () {
    if($(window).scrollTop() > 20) {
        $("header > nav").addClass('scrolled');
        $(".header-image .img1").addClass('disappear');
        $(".header-image .img2").removeClass('disappear');
    } else {
        $("header > nav").removeClass('scrolled');
        $(".header-image .img1").removeClass('disappear');
        $(".header-image .img2").addClass('disappear');
    }
    console.log('hello')
});

$(".news_info").click(function () {
    $(".news_other").removeClass('news_active');
    $(this).addClass('news_active');
    $(".news_info_container").removeClass('hide');
    $(".news_other_container").addClass('hide');
})

$(".news_other").click(function () {
    $(".news_info").removeClass('news_active');
    $(this).addClass('news_active');
    $(".news_info_container").addClass('hide');
    $(".news_other_container").removeClass('hide');
})