$(document).ready(function(){
    $('.aboutTopBlue1').mouseover(function(){
        $(this).fadeOut(250, function(){
            $(this).attr('src','../shared/images/about/companyTopIconOrg1.png').css('padding-top','8%').on('load', function(){
                    if (this.complete) $(this).fadeIn(250);
            });
        });
    }).mouseleave(function(){
        $(this).fadeOut(250, function(){
            $(this).attr('src','../shared/images/about/companyTopIcon1.png').css('padding-top','0').on('load', function(){
                if (this.complete) $(this).fadeIn(250);
            });
        });
    });
    $('.aboutTopBlue2').mouseover(function(){
        $(this).fadeOut(250, function(){
            $(this).attr('src','../shared/images/about/companyTopIconOrg2.png').css('padding-top','8%').on('load', function(){
                if (this.complete) $(this).fadeIn(250);
            });
        });
    }).mouseleave(function(){
        $(this).fadeOut(250, function(){
            $(this).attr('src','../shared/images/about/companyTopIcon2.png').css('padding-top','0').on('load', function(){
                if (this.complete) $(this).fadeIn(250);
            });
        });
    });
    $('.aboutTopBlue3').mouseover(function(){
        $(this).fadeOut(250, function(){
            $(this).attr('src','../shared/images/about/companyTopIconOrg3.png').css('padding-top','8%').on('load', function(){
                if (this.complete) $(this).fadeIn(250);
            });
        });
    }).mouseleave(function(){
        $(this).fadeOut(250, function(){
            $(this).attr('src','../shared/images/about/companyTopIcon3.png').css('padding-top','0').on('load', function(){
                if (this.complete) $(this).fadeIn(250);
            });
        });
    });
    $('.aboutTopBlue4').mouseover(function(){
        $(this).fadeOut(250, function(){
            $(this).attr('src','../shared/images/about/companyTopIconOrg4.png').css('padding-top','8%').on('load', function(){
                if (this.complete) $(this).fadeIn(250);
            });
        });
    }).mouseleave(function(){
        $(this).fadeOut(250, function(){
            $(this).attr('src','../shared/images/about/companyTopIcon4.png').css('padding-top','0').on('load', function(){
                if (this.complete) $(this).fadeIn(250);
            });
        });
    });
});
