

let nHeight = $('.main').height(),
lastScrollTop = 0;

$(document).on('scroll', addScroll);
function addScroll() {
    if ($(document).width() >= 992) {
        let scroll = $(document).scrollTop();

        let st = window.pageYOffset || document.documentElement.scrollTop;


        if (!$('body').is('.disabled')) {
            if (st > lastScrollTop && scroll < nHeight) {
                // downscroll code
                $('body').addClass('disabled');
                $('body, html').animate({ scrollTop: nHeight }, 600, function () {
                    $('body').removeClass('disabled');
                });
            } else if (st < lastScrollTop && scroll < nHeight) {
                // upscroll code
                $('body').addClass('disabled');
                $('body, html').animate({ scrollTop: 0 }, 600, function () {
                    $('body').removeClass('disabled');
                });
                $('#top-menu').removeClass('on');
                $('#top-menu').removeClass('off');
            }
        }
        lastScrollTop = st;
    }
}