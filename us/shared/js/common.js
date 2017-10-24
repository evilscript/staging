$(window).resize(function(){
var screenWidth = window.innerWidth;
var a = $('.bannerAll').width();
    if(screenWidth<767){       
        $('.bannerAll').css('height',a*1+'px');
      }else if(767<=screenWidth<1000){
        $('.bannerAll').css('height',a*0.49+'px')
    }  

    if(screenWidth>=1000){
        $('.bannerAll').css('height',a*0.37+'px')
      }


});


$(function(){
var screenWidth = window.innerWidth;
var a = $('.bannerAll').width();


    if(screenWidth<767){       
        $('.bannerAll').css('height',a*1+'px');
      }else if(767<=screenWidth<1000){
        $('.bannerAll').css('height',a*0.49+'px')
    }

    if(screenWidth>=1000){
        $('.bannerAll').css('height',a*0.37+'px')
      }

});


$(document).ready(function(){
    /*Header部分形状变化功能*/
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 300) {
                $('.header1').slideUp(300);
                $('img.bigLogo').attr('src','../shared/images/header/smallLogo.png');
                $('.menuLeft, .menuRight, .teleText').addClass('revisedHeader');
                $('.toggle').addClass('revisedHeader2');
                $('.telephone').addClass('revisedHeader3');
                $('.toggleM, .headerSubM').addClass('revisedHeader');
                $('.headerBackToTop').css('display','block');
            }
            else {
                $('.header1').slideDown(300);
                $('img.bigLogo').attr('src','../shared/images/header/logo.png');
                $('.menuLeft, .menuRight, .teleText').removeClass('revisedHeader');
                $('.toggle').removeClass('revisedHeader2');
                $('.telephone').removeClass('revisedHeader3');
                $('.toggleM, .headerSubM').removeClass('revisedHeader');
                $('.headerBackToTop').css('display','none');
            }
        });
    });

    /*主页下方联系我们和social icon的mouseover效果*/
    $('img.contactIcon1').mouseover(function(){
        $(this).attr('src','../shared/images/icons/callCenterIconH.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/icons/callCenterIcon.png');
    });
    $('img.contactIcon2').mouseover(function(){
        $(this).attr('src','../shared/images/icons/weChatIconH.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/icons/weChatIcon.png');
    });
    $('img.contactIcon3').mouseover(function(){
        $(this).attr('src','../shared/images/icons/storeIconH.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/icons/storeIcon.png');
    });

    /*英文版应该和上面的一样了！*/
    /*English version mouseover*/
    /*$('img.contactIcon1En').mouseover(function(){
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
    });*/


    /*Social icons mouseover*/
    $('.social1').mouseover(function(){
        $(this).attr('src','../shared/images/icons/iconWechatBlue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/icons/iconWechat.png');
    });
    $('.social2').mouseover(function(){
        $(this).attr('src','../shared/images/icons/iconWeiboBlue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/icons/iconWeibo.png');
    });
    $('.social3').mouseover(function(){
        $(this).attr('src','../shared/images/icons/iconFacebookBlue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/icons/iconFacebook.png');
    });
    $('.social4').mouseover(function(){
        $(this).attr('src','../shared/images/icons/iconGoogleBlue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/icons/iconGoogle.png');
    });
    $('.social5').mouseover(function(){
        $(this).attr('src','../shared/images/icons/iconLinkedinBlue.png');
    }).mouseleave(function(){
        $(this).attr('src','../shared/images/icons/iconLinkedin.png');
    });

});





