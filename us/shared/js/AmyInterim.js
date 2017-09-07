function show(foldTxt,imgP){

	 var fo = $('#'+foldTxt);
	 var f2 = $('#'+imgP);
	(!fo.is(":visible")) ? (
	   fo.show(),
	   f2.attr("src",'../shared/images/support/doubleArrowOrangeUp.png'),
	  $(document).bind("mouseup",(function(e){
	   	setTimeout(function(){
       	var _c = $('#'+foldTxt);   
	     ((!_c.is(e.target) && _c.has(e.target).length === 0) && $('#'+foldTxt).is(":visible"))?
	     (
	     	$('#'+foldTxt).hide(),$(document).unbind("mouseup"),
	     	$('#'+imgP).attr("src",'../shared/images/support/doubleArrowOrangeDown.png')
	     ):"";
		},1);
		}))
	   ) :
	  (
	   fo.hide(),$(document).unbind("mouseup"),
	   f2.attr("src",'../shared/images/support/doubleArrowOrangeDown.png')
	   )
	}


