$(document).ready(function(){
    /*Header部分形状变化功能*/
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

    /*主页下方联系我们和social icon的mouseover效果*/
    $('img.contactIcon1').mouseover(function(){
        $(this).attr('src','../shared/images/index/chs_contactIcon1Blue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/chs_contactIcon1.png');
    });
    $('img.contactIcon2').mouseover(function(){
        $(this).attr('src','../shared/images/index/chs_contactIcon2Blue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/chs_contactIcon2.png');
    });
    $('img.contactIcon3').mouseover(function(){
        $(this).attr('src','../shared/images/index/chs_contactIcon3Blue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/chs_contactIcon3.png');
    });
    /*English version mouseover*/
    $('img.contactIcon1En').mouseover(function(){
        $(this).attr('src','../shared/images/index/en_contactIcon1Blue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/en_contactIcon1.png');
    });
    $('img.contactIcon2En').mouseover(function(){
        $(this).attr('src','../shared/images/index/en_contactIcon2Blue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/en_contactIcon2.png');
    });
    $('img.contactIcon3En').mouseover(function(){
        $(this).attr('src','../shared/images/index/en_contactIcon3Blue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/en_contactIcon3.png');
    });
    /*Social icons mouseover*/
    $('.social1').mouseover(function(){
        $(this).attr('src','../shared/images/index/iconWechatBlue.jpg');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/iconWechat.jpg');
    });
    $('.social2').mouseover(function(){
        $(this).attr('src','../shared/images/index/iconWeiboBlue.jpg');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/iconWeibo.jpg');
    });
    $('.social3').mouseover(function(){
        $(this).attr('src','../shared/images/index/iconFacebookBlue.jpg');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/iconFacebook.jpg');
    });
    $('.social4').mouseover(function(){
        $(this).attr('src','../shared/images/index/iconInsBlue.jpg');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/index/iconIns.jpg');
    });
});



