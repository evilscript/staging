$(document).ready(function () {
    //var domain = "http://webaccount-dev.italkbb.com/WebSite_Controller";
    var domain = "http://webaccount.italkbb.com/WebSite_Controller";
    $.extend({
        Request: function (m) {
            var sValue = location.search.match(new RegExp("[\?\&]" + m + "=([^\&]*)(\&?)", "i"));
            return sValue ? sValue[1] : sValue;
        }
    });
    var culture = $.Request("Culture") ? $.Request("Culture") : "zh-cn";
    $("#pageTitle").html(lan[culture].pageTitle);
    $("#bbnTitle").html(lan[culture].BBNTitle);
    $("#notUser").html(lan[culture].notUser);
    $("#inputEmail").html(lan[culture].emailTitle);
    $("#inputEmailList").html(lan[culture].emailListTitle);
    $("#commissionDesc").html(lan[culture].commissionDesc);
    $("#sendBtn").val(lan[culture].sendBtnText);
    var Country = $.Request("Country") ? $.Request("Country") : "USCN";
    if (culture.trim().toLowerCase() == "en") {
        $("#notFind").html("Can't find it? [<a href=\"javascript:\" onClick=\"window.open('http://www.italkbb.com/BB/enu/img/899-in-IP-BOX.jpg','899','width=675,height=530,scrollbars=no')\" class=\"text_8pt_huicu_link\">Click here</a>]"); 
        if (Country.trim().toUpperCase() == "USCN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_USCN_EN.html?referral=Your BB#(Referral Code)");
        }
        if (Country.trim().toUpperCase() == "CACN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_CACN_EN.html?referral=Your BB#(Referral Code)");
        }
        if (Country.trim().toUpperCase() == "AUCN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_AUCN_EN.html?referral=Your BB#(Referral Code)");
        }
    }
    if (culture.trim().toLowerCase() == "zh-cn") {
        $("#notFind").html("找不到？[<a href=\"javascript:\" onClick=\"window.open('http://www.italkbb.com/BB/chs/img/899-in-IP-BOX.jpg','899','width=675,height=530,scrollbars=no')\" class=\"text_9pt_huangcu\">请点此</a>]。");
        if (Country.trim().toUpperCase() == "USCN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_USCN_CHS.html?referral=您的BB#（Referral Code)");

        }
        if (Country.trim().toUpperCase() == "CACN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_CACN_CHS.html?referral=您的BB#（Referral Code)");
        }
        if (Country.trim().toUpperCase() == "AUCN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_AUCN_CHS.html?referral=您的BB#（Referral Code)");
        }
    }
    if (culture.trim().toLowerCase() == "zh-cht") {
        $("#notFind").html("找不到？[<a href=\"javascript:\" onClick=\"window.open('http://www.italkbb.com/BB/cht/img/899-in-IP-BOX.jpg','899','width=675,height=530,scrollbars=no')\" class=\"text_9pt_huangcu\">請點此</a>]。");
        if (Country.trim().toUpperCase() == "USCN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_USCN_CHS.html?referral=您的BB#（Referral Code)");
        }
        if (Country.trim().toUpperCase() == "CACN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_CACN_CHS.html?referral=您的BB#（Referral Code)");
        }
        if (Country.trim().toUpperCase() == "AUCN") {
            $("#commissionLink").html("https://webaccount.italkbb.com/BBSignUp/index_AUCN_CHS.html?referral=您的BB#（Referral Code)");
        }
    }
    $("#sendBtn").click(function () {
        var refferCode = $("#refferCode").val();
        if (refferCode == "") {
            alert(lan[culture].needBBN);
            return;
        }
        var email = $("#email").val();
        if (email == "") {
            alert(lan[culture].needEmail);
            return;
        }
        var emailList = $("#emailList").val();
        if (emailList == "") {
            alert(lan[culture].needEmailList);
            return;
        }
        console.log(emailList);
        $.ajax({
            url:domain+ "/Web/SendMailByBBN",
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            data: {
                bbn: refferCode,
                email:email,
                emails: emailList,
                country: Country
            },
            success: function (data) {
                console.log(data);
                if (data.Code == 0) {
                    alert("success");
                } else {
                    alert(data.Message);
                }
            },
            error: function (err) {
                alert(err);
            }
        })
    });
});