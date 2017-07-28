	$(".money").click(function(){
	$(".shows").children().css("display", "none");
	$(".moneys").css('display','block');
	$('.change').children().removeClass('changesadd');
	$(this).addClass('changesadd');

})

	$(".user").click(function(){
	$(".shows").children().css("display", "none");
	$(".users").css('display','block');
	$('.change').children().removeClass('changesadd');
	$(this).addClass('changesadd');
})

$(".menu").click(function(){
	$(".shows").children().css("display", "none");
	$(".menus").css('display','block');
	$('.change').children().removeClass('changesadd');
	$(this).addClass('changesadd');
})

$(".pay").click(function(){
	$(".shows").children().css("display", "none");
	$(".pays").css('display','block');
	$('.change').children().removeClass('changesadd');
	$(this).addClass('changesadd');
})