$(document).ready(function(){
    $("#card1, #card2, #card3").flip({
        trigger: 'hover',
        speed: 1000,
        reverse: 'false'
    });

    $('.bottomHover1').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalBottomHover1.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
    $('.bottomHover2').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalBottomHover2.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
    $('.bottomHover3').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalBottomHover3.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
    $('.bottomHover4').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalBottomHover4.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
    $('.usa').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalHoverUSA.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
    $('.canada').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalHoverCanada.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
    $('.australia').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalHoverAustarlia.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
    $('.singapore').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalHoverSingapore.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
    $('.china').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalHoverChina.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/chs_aboutGlobalAll.jpg');
    });
});
