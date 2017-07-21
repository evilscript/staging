$(document).ready(function(){
    /*Header reshape*/
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 500) {
                $('.header1').slideUp(300);
                $('img.bigLogo').attr('src','../shared/images/header/smallLogo.jpg');
                $('.menuLeft, .menuRight, .teleText').addClass('revisedHeader');
                $('.toggle').addClass('revisedHeader2');
                $('.telephone').addClass('revisedHeader3');
                $('.toggleM, .headerSubM').addClass('revisedHeader');
            }
            else {
                $('.header1').slideDown(300);
                $('img.bigLogo').attr('src','../shared/images/header/logo.png');
                $('.menuLeft, .menuRight, .teleText').removeClass('revisedHeader');
                $('.toggle').removeClass('revisedHeader2');
                $('.telephone').removeClass('revisedHeader3');
                $('.toggleM, .headerSubM').removeClass('revisedHeader');
            }
        });
    });

    /*Slide control arrow mouseover effect*/
    $('.left, .right').mouseover(function(){
        $('.leftArrow, .rightArrow').css('opacity','1');
    }).mouseleave(function(){
        $('.leftArrow, .rightArrow').css('opacity','0.5');
    })

    $(".bannerButton").mouseover(function(){
        $(".a6").stop(true,false).animate({width:"200px"},300);
        $(".a4").stop(true,false).animate({color:"white",'border-color':'white'},300);
    }).mouseleave(function(){
        $(".a6").stop(true,false).animate({width:"0px"});
        $(".a4").stop(true,false).animate({color:"#ff7f00",'border-color':'#ff7f00'},300);
    });
});