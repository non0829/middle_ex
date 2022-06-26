// トップページのヘッダーのみスクロールしたら変更する
$(window).scroll(function () {
    if($(window).scrollTop() > 20) {
        $("header > nav").addClass('scrolled');
        $(".hamburger").addClass('scrolled');
        $(".header-image .img1").addClass('disappear');
        $(".header-image .img2").removeClass('disappear');
    } else {
        $("header > nav").removeClass('scrolled');
        $(".hamburger").removeClass('scrolled');
        $(".header-image .img1").removeClass('disappear');
        $(".header-image .img2").addClass('disappear');
    }
    console.log('hello')
});
// ここまで

// トップページのお知らせのタブ機能
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
// ここまで

// ・ハンバーガーメニューの実装
$(".hamburger").click(function () {
    $(this).toggleClass('hamburger_active');
    $(".hamburger").toggleClass('scrolled');
    $(".sp-global-menu").toggleClass('sp-global-menu-active');
    $(".header-back-color").toggleClass('header-back-color-active');
})


// ・宿泊予約のモーダル作成＆カレンダー機能の実装
// ・要素をフェードインさせる