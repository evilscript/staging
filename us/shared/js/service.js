// chs 

var a =window.location.href.indexOf("chs/bundles-tv-phone");
if(a>-1){
		cartman('2499cheapm','6个月免费');
        cartman('2499cheap','6个月免费');


}

var b =window.location.href.indexOf("chs/home-phone-plans");
if(b>-1){
		cartman('2499cheapm','6个月免费');
        cartman('2499cheap','6个月免费');

}



var at =window.location.href.indexOf("cht/bundles-tv-phone");
if(at>-1){
		cartman('2499cheapm','6個月免費');
        cartman('2499cheap','6個月免費');


}

var bt =window.location.href.indexOf("cht/home-phone-plans");
if(bt>-1){
		cartman('2499cheapm','6個月免費');
        cartman('2499cheap','6個月免費');

}



var an =window.location.href.indexOf("en/bundles-tv-phone");
if(an>-1){
		cartman('2499cheapm','6 Months Free');
        cartman('2499cheap','6 Months Free');


}

var bn =window.location.href.indexOf("en/home-phone-plans");

if(bn>-1){

		cartman('2499cheapm','6 Months Free');
        cartman('2499cheap','6 Months Free');
        

}




function cartman (id,text) {
	 document.getElementById(id).innerHTML=text;

}





