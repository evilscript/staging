$(document).ready(function(){
    $("#card1, #card2, #card3").flip({
        trigger: 'hover',
        speed: 1000,
        reverse: 'false'
    });

    $('.bottomHover1').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalBottomHover1.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
    $('.bottomHover2').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalBottomHover2.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
    $('.bottomHover3').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalBottomHover3.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
    $('.bottomHover4').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalBottomHover4.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
    $('.usa').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalHoverUSA.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
    $('.canada').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalHoverCanada.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
    $('.australia').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalHoverAustarlia.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
    $('.singapore').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalHoverSingapore.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
    $('.china').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalHoverChina.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/company-profile/en_aboutGlobalAll.jpg');
    });
});
