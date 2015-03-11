/**
 * Created by DencoDance on 01.03.2015.
 */
$(function() {
 $(window).scroll(function(){
     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     switchLogo(scrollTop);
 });
});
function switchLogo(pos){
    if(pos >=$('#big-logo').height()){
        document.getElementById('small-logo').style.opacity = '1';
        document.getElementById('big-logo').style.opacity = '0';
        document.getElementById('bar').style.backgroundColor = 'rgba(0,0,0, 0.6)';

    }
    else{
        document.getElementById('bar').style.backgroundColor = 'transparent';
        document.getElementById('small-logo').style.opacity = '0';
        document.getElementById('big-logo').style.opacity = '1';
    }
}