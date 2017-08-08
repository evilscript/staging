$(document).ready(function(){
    $('.aboutNewsBanner1, .aboutNewsBanner2, .aboutNewsBanner3').mouseover(function(){
        $(this).children('.aboutNewsBannerText').fadeIn(500);
    }).mouseleave(function(){
        $(this).children('.aboutNewsBannerText').fadeOut(500);
    });

    $('.yearSelect').click(function(){
        $('.otherYear').slideToggle(300);
    })
});

$(document).mouseup(function(e)
{
    /*搜索栏 点击其他区域 自动收起*/
    var container1 = $(".yearSelect");/*点击什么区域可以打开*/
    var target1 = $(".otherYear");/*点击什么区域可以完成下面的动作*/
    if (!container1.is(e.target) && container1.has(e.target).length === 0)
    {
        target1.slideUp();
    }
    /*结束*/
});

