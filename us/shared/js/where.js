$(".button1").click(function(){
	$(".changeshow").children().css("display", "none");
	$(".customer").css('display','block');
	$('.fixhead').children().css("display", "none");
	$('.d1').css("display", "block");
	$('.change').children().removeClass('changesadd');
	$(this).addClass('changesadd');

})
$(".button2").click(function(){
	$(".changeshow").children().css("display", "none");
	$(".shop").css('display','block');
	$('.fixhead').children().css("display", "none");
	$('.d3').css("display", "block");
	$('.change').children().removeClass('changesadd');
	$(this).addClass('changesadd');
})
$(".button3").click(function(){
	$(".changeshow").children().css("display", "none");
	$(".collaborate").css('display','block');
	$('.fixhead').children().css("display", "none");
	$('.d5').css("display", "block");
	$('.change').children().removeClass('changesadd');
	$(this).addClass('changesadd');
})


// 储存店面信息  json

	var data = 
     {"达华府":[{"shopName":"罗1",
				"shopaddress":"超市内1",
				"shoptime":"91",
				"shopnum":"123",
				"mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},

			   {"shopName":"罗2","shopaddress":"超市内2","shoptime":"92","shopnum":"223"},
			   {"shopName":"罗3","shopaddress":"超市内3","shoptime":"93","shopnum":"323"}
			   ],
	"小华府":[{"shopName":"F1","shopaddress":"超市外1","shoptime":"81","shopnum":"113"},
			   {"shopName":"F2","shopaddress":"超市外2","shoptime":"82","shopnum":"213"},
			   {"shopName":"F3","shopaddress":"超市外3","shoptime":"83","shopnum":"313"}
			   ],
	"中华府":[{"shopName":"D1","shopaddress":"市外1","shoptime":"71","shopnum":"114"},
			   {"shopName":"D2","shopaddress":"市外2","shoptime":"72","shopnum":"214"},
			   {"shopName":"D3","shopaddress":"市外3","shoptime":"73","shopnum":"314"},
			   {"shopName":"D4","shopaddress":"市外4","shoptime":"74","shopnum":"315"}
			   ]}
	


 

// 获取value值

 $("#sel").change(function(){
 var k = $('#sel option:selected').val();
 console.log(k);
 var l = eval(data[k]).length;
 console.log(l); 
  $('.backgroundColor').children().remove();

for ( i=0;i<l;i++)
{

if (i%2==1) {
	$(".backgroundColor").append("<div class='add white'><div class='shops '><div class='shopx'><div class='shopname pin'>"+data[k][i].shopName+"</div><div class='address pin f18'>"+data[k][i].shopaddress+"</div><div class='time pin f18'>"+data[k][i].shoptime+"</div><div class='num pin f18'>"+data[k][i].shopnum+"</div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data[k][i].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>");
}else{$(".backgroundColor").append("<div class='add'><div class='shops'><div class='shopx'><div class='shopname pin'>"+data[k][i].shopName+"</div><div class='address pin f18'>"+data[k][i].shopaddress+"</div><div class='time pin f18'>"+data[k][i].shoptime+"</div><div class='num pin f18'>"+data[k][i].shopnum+"</div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data[k][i].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>");};

} 
 }); 
