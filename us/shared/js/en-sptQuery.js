$(".button1").click(function(){
	$(".changeshow").children().css("display", "none");
	$(".customer").css('display','block');
	$('.fixhead').children().css("display", "none");
	$('.d1').css("display", "block");
	$('.menuBtn').removeClass('selected');
	$(this).addClass('selected');
	$('.backgroundColor').children().remove();
	$('.lineBlue').css("margin-top", "0%");


})
$(".button2").click(function(){
	$(".changeshow").children().css("display", "none");
	$(".shop").css('display','block');
	$('.fixhead').children().css("display", "none");
	$('.d3').css("display", "block");
	$('.menuBtn').removeClass('selected');
	$('.lineBlue').css("margin-top", "5%");
	$(this).addClass('selected');	
	chaxun();
	

})
$(".button3").click(function(){
	$(".changeshow").children().css("display", "none");
	$(".collaborate").css('display','block');
	$('.fixhead').children().css("display", "none");
	$('.d5').css("display", "block");
	$('.menuBtn').removeClass('selected');
	$(this).addClass('selected');
	$('.lineBlue').css("margin-top", "5%");
	$('.backgroundColor').children().remove();
})


// 储存店面信息  json

	var data = 
     {"DC Maryland and Virginia":[
     			{"shopName":"Falls Church",
			    "shopaddress":"Address: 2982 Gallows Rd, Falls Church, VA 22042",
			    "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			    "shopnum":"Tel: (703) 333-3433",
				"mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3106.3467038910862!2d-77.23093068508578!3d38.87030885614636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b6354229161%3A0x93adae5199009956!2zMjk4MiBHYWxsb3dzIFJkLCBGYWxscyBDaHVyY2gsIFZBIDIyMDQy576O5Zu9!5e0!3m2!1szh-TW!2scn!4v1465871570673",
				'pic':""},

     			{"shopName":"Rockville",
				"shopaddress":"Address: 700 Hungerford Dr, Rockville, MD 20850",
				"shoptime":"Hours: Mon - Sun, 9:30am - 6:30pm",
				"shopnum":"Tel: (301) 880-1268",
				"mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.588859883134!2d-77.15635798436847!3d39.093061742991466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd774b600ffb%3A0x9e25622abbc5d85!2zNzAwIEh1bmdlcmZvcmQgRHIsIFJvY2t2aWxsZSwgTUQgMjA4NTDnvo7lnIs!5e0!3m2!1szh-TW!2shk!4v1463034050430",
				'pic':""},
	   
			   ],

	"South California":[

				{"shopName":"Arcadia",
			   "shopaddress":"Address: 1232 S Golden West Ave., Arcadia, CA 91007",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:30pm",
			   "shopnum":"Tel: (626) 513-0800",
			   "mapd":"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=1300+S+Golden+West+Ave.,+Arcadia,+CA+91007&amp;aq=&amp;sll=34.07862,-118.101893&amp;sspn=0.007331,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=1300+S+Golden+W+Ave,+Arcadia,+Los+Angeles,+California+91007&amp;t=m&amp;ll=34.130705,-118.055305&amp;spn=0.024867,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
				"pic":[{'str':"../shared/images/shoppic/CAA1.jpg"},{'str':"../shared/images/shoppic/CAA2.jpg"},{'str':"../shared/images/shoppic/CAA3.jpg"}]},

				{"shopName":"Hacienda Heights",
			   "shopaddress":"Address: 1625 S Azusa Ave, Hacienda Heights, CA 91745",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (626) 283-4899",
			     "mapd":"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=1625+S+Azusa+Ave,+Hacienda+Heights,+CA+9174&amp;aq=&amp;sll=33.996782,-117.890768&amp;sspn=0.007338,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=1625+S+Azusa+Ave,+Hacienda+Heights,+Los+Angeles,+California+91745&amp;t=m&amp;ll=33.999877,-117.929134&amp;spn=0.024905,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	"pic":''},


			 	{"shopName":"Irvine",
			   "shopaddress":"Address: 5414 Walnut Ave, Irvine, CA 92604",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (949) 207-6825",
			     "mapd":"https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=tw&amp;geocode=&amp;q=5414-D+Walnut+Ave.,+Irvine,+CA++92604&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=52.020054,114.169922&amp;ie=UTF8&amp;hq=&amp;hnear=5414+Walnut+Ave,+Irvine,+Orange,+California+92604&amp;t=m&amp;ll=33.697922,-117.767429&amp;spn=0.024993,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	"pic":[{'str':"../shared/images/shoppic/CAL1.jpg"},{'str':"../shared/images/shoppic/CAL2.jpg"},{'str':"../shared/images/shoppic/CAL3.jpg"}]},


			    {"shopName":"Monterey Park",
			   "shopaddress":"Address: 500 N Atlantic Blvd #163, Monterey Park, CA 91754",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (626) 500-1886",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3305.001456357596!2d-118.13615178446753!3d34.0694769242686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c54221b58e8b%3A0xe5bd465fb23d485e!2s500+N+Atlantic+Blvd+%23163%2C+Monterey+Park%2C+CA+91754%E7%BE%8E%E5%9B%BD!5e0!3m2!1szh-CN!2scn!4v1484122416976",
			 	"pic":[{'str':"../shared/images/shoppic/CAM1.jpg"},{'str':"../shared/images/shoppic/CAM2.jpg"},{'str':"../shared/images/shoppic/CAM3.jpg"}]},


			 	{"shopName":"Rowland Heights",
			   "shopaddress":"Address: #113 1015 Nogales St. #113, Rowland Heights, CA 91748",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:30pm",
			   "shopnum":"Tel: (626) 593-5866",
			     "mapd":"https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=Golden+West+Ave+%23B+,Arcadia,+CA+91007&amp;aq=&amp;sll=34.131396,-118.06079&amp;sspn=0.015435,0.027874&amp;ie=UTF8&amp;hq=&amp;hnear=Golden+W+Ave,+Arcadia,+California+91007&amp;t=m&amp;ll=34.131416,-118.060799&amp;spn=0.024866,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	"pic":[{'str':"../shared/images/shoppic/CAR1.jpg"},{'str':"../shared/images/shoppic/CAR2.jpg"},{'str':"../shared/images/shoppic/CAR3.jpg"}]},
			   


				{"shopName":"San Gabriel",
				"shopaddress":"Address: 140 West Valley Blvd #118D, San Gabriel, CA 91776",
				"shoptime":"Hours: Mon - Sun, 11:00am - 7:30pm",
				"shopnum":"Tel: (626) 288-9088",
				"mapd":"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=ITalkBB+San+Gabriel+Store&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=54.269804,114.169922&amp;ie=UTF8&amp;hq=ITalkBB+San+Gabriel+Store&amp;hnear=&amp;t=m&amp;cid=1269294396470645711&amp;ll=34.099154,-118.087749&amp;spn=0.049752,0.115013&amp;z=13&amp;iwloc=A&amp;output=embed",
				'pic':[{'str':"../shared/images/shoppic/CAS1.jpg"},{'str':"../shared/images/shoppic/CAS2.jpg"},{'str':"../shared/images/shoppic/CAS3.jpg"}]},

			   {"shopName":"San Diego",
			   "shopaddress":"Address: 5950 Balboa Ave. # 103, San Diego, CA 92111",
			   "shoptime":"Hours: Mon - Sun, 10:00am - 7:30pm",
			   "shopnum":"Tel: (619) 309-2199",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3352.8952218988443!2d-117.17914268448982!3d32.82154108902036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc00768f0cbf47%3A0x2bbac043ebbdef9e!2zNTk1MCBCYWxib2EgQXZlICMxMDMsIFNhbiBEaWVnbywgQ0EgOTIxMTHnvo7lm70!5e0!3m2!1shl=tw!2scn!4v1478050485087",
			 	"pic":''},

			   ],


			   

	"North California":[

				{"shopName":"Fremont",
			   "shopaddress":"Address: 46827 Warm Springs Blvd #102, Fremont, CA 94539",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (510) 488-6798",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m23!1m12!1m3!1d101306.32625177751!2d-121.99907495774883!3d37.48851022662862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x808fc6437599c013%3A0x171516c30b165a30!2s46827+Warm+Springs+Blvd+%23102%2C+Fremont%2C+CA+94539%E7%BE%8E%E5%9B%BD!3m2!1d37.4885309!2d-121.9290346!5e0!3m2!1szh-CN!2scn!4v1505798349736",
			 	"pic":''},


				{"shopName":"Milpitas",
			   "shopaddress":"Address: 338 Barber Lane, Milpitas, CA 95035",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (408) 465-4777",
			     "mapd":"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=338+Barber+Lane,+Milpitas,+CA+9503&amp;aq=&amp;sll=33.99301,-117.933506&amp;sspn=0.007339,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=338+Barber+Ln,+Milpitas,+Santa+Clara,+California+95035&amp;t=m&amp;ll=37.43016,-121.913052&amp;spn=0.023855,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	'pic':""},
		
			   
			   	{"shopName":"Newark",
			   "shopaddress":"Address: 35219 Newark Blvd, Newark, CA 94560",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (510) 257-2686",
			     "mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.3098550767972!2d-122.04927698440041!3d37.54776293296011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbe50de2d2623%3A0xe1a15d9589f84ac8!2zMzUyMTkgTmV3YXJrIEJsdmQsIE5ld2FyaywgQ0EgOTQ1NjDnvo7lnIs!5e0!3m2!1szh-TW!2shk!4v1470290300223",
			 	"pic":''},

			   ],


			   
	"New York":[

				{"shopName":"Brooklyn",
			   "shopaddress":"Address: 5911 8th Avenue, Unit A, Brooklyn, NY 11220",
			   "shoptime":"Hours: Mon - Sun, 9:30am - 8:30pm",
			   "shopnum":"Tel: (718) 888-2122",
			     "mapd":"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=5809+8th+Avenue,+Unit+A,+Brooklyn,+NY+11220&amp;aq=&amp;sll=40.759284,-73.830988&amp;sspn=0.006412,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=5809+8th+Ave,+Brooklyn,+Kings,+New+York+11220&amp;t=m&amp;ll=40.642549,-74.004765&amp;spn=0.022795,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	"pic":[{'str':"../shared/images/shoppic/NYB1.jpg"},{'str':"../shared/images/shoppic/NYB2.jpg"},{'str':"../shared/images/shoppic/NYB3.jpg"}]},


				{"shopName":"NY Flagship Store",
			   "shopaddress":"Address: 42–35 Main Street, Unit 1E, Flushing, NY 11355",
			   "shoptime":"Hours: Mon - Sun, 9:30am - 8:30pm",
			   "shopnum":"Tel: (718) 888-0068",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=42%E2%80%9335+Main+Street,+Unit+1E,+Flushing,+NY+11355&amp;aq=&amp;sll=40.695215,-73.912102&amp;sspn=1.734618,3.56781&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=42-35+Main+St,+Flushing,+New+York+11355%E7%BE%8E%E5%9B%BD&amp;t=m&amp;ll=40.754409,-73.827868&amp;spn=0.022756,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	"pic":[{'str':"../shared/images/shoppic/NYF1.jpg"},{'str':"../shared/images/shoppic/NYF2.jpg"},{'str':"../shared/images/shoppic/NYF3.jpg"}]},
			   
			   	{"shopName":"Sky View",
			   "shopaddress":"Address: 40-24 College Point Blvd, level B, Flushing NY 11354",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (718) 888-2515",
			     "mapd":"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=4024+College+Point+Boulevard+Flushing,+NY+11354&amp;aq=&amp;sll=34.07862,-118.101893&amp;sspn=0.007011,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=40-24+College+Point+Blvd,+Queens,+New+York+11354&amp;t=m&amp;ll=40.764031,-73.830957&amp;spn=0.022753,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	"pic":[{'str':"../shared/images/shoppic/NYS1.jpg"},{'str':"../shared/images/shoppic/NYS2.jpg"}]},
			   
			   	{"shopName":"Main St, Flushing",
			   "shopaddress":"Address: 4182 Main St, Flushing, NY 11355",
			   "shoptime":"Hours: Mon - Sun, 9:30am - 6:30pm",
			   "shopnum":"Tel: (718) 888-0168",
			     "mapd":"http://ditu.google.cn/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=4182+Main+Street,+Flushing,+NY+11355&amp;aq=&amp;sll=39.90403,116.407526&amp;sspn=0.875426,1.783905&amp;brcurrent=3,0x0:0x0,0%3B5,0,0&amp;ie=UTF8&amp;hq=&amp;hnear=41-82+Main+St,+Queens,+New+York+11355%E7%BE%8E%E5%9B%BD&amp;t=m&amp;ll=40.761691,-73.825035&amp;spn=0.022754,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	"pic":[{'str':"../shared/images/shoppic/NYM1.jpg"},{'str':"../shared/images/shoppic/NYM2.jpg"}]},


			   ],

	"Texas":[

				{"shopName":"Dallas",
			   "shopaddress":"Address: 240 Legacy Dr #200, Plano, TX 75023",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (972) 830-98886",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m28!1m12!1m3!1d106994.82290739137!2d-96.76532755141315!3d33.06730632498255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x864c19c55ac35e63%3A0x34983b0fe24a7a47!2zMjQwIExlZ2FjeSBEciAjMjAwLCBQbGFubywgVFggNzUwMjPnvo7lm70!3m2!1d33.0673259!2d-96.69528679999999!4m5!1s0x864c19c55ac35e63%3A0x34983b0fe24a7a47!2zMjQwIExlZ2FjeSBEciAjMjAwLCBQbGFubywgVFggNzUwMjPnvo7lm70!3m2!1d33.0673259!2d-96.69528679999999!5e0!3m2!1szh-CN!2scn!4v1506393830500",
			 	"pic":''},

				{"shopName":"Houston",
			   "shopaddress":"Address: 9188 Bellaire Blvd., Suite Q, Houston, TX 77036",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (832) 203-6006",
			     "mapd":"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=zh-tw&amp;geocode=&amp;q=9188+Bellaire+Blvd.,+Suite+Q,+Houston,+TX+77036&amp;aq=&amp;sll=40.636289,-74.008383&amp;sspn=0.006424,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=9188+Bellaire+Blvd,+Houston,+Texas+77036&amp;t=m&amp;ll=29.712209,-95.541315&amp;spn=0.026091,0.057507&amp;z=14&amp;iwloc=A&amp;output=embed",
			 	"pic":''},
			   
			   	{"shopName":"Sugar Land",
			   "shopaddress":"Address: 4635 Highway 6, Sugar Land, TX 77478",
			   "shoptime":"Hours: Fri - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (832) 203-6006",
			     "mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.7213327167256!2d-95.58563528507567!3d29.582710382052696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e674daa026ed%3A0xb48d038943e8ea19!2s4635+Hwy+6%2C+Sugar+Land%2C+TX+77478!5e0!3m2!1sen!2sus!4v1494884539941",
			 	"pic":''},
			 ],

	"Georgia":[

				{"shopName":"Atlanta",
			   "shopaddress":"Address: 2300 Pleasant Hill Rd, Duluth, GA 30096",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (678) 508-5555",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3309.121038782852!2d-84.13653918446938!3d33.96372832983613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a30361bf70fd%3A0x221605f3e69a2974!2zMjMwMCBQbGVhc2FudCBIaWxsIFJkLCBEdWx1dGgsIEdBIDMwMDk2576O5Zu9!5e0!3m2!1szh-tw!2scn!4v1469168194362",
			 	"pic":''},
			   
			   	{"shopName":"Duluth",
			   "shopaddress":"Address: 3875 Venture Dr, S-2, Duluth, GA 30096",
			   "shoptime":"Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (770) 806-9999",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3309.5663937740155!2d-84.14365058446963!3d33.95227883043806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a30a6970d9bb%3A0xb98e626ccc6d5011!2zMzg3NSBWZW50dXJlIERyLCBEdWx1dGgsIEdBIDMwMDk2576O5Zu9!5e0!3m2!1szh-CN!2scn!4v1486516651527",
			 	"pic":''},


			   ],


	"Massachusetts":[

				{"shopName":"Boston",
			   "shopaddress":"Address:  President Plaza, 219 Quincy Ave, Quincy, MA 02169",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (617) 301-5118",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d2953.788846866718!2d-70.99434468429929!3d42.24032385064684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e36330b9493a75%3A0x2054502e1bc4a796!2sPresident+Plaza!5e0!3m2!1szh-tw!2scn!4v1469168238944",
			 	"pic":[{'str':"../shared/images/shoppic/B1.jpg"}]},
			   
			   ],

	"North Carolina":[

			 	{"shopName":"Raleigh",
			   "shopaddress":"Address: Grand Asia Market, 1253 Buck Jones Rd, Raleigh, NC 27606",
			   "shoptime":"Hours: Sat, 10:30am - 7:30pm; Sun, 10:30am - 6:00pm",
			   "shopnum":"Tel: (919) 522-0547",
			     "mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.392942166183!2d-78.74240534871409!3d35.76572288007737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf484c5d375fb%3A0xd7621cb7abb13be7!2s1253+Buck+Jones+Rd%2C+Raleigh%2C+NC+27606!5e0!3m2!1sen!2sus!4v1504655511623",
			 	"pic":''},
			   
			   ],

			}

function chaxun(){

	all();
	aac();

}

// 设置地图及图片大小



// end
// 全显示

function all(){
 		var as1 = eval("("+(data['DC Maryland and Virginia']).length+")");
 		var as2 = eval("("+(data['Georgia']).length+")");
 		var as3 = eval("("+(data['Massachusetts']).length+")");
 		var as4 = eval("("+(data['New York']).length+")");
 		var as5 = eval("("+(data['North Carolina']).length+")");
 		var as6 = eval("("+(data['North California']).length+")");
 		var as7 = eval("("+(data['South California']).length+")");
 		var as8 = eval("("+(data['Texas']).length+")");
 		


 	


 		for (i=0; i<as1; i++) {
 			var sp1 ="<div class='add'><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm'>"+data['DC Maryland and Virginia'][i].shopName+"</div><div class='address text18 mTitle26'>"+data['DC Maryland and Virginia'][i].shopaddress+"</div><div class='time text18 mTitle26'>"+data['DC Maryland and Virginia'][i].shoptime+"</div><div class='num text18 mTitle26'>"+data['DC Maryland and Virginia'][i].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['DC Maryland and Virginia'][i].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk1 = eval("("+(data['DC Maryland and Virginia'][i]['pic']).length+")");
 			$(".backgroundColor").append(sp1);
 
 			for(u=0;u<fk1;u++){
 				$('.pic').eq(i).append('<div class="pics"><img src="'+data['DC Maryland and Virginia'][i]['pic'][u]['str']+'" alt=""></div>');
 	 			
 	 		}	
 	 	};

 	 	for (nn=0; nn<as2; nn++) {
 	 		var sp2 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['Georgia'][nn].shopName+"</div><div class='address text18 mTitle26'>"+data['Georgia'][nn].shopaddress+"</div><div class='time text18 mTitle26'>"+data['Georgia'][nn].shoptime+"</div><div class='num text18 mTitle26'>"+data['Georgia'][nn].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['Georgia'][nn].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk2 = eval("("+(data['Georgia'][nn]['pic']).length+")");
 			$(".backgroundColor").append(sp2);
 			
 			for(un=0;un<fk2;un++){
 				$('.pic').eq(nn+as1).append('<div class="pics"><img src="'+data['Georgia'][nn]['pic'][un]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		};  


 		for (pp=0; pp<as3; pp++) {
 	 		var sp3 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['Massachusetts'][pp].shopName+"</div><div class='address text18 mTitle26'>"+data['Massachusetts'][pp].shopaddress+"</div><div class='time text18 mTitle26'>"+data['Massachusetts'][pp].shoptime+"</div><div class='num text18 mTitle26'>"+data['Massachusetts'][pp].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['Massachusetts'][pp].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk3 = eval("("+(data['Massachusetts'][pp]['pic']).length+")");
 			$(".backgroundColor").append(sp3);
 		
 			for(up=0;up<fk3;up++){
 				$('.pic').eq(pp+as1+as2).append('<div class="pics"><img src="'+data['Massachusetts'][pp]['pic'][up]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		};  

 		for (ll=0; ll<as4; ll++) {
 	 		var sp4 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['New York'][ll].shopName+"</div><div class='address text18 mTitle26'>"+data['New York'][ll].shopaddress+"</div><div class='time text18 mTitle26'>"+data['New York'][ll].shoptime+"</div><div class='num text18 mTitle26'>"+data['New York'][ll].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['New York'][ll].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk4 = eval("("+(data['New York'][ll]['pic']).length+")");
 			$(".backgroundColor").append(sp4);
 
 			for(ul=0;ul<fk4;ul++){
 				$('.pic').eq(ll+as1+as2+as3).append('<div class="pics"><img src="'+data['New York'][ll]['pic'][ul]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		};


 		for (oo=0; oo<as5; oo++) {
 	 		var sp5 ="<div class='add'><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['North Carolina'][oo].shopName+"</div><div class='address text18 mTitle26'>"+data['North Carolina'][oo].shopaddress+"</div><div class='time text18 mTitle26'>"+data['North Carolina'][oo].shoptime+"</div><div class='num text18 mTitle26'>"+data['North Carolina'][oo].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['North Carolina'][oo].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk5 = eval("("+(data['North Carolina'][oo]['pic']).length+")");
 			$(".backgroundColor").append(sp5);
 
 			for(uo=0;uo<fk5;uo++){
 				$('.pic').eq(oo+as1+as2+as3+as4).append('<div class="pics"><img src="'+data['North Carolina'][oo]['pic'][uo]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		}; 


 		for (kk=0; kk<as6; kk++) {
 	 		var sp6 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['North California'][kk].shopName+"</div><div class='address text18 mTitle26'>"+data['North California'][kk].shopaddress+"</div><div class='time text18 mTitle26'>"+data['North California'][kk].shoptime+"</div><div class='num text18 mTitle26'>"+data['North California'][kk].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['North California'][kk].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk6 = eval("("+(data['North California'][kk]['pic']).length+")");
 			$(".backgroundColor").append(sp6);

 			for(uk=0;uk<fk6;uk++){
 				$('.pic').eq(kk+as1+as2+as3+as4+as5).append('<div class="pics"><img src="'+data['North California'][kk]['pic'][uk]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		}; 

 	 	for (j=0; j<as7; j++) {
 	 		var sp7 ="<div class='add'><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['South California'][j].shopName+"</div><div class='address text18 mTitle26'>"+data['South California'][j].shopaddress+"</div><div class='time text18 mTitle26'>"+data['South California'][j].shoptime+"</div><div class='num text18 mTitle26'>"+data['South California'][j].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['South California'][j].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk7 = eval("("+(data['South California'][j]['pic']).length+")");
 	
 			$(".backgroundColor").append(sp7);
 
 			for(uj=0;uj<fk7;uj++){
 				$('.pic').eq(j+as1+as2+as3+as4+as5+as6).append('<div class="pics"><img src="'+data['South California'][j]['pic'][uj]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		}; 


 		for (mm=0; mm<as8; mm++) {
 	 		var sp8 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['Texas'][mm].shopName+"</div><div class='address text18 mTitle26'>"+data['Texas'][mm].shopaddress+"</div><div class='time text18 mTitle26'>"+data['Texas'][mm].shoptime+"</div><div class='num text18 mTitle26'>"+data['Texas'][mm].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['Texas'][mm].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk8 = eval("("+(data['Texas'][mm]['pic']).length+")");
 			$(".backgroundColor").append(sp8);

 			for(um=0;um<fk8;um++){
 				$('.pic').eq(mm+as1+as2+as3+as4+as5+as6+as7).append('<div class="pics"><img src="'+data['Texas'][mm]['pic'][um]['str']+'" alt=""></div>');
 	 		
 	 		}	
 		};  


 		var num = $('.add').length;
 		console.log(num);
 		for(qq=0;qq<num;qq++){
 				if(qq%2==1){
 					$('.add').eq(qq).addClass('white');
 				}
 		}

}



// 获取value值 半显示
 $("#sel").bind('input propertychange',function(){
 		var k = $('#sel option:selected').val();
 	

 		$('.backgroundColor').children().remove();
 		if(k=='all'){
 			chaxun();
 		}else{
 			var l = eval("("+(data[k]).length+")");
 			for ( i=0;i<l;i++){
			var sp ="<div class='add white'><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data[k][i].shopName+"</div><div class='address text18 mTitle26'>"+data[k][i].shopaddress+"</div><div class='time text18 mTitle26'>"+data[k][i].shoptime+"</div><div class='num text18 mTitle26'>"+data[k][i].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data[k][i].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
			var sps = "<div class='add'><div class='shops'><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data[k][i].shopName+"</div><div class='address text18 mTitle26'>"+data[k][i].shopaddress+"</div><div class='time text18 mTitle26'>"+data[k][i].shoptime+"</div><div class='num text18 mTitle26'>"+data[k][i].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data[k][i].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
			if (i%2==1) {
				$(".backgroundColor").append(sp);
			}else{$(".backgroundColor").append(sps)};

			var fk = eval("("+(data[k][i]['pic']).length+")");
 			for(u=0;u<fk;u++){
 				$('.pic').eq(i).append('<div class="pics"><img src="'+data[k][i]['pic'][u]['str']+'" alt=""></div>');
 	 		
 	 		}
 	 		} 
 		}
 		aac();

 }); 





function aac () {
var arr = new Array();
var ppp;
 $('.overlay').click(function(){
 		$('.allshow').css('display','none');
 		arr.length = 0; 
 })

 $('.pics').click(function(){
 	$('.allshow').css('display','block');
 	arr.length = 0; 
 	sss=$(this).children().attr("src");
 	$(".bigshows").attr("src",sss);
 	lll = $(this).parent().find('.pics').children();
 	kkk = $(this).parent().find('.pics').children().length;
 	$(lll).each(function(){
 				arr.push($(this).attr('src'));
 	});
 	ppp=$(this).index();
 })

  	$('.up').click(function (){
 			if(ppp<kkk-1){
 				ppp++;
 			}else{ppp=0}
 			$(".bigshows").attr("src",arr[ppp]);
 	})

 	$('.next').click(function (){
 			if(ppp<=0){
 				ppp=kkk-1;
 			}else{ppp--}
 			$(".bigshows").attr("src",arr[ppp]);
 	})

}


