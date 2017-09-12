$(document).ready(function(){
    $("#card1, #card2, #card3").flip({
        trigger: 'hover',
        speed: 1000,
        reverse: 'false'
    });

    $('.bottomHover1').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalBottomHover1.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });
    $('.bottomHover2').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalBottomHover2.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });
    $('.bottomHover3').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalBottomHover3.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });
    $('.bottomHover4').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalBottomHover4.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });
    $('.usa').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverUSA.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });
    $('.canada').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverCanada.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });
    $('.australia').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverAustarlia.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });
    $('.singapore').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverSingapore.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });
    $('.china').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverChina.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll.jpg');
    });

    $('.hoverUSA').click(function(){
        $('.clickUSA').attr('src','../shared/images/about/animationUS.jpg');
    });
    $('.hoverAUS').click(function(){
        $('.clickUSA').attr('src','../shared/images/about/animationAU.jpg');
    });
    $('.hoverCHN').click(function(){
        $('.clickUSA').attr('src','../shared/images/about/animationCN.jpg');
    });
    $('.hoverSIN').click(function(){
        $('.clickUSA').attr('src','../shared/images/about/animationSI.jpg');
    });
    $('.hoverCAN').click(function(){
        $('.clickUSA').attr('src','../shared/images/about/animationCA.jpg');
    });
});
