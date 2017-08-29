/*
  Version:1.0.0.2
  Author:hooyes
  Create Date:2013-07-29
  Update Date:2017-08-29
  Desc : Rates Search
*/

var __Rates_Server__ = "https://webaccount.italkbb.com/WebSite_Controller/";

(function ($) {
    $.extend({
        Request: function (m) {
            var sValue = location.search.match(new RegExp("[\?\&]" + m + "=([^\&]*)(\&?)", "i"));
            return sValue ? sValue[1] : sValue;
        }
    });
})(jQuery);

function Rates_Search(Params, Container) {

    $.ajax({
        type: "get",
        async: false,
        url: __Rates_Server__+"rates/search",
        data: Params,
        dataType: "jsonp",
        jsonp: "callback",
        //jsonpCallback: "?",
        success: function (data) {
            //data = DemoData;
            var Ht = [];
            if (data.Result.Code == 0) {
                var od = 100; // 
                for (var i = 0; i < data.Rates.length; i++) {
                    if (od == 100) {
                        Ht.push('<tr class="bgWhite">');
                        Ht.push('<td class="text16 mText20 listLeft" >' + data.Rates[i].LocationName + '</td>');
                        Ht.push('<td class="text16 mText20 listCenter">' + data.Rates[i].AreaCode + '</td>');
                        Ht.push('<td class="text16 mText20 listRight">' + data.Rates[i].DMcharge + '</td>');
                        Ht.push('</tr>');
                        od = 1;
                    }
                    else if (od == 0) {
                        Ht.push('<tr class="bgWhite">');
                        Ht.push('<td class="text16 mText20 listLeft">' + data.Rates[i].LocationName + '</td>');
                        Ht.push('<td class="text16 mText20 listCenter">' + data.Rates[i].AreaCode + '</td>');
                        Ht.push('<td class="text16 mText20 listRight">' + data.Rates[i].DMcharge + '</td>');
                        Ht.push('</tr>');
                        od = 1;
                    }
                    else {
                        Ht.push('<tr class="bgGray">');
                        Ht.push('<td class="text16 mText20 listLeft">' + data.Rates[i].LocationName + '</td>');
                        Ht.push('<td class="text16 mText20 listCenter">' + data.Rates[i].AreaCode + '</td>');
                        Ht.push('<td class="text16 mText20 listRight">' + data.Rates[i].DMcharge + '</td>');
                        Ht.push('</tr>');
                        od = 0;
                    }
                }
                //alert(Ht.join(""));
                $(Container).html(Ht.join(""));
            } else {
                alert(data.Result.Message);
            }
        },
        error: function () {

        }
    });
}
function Rates_HighlightBtn(Params, Container) {
    var Code = Params.LocationName.substring(0, 1).toUpperCase();
    $(Container).find(".alphabet a").removeClass("selected");
    $(Container).find(".alphabet a[code='" + Code + "']").addClass("selected");
}
function Rates_FireBtn(Params,Container) {
    $(Container).find("a").click(function () {
        var Code = $(this).attr("code");
        
        var ParamsX = Params;
        ParamsX.LocationName = Code;
        Rates_Search(Params, "#js_rates_results_tb");
        Rates_HighlightBtn(Params, "#js_rates_btn_tb");
    });
}
function Rates_FireSearchBtn(Params,Container) {
    $(Container).find("#js_rates_sch_btn").click(function () {
        GoSearch();
    });

    $(Container).find("#js_rates_sch_txt").keypress(function (e) {
        if (e.which == 13) {
            GoSearch();
            $(this).focus();
        }
    });

    function GoSearch() {
        var LocationName = $(Container).find("#js_rates_sch_txt").val();
        if (LocationName == null || LocationName == "") {
            LocationName = "A";
        }
       
        var ParamsX = Params;
        ParamsX.LocationName = LocationName;
        Rates_Search(Params, "#js_rates_results_tb");
        Rates_HighlightBtn(Params, "#js_rates_btn_tb");
    }
}