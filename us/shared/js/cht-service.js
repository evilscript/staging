// chs 
// index


var a =window.location.href.indexOf("cht/index");
if(a>-1){
// 移動優惠    
        cartman('iTalkMobileText','限時免開通費，卡費');
// 電視優惠
         cartman('iTalkTVtext','限時優惠 中文電視 買一送一');
// 電視優惠按鈕
        cartman('iTalkTVbuttontxt','買一送一');
// 電話優惠
        cartman('iTalkPhonetext','限時優惠 中文電視 買一送一');
// 電話優惠按鈕
         cartman('iTalkPhonebuttontxt','買一送一');
}


var b =window.location.href.indexOf("cht/bundles-mobile-phone");
console.log(b);
if(b>-1){
 // 1G 電話
     cartman('boxplanpc1g','電話：免電話開通費，返運費');
 // 5G 電話
     cartman('boxplanpc5g','電話：免電話開通費，返運費');
// 1G 電話
     cartman('mboxplanpc1g','電話：免電話開通費，返運費');
 // 5G 電話
     cartman('mboxplanpc5g','電話：免電話開通費，返運費');
}


var c =window.location.href.indexOf("cht/bundles-mobile-tv-phone");

if(c>-1){

 // 1G 電話
     cartman('mtpplan1g','限時優惠 中文電視 買一送一');
 // 5G 電話
     cartman('mtpplan5g','限時優惠 中文電視 買一送一');
// 1G 電話
     cartman('mmtpplan1g','限時優惠 中文電視 買一送一');
 // 5G 電話
     cartman('mmtpplan5g','限時優惠 中文電視 買一送一');
}


var d =window.location.href.indexOf("cht/bundles-tv-phone");
if(d>-1){
     cartman('tpplan1','限時優惠 中文電視 買一送一');
     cartman('tpplan2','限時優惠 中文電視 買一送一');
     cartman('mtpplan1','限時優惠 中文電視 買一送一');
     cartman('mtpplan2','限時優惠 中文電視 買一送一');
}

var e =window.location.href.indexOf("cht/home-phone-plans");
if(e>-1){
     cartman('ppplan1','免電話開通費，返運費');
     cartman('ppplan1x','限時優惠 中文電視 買一送一');
     cartman('ppplan2','免電話開通費，返運費');
     cartman('ppplan2x','限時優惠 中文電視 買一送一');
     cartman('mppplan1','免電話開通費，返運費');
     cartman('mppplan1x','限時優惠 中文電視 買一送一');
     cartman('mppplan2','免電話開通費，返運費');
     cartman('mppplan2x','限時優惠 中文電視 買一送一');
}









function cartman (id,text) {
     document.getElementById(id).innerHTML=text;

}





