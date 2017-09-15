// hooyes 2017-09-14
function show(foldTxt,imgP){
	 $(document).unbind("mouseup");
     var img1 = '../shared/images/icons/doubleArrowOrangeUp.png';
     var img2 ='../shared/images/icons/doubleArrowOrangeDown.png';
	 var f1 = $('#'+foldTxt),f2 = $('#'+imgP);
	 f1.hasClass("H-D") ? "" : f1.addClass("H-D");f2.hasClass("X-D") ? "" : f2.addClass("X-D");
	 !f1.is(":visible") ? ( f1.addClass("H-ON"),f2.addClass("X-ON"),
	  $(document).bind("mouseup",(function(e){
	   	setTimeout(function(){(!f1.is(e.target) && f1.has(e.target).length === 0 && f1.is(":visible"))?
	     (f1.hide(),f2.attr("src",img2),$(document).unbind("mouseup")):"";},1); }))) 
	: (f1.removeClass("H-ON"),f2.removeClass("X-ON"))
  	$(".H-D").hide();$(".H-ON").show().removeClass("H-ON");
  	$(".X-D").attr("src",img2);$(".X-ON").attr("src",img1).removeClass("X-ON");
}