$(document).ready(function(){
    $("#card1, #card2, #card3").flip({
        trigger: 'hover',
        speed: 1000,
        reverse: 'false'
    });

    $('.bottomHover1').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalBottomHover1-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
    $('.bottomHover2').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalBottomHover2-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
    $('.bottomHover3').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalBottomHover3-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
    $('.bottomHover4').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalBottomHover4-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
    $('.usa').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverUSA-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
    $('.canada').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverCanada-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
    $('.australia').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverAustarlia-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
    $('.singapore').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverSingapore-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
    $('.china').mouseover(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalHoverChina-en.jpg');
    }).mouseleave(function(){
        $('.globalImg').attr('src', '../shared/images/about/aboutGlobalAll-en.jpg');
    });
});
