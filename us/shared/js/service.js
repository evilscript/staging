// chs 
// index
// 移动优惠
 
var a =window.location.href.indexOf("chs/index");
if(a>-1){
		cartman('iTalkMobileText','限时免开通费，卡费');
// 电视优惠
         cartman('iTalkTVtext','限时优惠 中文电视 买一送一');
// 电视优惠按钮
		cartman('iTalkTVbuttontxt','');
// 电话优惠
 	    cartman('iTalkPhonetext','免电话开通费，返运费');
// 电话优惠按钮
         cartman('iTalkPhonebuttontxt','');
}


var b =window.location.href.indexOf("chs/bundles-mobile-phone");
console.log(b);
if(b>-1){
 // 1G 电话
	 cartman('boxplanpc1g','电话：免开通费，返运费');
 // 5G 电话
     cartman('boxplanpc5g','电话：免开通费，返运费');
// 1G 电话
	 cartman('mboxplanpc1g','电话：免开通费，返运费');
 // 5G 电话
     cartman('mboxplanpc5g','电话：免开通费，返运费');
}


var c =window.location.href.indexOf("chs/bundles-mobile-tv-phone");

if(c>-1){

 // 1G 电话
	 cartman('mtpplan1g','限时优惠 中文电视 买一送一');
 // 5G 电话
     cartman('mtpplan5g','限时优惠 中文电视 买一送一');
// 1G 电话
	 cartman('mmtpplan1g','限时优惠 中文电视 买一送一');
 // 5G 电话
     cartman('mmtpplan5g','限时优惠 中文电视 买一送一');
}


var d =window.location.href.indexOf("chs/bundles-tv-phone");
if(d>-1){
	 cartman('tpplan1','限时优惠 中文电视 买一送一');
     cartman('tpplan2','限时优惠 中文电视 买一送一');
     cartman('mtpplan1','限时优惠 中文电视 买一送一');
     cartman('mtpplan2','限时优惠 中文电视 买一送一');
}

var e =window.location.href.indexOf("chs/home-phone-plans");
if(e>-1){
	 cartman('ppplan1','免电话开通费，返运费');
     cartman('ppplan1x','限时优惠 中文电视 买一送一');
     cartman('ppplan2','免电话开通费，返运费');
     cartman('ppplan2x','限时优惠 中文电视 买一送一');
     cartman('mppplan1','免电话开通费，返运费');
     cartman('mppplan1x','限时优惠 中文电视 买一送一');
     cartman('mppplan2','免电话开通费，返运费');
     cartman('mppplan2x','限时优惠 中文电视 买一送一');
}









function cartman (id,text) {
	 document.getElementById(id).innerHTML=text;

}





