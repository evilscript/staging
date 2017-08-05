function show(foldTxt,imgP){
	if(document.all(foldTxt).style.display=='none'){
	   document.all(foldTxt).style.display='block';
	   document.all(imgP).src='../shared/images/support/doubleArrowOrangeUp.png'
	   }
	else{
	   document.all(foldTxt).style.display='none';	
	   document.all(imgP).src='../shared/images/support/doubleArrowOrangeDown.png'}
	   }


