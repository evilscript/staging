$(document).ready(function(){
    /*Header reshape*/
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 600) {
                $('.header1').slideUp(300);
                $('img.bigLogo').attr('src','media/images/header/smallLogo.jpg');
                $('.menuLeft, .menuRight, .teleText').addClass('revisedHeader');
                $('.toggle').addClass('revisedHeader2');
                $('.telephone').addClass('revisedHeader3');
                $('.toggleM, .headerSubM').addClass('revisedHeader');
            }
            else {
                $('.header1').slideDown(300);
                $('img.bigLogo').attr('src','media/images/header/logo.png');
                $('.menuLeft, .menuRight, .teleText').removeClass('revisedHeader');
                $('.toggle').removeClass('revisedHeader2');
                $('.telephone').removeClass('revisedHeader3');
                $('.toggleM, .headerSubM').removeClass('revisedHeader');
            }
        });
    });
});