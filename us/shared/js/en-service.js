// chs 
// index
// 移动优惠
 
var a =window.location.href.indexOf("en/index");
if(a>-1){
		cartman('iTalkMobileText','Refund Shipping Fee');
// 电视优惠
         cartman('iTalkTVtext','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
// 电话优惠
 	    cartman('iTalkPhonetext','Refund Shipping Fee');
// 电话优惠按钮
}


var b =window.location.href.indexOf("en/bundles-mobile-phone");
console.log(b);
if(b>-1){
 // 1G 电话
	 cartman('boxplanpc1g','Phone: Refund Shipping Fee');
 // 5G 电话
     cartman('boxplanpc5g','Phone: Refund Shipping Fee');
// 1G 电话
	 cartman('mboxplanpc1g','Phone: Refund Shipping Fee');
 // 5G 电话
     cartman('mboxplanpc5g','Phone: Refund Shipping Fee');
}


var c =window.location.href.indexOf("en/bundles-mobile-tv-phone");

if(c>-1){

 // 1G 电话
	 cartman('mtpplan1g','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
 // 5G 电话
     cartman('mtpplan5g','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
// 1G 电话
	 cartman('mmtpplan1g','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
 // 5G 电话
     cartman('mmtpplan5g','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
}


var d =window.location.href.indexOf("en/bundles-tv-phone");
if(d>-1){
	 cartman('tpplan1','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
     cartman('tpplan2','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
     cartman('mtpplan1','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
     cartman('mtpplan2','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
}

var e =window.location.href.indexOf("en/home-phone-plans");
if(e>-1){

      cartman('ppplan1','Refund Shipping Fee');
     cartman('ppplan1x','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
     cartman('ppplan2','Refund Shipping Fee');
     cartman('ppplan2x','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
     cartman('mppplan1','Refund Shipping Fee');
     cartman('mppplan1x','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
     cartman('mppplan2','Refund Shipping Fee');
     cartman('mppplan2x','Limited-time Offer: Chinese TV Buy 1 Get 1 Free');
}









function cartman (id,text) {
	 document.getElementById(id).innerHTML=text;

}





