/// <reference path="jquery-1.6.1.min.js" />
/*
  Version: 1.0.0.4
  Author: hooyes
  Created Date: 2013-06-07
  Updated Date: 2013-09-10
  DESC: 小工具之类的 
*/
var __Web_Server__ = "http://webaccount.italkbb.com/WebSite_Controller/";

function CheckPhoneNumber(src, Country) {
    var npa = $("#txtnpa").val();
    var nxx = $("#txtnxx").val();
    var last = $("#txtlast").val();
    if (npa == "") { $("#txtnpa").focus(); return false; }
    if (nxx == "") { $("#txtnxx").focus(); return false; }
    if (last == "") { $("#txtlast").focus(); return false; }
    if (npa == "" || nxx == "" || last == "") { return false; }
    //var pstn = npa + nxx + last;
    var Country = Country;
    var tUrl = __Web_Server__ + "Rates/PortinCheckPhone?Country={Country}&npa={npa}&nxx={nxx}&nlast={nlast}&callback=?";
    tUrl = tUrl.replace("{Country}", Country).replace("{npa}", npa).replace("{nxx}", nxx).replace("{nlast}", last);
    $(src).attr("disabled", "disabled");
    $.ajax({
        url: tUrl,
        success: function (data) {
            CheckPhoneNumber_Success(data)
            $(src).removeAttr("disabled");
        },
        cache: false,
        dataType: 'jsonp',
        type: 'get'
    });
}
function RetCheckPhoneNumber() {
    $("#CheckPhoneNumberA").show();
    $("#CheckPhoneNumberB").hide();
    $("#CheckPhoneNumberC").hide();
}
function CheckPhoneNumber_Success(data) {
    if (data.Code == 0) {
        $("#CheckPhoneNumberA").hide();
        $("#CheckPhoneNumberB").show();
        $("#CheckPhoneNumberC").hide();
    } else {
        $("#CheckPhoneNumberA").hide();
        $("#CheckPhoneNumberB").hide();
        $("#CheckPhoneNumberC").show();
    }
}

function inputFocus(element) {
    element.style.textAlign = 'left';
    element.style.background = '';
}
function autotab(object1, object2, objectsize) {
    if (object1.value.length == objectsize)
        object2.focus()
}
function inputUnfocus(element) {
    if (element.name.indexOf('tnf') != -1 && browser != "Safari") {
        element.style.textAlign = 'center';
    }
    element.style.background = '';
}

function getPromotionDate() {
    var nowDate = new Date();
    var nowDay = nowDate.getDate();
    var nowMonth = nowDate.getMonth() + 1;
    var nowYear = nowDate.getFullYear();
    var day;
    var lastday = new Date(nowYear, nowMonth, 0); //获取当月的最后一天日期
    if (nowDay <= 15) {
        day = 15;
    }
    else {
        day = lastday.getDate();
    }
    var str = nowYear + "-" + nowMonth + "-" + day;
    return str;
}

function languageSelector(lang) {
    var url = location.href;
    url = url.replace("\/cht\/", "\/" + lang + "\/");
    url = url.replace("\/chs\/", "\/" + lang + "\/");
    url = url.replace("\/en\/", "\/" + lang + "\/");
    location = url;
}

(function ($) {
    $.fn.extend({
        faqSlide: function (value) {

            var docthis = this;
            //默认参数
            value = $.extend({
                "li_h": "30",
                "time": 4000,
                "movetime": 1000
            }, value)

            //向上滑动动画
            function autoani() {
                $("li:first", docthis).animate({ "margin-top": -value.li_h }, value.movetime, function () {
                    $(this).css("margin-top", 0).appendTo(docthis);
                })
            }

            //自动间隔时间向上滑动
            var anifun = setInterval(autoani, value.time);

            //悬停时停止滑动，离开时继续执行
            $(docthis).children("li").hover(function () {
                clearInterval(anifun);			//清除自动滑动动画
            }, function () {
                anifun = setInterval(autoani, value.time);	//继续执行动画
            })

            // 关系层,动画
            $(docthis).children("li").click(function () {
                var code = $(this).attr("linkto");
                $("#" + code)
                .css("top","-160px")
                .show()
                //.animate({
                //    top: "-160px"
                //}, 1500);
                //$(this).hide();
            });

            // Faq 详细页加上事件
            $(docthis).children("li").each(function (i, n) {
                var code = $(n).attr("linkto");
                
                /*$("#" + code).hover(function () {
                   
                }, function () {
                    $(this).fadeOut("fast");
                });*/

                $("#" + code).find(".nextfaq").click(function () {
                    var nextcode = $(this).attr("next");
                    $("#" + code).hide();
                    $("#" + nextcode).css("top","-160px").show();
                });
				
				$("#" + code).find(".closefaq").click(function () {
                    $(this).parent().parent().parent().fadeOut("fast");
                });

            });


        }
    })
})(jQuery)
