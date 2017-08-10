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
     {"DC Maryland and Virginia":[{"shopName":"Rockville",
				"shopaddress":"Address: 700 Hungerford Dr, Rockville, MD 20850",
				"shoptime":"Hours: Mon – Sun, 9:30am - 6:30pm",
				"shopnum":"Tel: (301) 880-1268",
				"mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},

			   {"shopName":"Falls Church",
			    "shopaddress":"Address: 2982 Gallows Rd, Falls Church, VA 22042",
			    "shoptime":"Hours: Mon – Sun, 10:30am - 7:30pm",
			    "shopnum":"Tel: (703) 879-8285",
				"mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   
			   ],

	"South California":[

			{"shopName":"San Gabriel",
				"shopaddress":"Address: 140 West Valley Blvd #118D, San Gabriel, CA 91776",
				"shoptime":"Hours: Mon – Sun, 11:00am - 7:30pm",
				"shopnum":"Tel: (626) 288-9088",
				"mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},

			   {"shopName":"Arcadia",
			   "shopaddress":"Address: 1232 S Golden West Ave., Arcadia, CA 91007",
			   "shoptime":"Hours: Mon – Sun, 11:00am - 7:30pm",
			   "shopnum":"Tel: (626) 513-0800",
			   "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},

			   {"shopName":"Rowland Heights",
			   "shopaddress":"Address: #113 1015 Nogales St. #113, Rowland Heights, CA 91748",
			   "shoptime":"Hours: Mon – Sun, 11:00am - 7:30pm",
			   "shopnum":"Tel: (626) 593-5866",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			

			   {"shopName":"Hacienda Heights",
			   "shopaddress":"Address: 1625 S Azusa Ave, Hacienda Heights, CA 91745",
			   "shoptime":"Hours: Mon – Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (626) 283-4899",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   

			   {"shopName":"Irvine",
			   "shopaddress":"Address: 5414-D Walnut Ave., Irvine, 92604",
			   "shoptime":"Hours: Mon – Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (949) 207-6825",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   

			   {"shopName":"San Diego",
			   "shopaddress":"Address: 5950 Balboa Ave. # 103, San Diego, CA 92111",
			   "shoptime":"Hours: Mon – Sun, 10:00am - 7:30pm",
			   "shopnum":"Tel: (619) 309-2199",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   

			   	{"shopName":"Monterey Park",
			   "shopaddress":"Address: 500 N Atlantic Blvd #163, Monterey Park, CA 91754",
			   "shoptime":"Hours: Mon – Sun, 11:00am-7:00pm",
			   "shopnum":"Tel: (626) 500-1886",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},

			   ],


			   

	"North California":[

				{"shopName":"Milpitas",
			   "shopaddress":"Address: 338 Barber Lane, Milpitas, CA 95035",
			   "shoptime":"Hours: Mon – Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (408) 465-4777",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   
			   	{"shopName":"Fremont",
			   "shopaddress":"Address: #102 46827 Warm Springs Blvd. Ste. 102, Fremont, CA 94539",
			   "shoptime":"Hours: Mon – Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (510) 488-6798",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   
			   	{"shopName":"Newark",
			   "shopaddress":"Address: 35219 Newark Blvd, Newark, CA 94560",
			   "shoptime":"Hours: Mon – Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (510) 257-2686",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},

			   ],


			   
	"New York":[

				{"shopName":"NY Flagship Store",
			   "shopaddress":"Address: 42–35 Main Street, Unit 1E, Flushing 11355",
			   "shoptime":"Hours: Mon – Sun, 9:30 - 20:30",
			   "shopnum":"Tel: (718) 888-0068",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   
			   	{"shopName":"Sky View",
			   "shopaddress":"Address: 40-24 College Point Blvd, level B, Flushing NY 11354",
			   "shoptime":"Hours: Mon – Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (718) 888-2515",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   
			   	{"shopName":"Main St, Flushing",
			   "shopaddress":"Address: 4182 Main St, Flushing, NY 11355",
			   "shoptime":"Hours: Mon – Sun, 9:30am - 8:30pm",
			   "shopnum":"Tel: (718) 888-2122",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},

				{"shopName":"Brooklyn",
			   "shopaddress":"Address: 5911 8th Avenue, Unit A, Brooklyn, NY 11220",
			   "shoptime":"Hours: Mon – Sun, 9:30am - 6:30pm",
			   "shopnum":"Tel: (718) 888-0168",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},

			   ],

	"Texas":[

				{"shopName":"Houston",
			   "shopaddress":"Address: 9188 Bellaire Blvd., Suite Q, Houston, TX 77036",
			   "shoptime":"Hours: Mon – Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (832) 203-6006",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   
			   	{"shopName":"Sugar Land",
			   "shopaddress":"Address: 4635 Highway 6, Sugar Land, TX 77478",
			   "shoptime":"Hours: Fri – Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (832) 203-6006",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			 ],

	"Georgia":[

				{"shopName":"Atlanta",
			   "shopaddress":"Address: 2300 Pleasant Hill Rd, Duluth, GA 30096",
			   "shoptime":"Hours: Mon – Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (678) 508-5555",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   
			   	{"shopName":"Duluth",
			   "shopaddress":"Address: 3875 Venture Dr, S-2, Duluth, GA 30096",
			   "shoptime":"Hours: Mon – Sun, 9:30am - 6:30pm",
			   "shopnum":"Tel: (770) 806-9999",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},


			    {"shopName":"Duluth",
			   "shopaddress":"Address: 3875 Venture Dr, S-2, Duluth, GA 30096",
			   "shoptime":"Hours: Mon – Sun, 9:30am - 6:30pm",
			   "shopnum":"Tel: (770) 806-9999",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   ],


	"Massachusetts":[

				{"shopName":"Boston",
			   "shopaddress":"Address: President Plaza, 219 Quincy Ave, Quincy, MA 02169",
			   "shoptime":"Hours: Mon – Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (617) 301-5118",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-CN&amp;geocode=&amp;q=Frederick+Rd,+Germantown,+MD+20876&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.816433,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=Frederick+Rd,+Germantown,+Maryland+20876%E7%BE%8E%E5%9B%BD&amp;t=m&amp;z=14&amp;ll=39.1897,-77.241383&amp;output=embed"},
			   
			   ],

			}
	


 

// 获取value值

 $("#sel").change(function(){
 var k = $('#sel option:selected').val();

 var l = eval(data[k]).length;

  $('.backgroundColor').children().remove();

for ( i=0;i<l;i++)
{

if (i%2==1) {
	$(".backgroundColor").append("<div class='add white'><div class='shops '><div class='shopx'><div class='shopname title32 pin'>"+data[k][i].shopName+"</div><div class='address pin f18'>"+data[k][i].shopaddress+"</div><div class='time pin f18'>"+data[k][i].shoptime+"</div><div class='num pin text18'>"+data[k][i].shopnum+"</div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data[k][i].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>");
}else{$(".backgroundColor").append("<div class='add'><div class='shops'><div class='shopx'><div class='shopname title32 pin'>"+data[k][i].shopName+"</div><div class='address pin text18'>"+data[k][i].shopaddress+"</div><div class='time pin text18'>"+data[k][i].shoptime+"</div><div class='num pin text18'>"+data[k][i].shopnum+"</div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data[k][i].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>");};

} 
 }); 
