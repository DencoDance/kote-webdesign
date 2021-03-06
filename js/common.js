/**
 * Created by DencoDance on 01.03.2015.
 */
$(function () {
    switchLogo(0);
    $(window).scroll(function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        switchLogo(scrollTop);
    });
    $(document).ready(function(){
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top-200
            }, 1000);
            e.preventDefault();
        });
        return false;
    });
});
function switchLogo(pos) {
    if($('#big-logo').length == 0){
            document.getElementById('small-logo').style.opacity = '1';
            $('#top-shadow').hide();
            $('#user').attr('src', 'img/user-black.png');
            $('#Searching').attr('src', 'img/Searching-black.png');
            $('.separator').attr('src', 'img/separator-black.png');
            $('#small-logo').attr('src', 'img/small-logo-red.png');
            document.getElementById('bar').style.backgroundColor = 'rgba(255,255,255, 1)';
            $('#username').addClass('username-other');
            $('nav').addClass('nav-other');
    }
    else{
        if (pos >= $('#big-logo').height() || pos > 200) {
            document.getElementById('small-logo').style.opacity = '1';
            document.getElementById('big-logo').style.opacity = '0';
            document.getElementById('bar').style.backgroundColor = 'rgba(0,0,0, 0.6)';
            $('#top-shadow').hide();
        }
        else{
            document.getElementById('bar').style.backgroundColor = 'transparent';
            document.getElementById('small-logo').style.opacity = '0';
            document.getElementById('big-logo').style.opacity = '1';
            $('#top-shadow').show();
        }
        if(document.getElementById('second-nav').getBoundingClientRect().top<=$('#bar').height()){
            document.getElementById('second-nav').style.opacity = '0';
            document.getElementById('second-navigation').style.opacity = '1';
        }
        else{
            document.getElementById('second-nav').style.opacity = '1';
            document.getElementById('second-navigation').style.opacity = '0';
        }
    }
}
//function switchLogo(pos) {
//    if (pos >= $('#big-logo').height() || pos > 200) {
//        if (document.getElementById('big-logo')) {
//            document.getElementById('small-logo').style.opacity = '1';
//            document.getElementById('big-logo').style.opacity = '0';
//            document.getElementById('bar').style.backgroundColor = 'rgba(0,0,0, 0.6)';
//            $('#top-shadow').hide();
//        }else{
//            document.getElementById('small-logo').style.opacity = '1';
//            $('#top-shadow').hide();
//            $('#user').attr('src', 'img/user-black.png');
//            $('#Searching').attr('src', 'img/Searching-black.png');
//            $('.separator').attr('src', 'img/separator-black.png');
//            $('#small-logo').attr('src', 'img/small-logo-red.png');
//            document.getElementById('bar').style.backgroundColor = 'rgba(255,255,255, 1)';
//            $('#username').addClass('username-other');
//            $('nav').addClass('nav-other');
//        }
//    }
//    if(pos<100 && pos!=0) {
//        if (document.getElementById('big-logo')) {
//            document.getElementById('bar').style.backgroundColor = 'transparent';
//            document.getElementById('small-logo').style.opacity = '0';
//            document.getElementById('big-logo').style.opacity = '1';
//            $('#top-shadow').show();
//        }else{
//            $('#top-shadow').show();
//            $('#user').attr('src', 'img/user.png');
//            $('#Searching').attr('src', 'img/Searching.png');
//            $('.separator').attr('src', 'img/separator.png');
//            $('#small-logo').attr('src', 'img/small-logo.png');
//            document.getElementById('bar').style.backgroundColor = 'transparent';
//            $('#username').removeClass('username-other');
//            $('nav').removeClass('nav-other');
//        }
//
//    }
//    if(pos == 0){
//        document.getElementById('small-logo').style.opacity = '0';
//    }
//}