// chs 

var a =window.location.href.indexOf("chs/bundles-tv-phone");
if(a>-1){
		cartman('2499cheapm','6个月免费');
        cartman('2499cheap','6个月免费');
    
        ecic('.btp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_CHS.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')
        ecic('.mbtp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_CHS.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')   
}

var b =window.location.href.indexOf("chs/home-phone-plans");
if(b>-1){
		cartman('2499cheapm','6个月免费');
        cartman('2499cheap','6个月免费');
        ecic('.hpp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_CHS.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')
        ecic('.mhpp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_CHS.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')

}



var at =window.location.href.indexOf("cht/bundles-tv-phone");
if(at>-1){
		cartman('2499cheapm','6個月免費');
        cartman('2499cheap','6個月免費');
        ecic('.btp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_CHT.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')
        ecic('.mbtp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_CHT.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1') 

}

var bt =window.location.href.indexOf("cht/home-phone-plans");
if(bt>-1){
		cartman('2499cheapm','6個月免費');
        cartman('2499cheap','6個月免費');
        ecic('.hpp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_CHT.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')
        ecic('.mhpp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_CHT.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')

}



var an =window.location.href.indexOf("en/bundles-tv-phone");
if(an>-1){
		cartman('2499cheapm','6 Months Free');
        cartman('2499cheap','6 Months Free');
        ecic('.btp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_EN.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')
        ecic('.mbtp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_EN.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')


}

var bn =window.location.href.indexOf("en/home-phone-plans");

if(bn>-1){

		cartman('2499cheapm','6 Months Free');
        cartman('2499cheap','6 Months Free');
        ecic('.hpp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_EN.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')
        ecic('.mhpp2499button','https://webaccount.italkbb.com/BBSignUp/index_USCN_EN.html?act=USCN_BB_Online&cid=202125&opc=USCN2017V10&cob=1')
        

}




function cartman (id,text) {
	 document.getElementById(id).innerHTML=text;

}


function ecic (aa,url) {
	 $(aa).attr("href",url)

}



