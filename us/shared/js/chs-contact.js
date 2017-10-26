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
			    "shopaddress":"Address: <span class='pin'>大中华超市内</span><br> 2982 Gallows Rd, Falls Church, VA 22042",
			    "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			    "shopnum":"Tel: (703) 333-3433",
				"mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3106.3467038910862!2d-77.23093068508578!3d38.87030885614636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b6354229161%3A0x93adae5199009956!2zMjk4MiBHYWxsb3dzIFJkLCBGYWxscyBDaHVyY2gsIFZBIDIyMDQy576O5Zu9!5e0!3m2!1szh-TW!2scn!4v1465871570673",
				'pic':""},

     			{"shopName":"Rockville",
				"shopaddress":"Address: <span class='pin'>大中华超市内</span><br>  700 Hungerford Dr, Rockville, MD 20850",
				"shoptime":"Hours: Mon - Sun, 9:30am - 6:30pm",
				"shopnum":"Tel: (301) 880-1268",
				"mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.588859883134!2d-77.15635798436847!3d39.093061742991466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd774b600ffb%3A0x9e25622abbc5d85!2zNzAwIEh1bmdlcmZvcmQgRHIsIFJvY2t2aWxsZSwgTUQgMjA4NTDnvo7lnIs!5e0!3m2!1szh-TW!2shk!4v1463034050430",
				'pic':""},
	   
			   ],

	"South California":[

				{"shopName":"Arcadia",
			   "shopaddress":"Address: <span class='pin'>亚凯迪亚市统领广场，99大华超市旁</span><br>  1232 S Golden West Ave., Arcadia, CA 91007",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:30pm",
			   "shopnum":"Tel: (626) 513-0800",
			   "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3302.839541864705!2d-118.06226668457619!3d34.12485737134702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2dba60cd4c111%3A0xfba0cd50ec490229!2zMTIzMiBTIEdvbGRlbiBXIEF2ZSwgQXJjYWRpYSwgQ0EgOTEwMDfnvo7lm70!5e0!3m2!1szh-CN!2scn!4v1506488027209",
				"pic":[{'str':"../shared/images/contact/ArcadiaStores1.jpg"},{'str':"../shared/images/contact/ArcadiaStores2.jpg"},{'str':"../shared/images/contact/ArcadiaStores3.jpg"}]},

				{"shopName":"Hacienda Heights",
			   "shopaddress":"Address: <span class='pin'>哈岗99大华超市内</span> <br> 1625 S Azusa Ave, Hacienda Heights, CA 91745",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (626) 283-4899",
			     "mapd":"http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=1625+S+Azusa+Ave,+Hacienda+Heights,+CA+9174&aq=&sll=33.996782,-117.890768&sspn=0.007338,0.013937&ie=UTF8&hq=&hnear=1625+S+Azusa+Ave,+Hacienda+Heights,+Los+Angeles,+California+91745&t=m&ll=33.999877,-117.929134&spn=0.024905,0.057507&z=14&iwloc=A&output=embed",
			 	"pic":''},


			 	{"shopName":"Irvine",
			   "shopaddress":"Address: <span class='pin'>尔湾市99大华超市广场（老字号旁）</span> <br> 5414-D Walnut Ave, Irvine, CA 92604",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (949) 207-6825",
			     "mapd":"https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=5414-D+Walnut+Ave.,+Irvine,+CA++92604&aq=&sll=37.0625,-95.677068&sspn=52.020054,114.169922&ie=UTF8&hq=&hnear=5414+Walnut+Ave,+Irvine,+Orange,+California+92604&t=m&ll=33.697922,-117.767429&spn=0.024993,0.057507&z=14&iwloc=A&output=embed",
			 	"pic":[{'str':"../shared/images/contact/IrvineStores1.jpg"},{'str':"../shared/images/contact/IrvineStores2.jpg"},{'str':"../shared/images/contact/IrvineStores3.jpg"}]},


			    {"shopName":"Monterey Park",
			   "shopaddress":"Address: <span class='pin'>Atlantic时代广场内</span><br>  500 N Atlantic Blvd #163, Monterey Park, CA 91754",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (626) 500-1886",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3305.001456357596!2d-118.13615178446753!3d34.0694769242686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c54221b58e8b%3A0xe5bd465fb23d485e!2s500+N+Atlantic+Blvd+%23163%2C+Monterey+Park%2C+CA+91754%E7%BE%8E%E5%9B%BD!5e0!3m2!1shl=en!2scn!4v1484122416976",
			 	"pic":[{'str':"../shared/images/contact/MontereyParkStores1.jpg"},{'str':"../shared/images/contact/MontereyParkStores2.jpg"},{'str':"../shared/images/contact/MontereyParkStores3.jpg"}]},


			 	{"shopName":"Rowland Heights",
			   "shopaddress":"Address: <span class='pin'>罗兰岗99大华超市广场内</span><br>1015 Nogales St. #113, Rowland Heights, CA 91748",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:30pm",
			   "shopnum":"Tel: (626) 593-5866",
			     "mapd":"http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=1015+Nogales+St.+%23113B,+Rowland+Heights,+CA+91748&aq=&sll=34.123873,-118.059262&sspn=0.007327,0.013937&ie=UTF8&hq=&hnear=1015+Nogales+St,+Rowland+Heights,+Los+Angeles,+California+91748&t=m&ll=34.015388,-117.878323&spn=0.049801,0.115013&z=13&iwloc=A&output=embed",
			 	"pic":[{'str':"../shared/images/contact/RowlandHeightsStores1.jpg"},{'str':"../shared/images/contact/RowlandHeightsStores2.jpg"},{'str':"../shared/images/contact/RowlandHeightsStores3.jpg"}]},
			   

			 	{"shopName":"San Diego",
			   "shopaddress":"Address: <span class='pin'>大华超市內</span> <br> 5950 Balboa Ave. # 103, San Diego, CA 92111",
			   "shoptime":"Hours: Mon - Sun, 10:00am - 7:30pm",
			   "shopnum":"Tel: (619) 309-2199",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3352.8952218988443!2d-117.17914268448982!3d32.82154108902036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc00768f0cbf47%3A0x2bbac043ebbdef9e!2zNTk1MCBCYWxib2EgQXZlICMxMDMsIFNhbiBEaWVnbywgQ0EgOTIxMTHnvo7lm70!5e0!3m2!1shl=en!2scn!4v1478050485087",
			 	"pic":''},


				{"shopName":"San Gabriel",
				"shopaddress":"Address: <span class='pin'> 圣盖博市全统广场（Valley入口喷泉旁，位于1楼，面对停车场）</span><br>  140 West Valley Blvd #118D, San Gabriel, CA 91776",
				"shoptime":"Hours: Mon - Sun, 11:00am - 7:30pm",
				"shopnum":"Tel: (626) 288-9088",
				"mapd":"http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=ITalkBB+San+Gabriel+Store&aq=&sll=37.0625,-95.677068&sspn=54.269804,114.169922&ie=UTF8&hq=ITalkBB+San+Gabriel+Store&hnear=&t=m&cid=1269294396470645711&ll=34.099154,-118.087749&spn=0.049752,0.115013&z=13&iwloc=A&output=embed",
				'pic':[{'str':"../shared/images/contact/SanGabrielStores1.jpg"},{'str':"../shared/images/contact/SanGabrielStores2.jpg"},{'str':"../shared/images/contact/SanGabrielStores3.jpg"}]},



			   ],


			   

	"North California":[

				{"shopName":"Fremont",
			   "shopaddress":"Address: <span class='pin'>费利蒙市小台北广场</span><br>  46827 Warm Springs Blvd #102, Fremont, CA 94539",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (510) 488-6798",
			     "mapd":"http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=46827+Warm+Springs+Blvd.+Ste.+102,+Fremont,+CA+94539&aq=&sll=29.705026,-95.54475&sspn=0.007353,0.013937&ie=UTF8&hq=&hnear=46827+Warm+Springs+Blvd+%23102,+Fremont,+California+94539&t=m&ll=37.495086,-121.925583&spn=0.023834,0.057507&z=14&iwloc=A&output=embed",
			 	"pic":''},


				{"shopName":"Milpitas",
			   "shopaddress":"Address: <span class='pin'>苗必达市环球广场，99大华超市内</span> <br> 338 Barber Lane, Milpitas, CA 95035",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (408) 465-4777",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d792.1528579288724!2d-121.9172165797063!3d37.4226582266858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc926c96f15df%3A0xffcae1247a9cc7da!2zMzM4IEJhcmJlciBMbiwgTWlscGl0YXMsIENBIDk1MDM1576O5Zu9!5e0!3m2!1szh-CN!2scn!4v1506487901499",
			 	'pic':""},
		
			   
			   	{"shopName":"Newark",
			   "shopaddress":"Address: <span class='pin'>99大华超市店内</span><br>  35219 Newark Blvd, Newark, CA 94560",
			   "shoptime":"Hours: Mon - Sun, 11:00am - 7:00pm",
			   "shopnum":"Tel: (510) 257-2686",
			     "mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.3098550767972!2d-122.04927698440041!3d37.54776293296011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbe50de2d2623%3A0xe1a15d9589f84ac8!2zMzUyMTkgTmV3YXJrIEJsdmQsIE5ld2FyaywgQ0EgOTQ1NjDnvo7lnIs!5e0!3m2!1sen!2shk!4v1470290300223",
			 	"pic":''},

			   ],


			   
	"New York":[

				{"shopName":"Brooklyn",
			   "shopaddress":"Address: <span class='pin'>布鲁克林第八大道</span> <br> 5911 8th Avenue, Unit A, Brooklyn, NY 11220",
			   "shoptime":"Hours: Mon - Sun, 9:30am - 8:30pm",
			   "shopnum":"Tel: (718) 888-2122",
			     "mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.740098046677!2d-74.01141704892692!3d40.635613350120536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2454a38a8e8c1%3A0xd0a74008ea54e6f6!2siTalkBB!5e0!3m2!1sen!2sus!4v1506441624265",
			 	"pic":[{'str':"../shared/images/contact/BrooklynStores1.jpg"},{'str':"../shared/images/contact/BrooklynStores2.jpg"},{'str':"../shared/images/contact/BrooklynStores3.jpg"}]},


				{"shopName":"NY Flagship Store",
			   "shopaddress":"Address: <span class='pin'>法拉盛缅街（中国银行旁）</span><br>  42-35 Main Street, Unit 1E, Flushing, NY 11355",
			   "shoptime":"Hours: Mon - Sun, 9:30am - 8:30pm",
			   "shopnum":"Tel: (718) 888-0068",
			     "mapd":"http://ditu.google.cn/maps?f=q&source=s_q&hl=en&geocode=&q=42%E2%80%9335+Main+Street,+Unit+1E,+Flushing,+NY+11355&aq=&sll=40.695215,-73.912102&sspn=1.734618,3.56781&brcurrent=3,0x0:0x0,0%3B5,0,0&ie=UTF8&hq=&hnear=42-35+Main+St,+Flushing,+New+York+11355%E7%BE%8E%E5%9B%BD&t=m&ll=40.754409,-73.827868&spn=0.022756,0.057507&z=14&iwloc=A&output=embed",
			 	"pic":[{'str':"../shared/images/contact/NYFlagshipStore1.jpg"},{'str':"../shared/images/contact/NYFlagshipStore2.jpg"},{'str':"../shared/images/contact/NYFlagshipStore3.jpg"}]},
			   
			   	{"shopName":"Sky View",
			   "shopaddress":"Address: <span class='pin'>Sky View 地下一层昌发超市内</span> <br> 40-24 College Point Blvd, level B, Flushing NY 11354",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (718) 888-2515",
			     "mapd":"http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=4024+College+Point+Boulevard+Flushing,+NY+11354&aq=&sll=34.07862,-118.101893&sspn=0.007011,0.013937&ie=UTF8&hq=&hnear=40-24+College+Point+Blvd,+Queens,+New+York+11354&t=m&ll=40.764031,-73.830957&spn=0.022753,0.057507&z=14&iwloc=A&output=embed",
			 	"pic":[{'str':"../shared/images/contact/SkyViewStores1.jpg"},{'str':"../shared/images/contact/SkyViewStores2.jpg"}]},
			   
			   	{"shopName":"Main St, Flushing",
			   "shopaddress":"Address: <span class='pin'>法拉盛缅街昌发超市内</span> <br> 41-82 Main St, Flushing, NY 11355",
			   "shoptime":"Hours: Mon - Sun, 9:30am - 6:30pm",
			   "shopnum":"Tel: (718) 888-0168",
			     "mapd":"http://ditu.google.cn/maps?f=q&source=s_q&hl=en&geocode=&q=4182+Main+Street,+Flushing,+NY+11355&aq=&sll=39.90403,116.407526&sspn=0.875426,1.783905&brcurrent=3,0x0:0x0,0%3B5,0,0&ie=UTF8&hq=&hnear=41-82+Main+St,+Queens,+New+York+11355%E7%BE%8E%E5%9B%BD&t=m&ll=40.761691,-73.825035&spn=0.022754,0.057507&z=14&iwloc=A&output=embed",
			 	"pic":[{'str':"../shared/images/contact/MainStFlushingStores1.jpg"},{'str':"../shared/images/contact/MainStFlushingStores2.jpg"}]},


			   ],

	"Texas":[

				{"shopName":"Dallas",
			   "shopaddress":"Address: <span class='pin'>百佳超市内</span> <br> 240 Legacy Dr #200, Plano, TX 75023",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (972) 830-98886",
			     "mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.587302029888!2d-96.69748084909513!3d33.0673303763389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19c55ac35e63%3A0x34983b0fe24a7a47!2s240+Legacy+Dr+%23200%2C+Plano%2C+TX+75023!5e0!3m2!1sen!2sus!4v1506441498154",
			 	"pic":''},

				{"shopName":"Houston",
			   "shopaddress":"Address: <span class='pin'>休士顿市百利大道（惠康超市对面）</span> <br> 9188 Bellaire Blvd., Suite Q, Houston, TX 77036",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (832) 203-6006",
			     "mapd":"http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=9188+Bellaire+Blvd.,+Suite+Q,+Houston,+TX+77036&aq=&sll=40.636289,-74.008383&sspn=0.006424,0.013937&ie=UTF8&hq=&hnear=9188+Bellaire+Blvd,+Houston,+Texas+77036&t=m&ll=29.712209,-95.541315&spn=0.026091,0.057507&z=14&iwloc=A&output=embed",
			 	"pic":''},
			   
			   	{"shopName":"Sugar Land",
			   "shopaddress":"Address: <span class='pin'>家乐超市內</span><br>  4635 Highway 6, Sugar Land, TX 77478",
			   "shoptime":"Hours: Fri - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (832) 203-6006",
			     "mapd":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.7213327167256!2d-95.58563528507567!3d29.582710382052696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e674daa026ed%3A0xb48d038943e8ea19!2s4635+Hwy+6%2C+Sugar+Land%2C+TX+77478!5e0!3m2!1sen!2sus!4v1494884539941",
			 	"pic":''},
			 ],

	"Georgia":[

				{"shopName":"Atlanta",
			   "shopaddress":"Address: <span class='pin'>大中华超市内</span> <br> 2300 Pleasant Hill Rd, Duluth, GA 30096",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (678) 508-5555",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3309.121038782852!2d-84.13653918446938!3d33.96372832983613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a30361bf70fd%3A0x221605f3e69a2974!2zMjMwMCBQbGVhc2FudCBIaWxsIFJkLCBEdWx1dGgsIEdBIDMwMDk2576O5Zu9!5e0!3m2!1sen!2scn!4v1469168194362",
			 	"pic":''},
			   
			   	{"shopName":"Duluth",
			   "shopaddress":"Address: <span class='pin'>百佳超市内</span> <br> 3875 Venture Dr, S-2, Duluth, GA 30096",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (770) 806-9999",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3309.5663937740155!2d-84.14365058446963!3d33.95227883043806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a30a6970d9bb%3A0xb98e626ccc6d5011!2zMzg3NSBWZW50dXJlIERyLCBEdWx1dGgsIEdBIDMwMDk2576O5Zu9!5e0!3m2!1szh-CN!2scn!4v1486516651527",
			 	"pic":''},


			   ],


	"Massachusetts":[

				{"shopName":"Boston",
			   "shopaddress":"Address: <span class='pin'>金门超市内</span><br>  President Plaza, 219 Quincy Ave, Quincy, MA 02169",
			   "shoptime":"Hours: Mon - Sun, 10:30am - 7:30pm",
			   "shopnum":"Tel: (617) 301-5118",
			     "mapd":"http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d2953.788846866718!2d-70.99434468429929!3d42.24032385064684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e36330b9493a75%3A0x2054502e1bc4a796!2sPresident+Plaza!5e0!3m2!1szh-tw!2scn!4v1469168238944",
			 	"pic":[{'str':"../shared/images/contact/BostonStores.jpg"}]},
			   
			   ],

	"North Carolina":[

			 	{"shopName":"Raleigh",
			   "shopaddress":"Address: <span class='pin'>大亚洲超市内</span><br>  Grand Asia Market, 1253 Buck Jones Rd, Raleigh, NC 27606",
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
 		var dc = '<div class="zhou title36 mTitle44 fwb">DC Maryland and Virginia</div>'
 		var sc = '<div class="zhou title36 mTitle44 fwb" style="background:#ffffff">South California</div>'
 		var ncf = '<div class="zhou title36 mTitle44 fwb" >North California</div>'
 		var ny = '<div class="zhou title36 mTitle44 fwb" style="background:#ffffff">New York</div>'
 		var te = '<div class="zhou title36 mTitle44 fwb" >Texas</div>'
 		var ge = '<div class="zhou title36 mTitle44 fwb">Georgia</div>'
 		var ma = '<div class="zhou title36 mTitle44 fwb" >Massachusetts</div>'
		var ncl = '<div class="zhou title36 mTitle44 fwb" style="background:white">North Carolina</div>'
 		


 	

 		$(".backgroundColor").append(dc);

 		for (i=0; i<as1; i++) {
 			var sp1 ="<div class='add'><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm'>"+data['DC Maryland and Virginia'][i].shopName+"</div><div class='address text18 mTitle26'>"+data['DC Maryland and Virginia'][i].shopaddress+"</div><div class='time text18 mTitle26'>"+data['DC Maryland and Virginia'][i].shoptime+"</div><div class='num text18 mTitle26'>"+data['DC Maryland and Virginia'][i].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['DC Maryland and Virginia'][i].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk1 = eval("("+(data['DC Maryland and Virginia'][i]['pic']).length+")");
 			$(".backgroundColor").append(sp1);
 
 			for(u=0;u<fk1;u++){
 				$('.pic').eq(i).append('<div class="pics"><img src="'+data['DC Maryland and Virginia'][i]['pic'][u]['str']+'" alt=""></div>');
 	 			
 	 		}	
 	 	};


 	 	$(".backgroundColor").append(ge);

 	 	for (nn=0; nn<as2; nn++) {
 	 		var sp2 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['Georgia'][nn].shopName+"</div><div class='address text18 mTitle26'>"+data['Georgia'][nn].shopaddress+"</div><div class='time text18 mTitle26'>"+data['Georgia'][nn].shoptime+"</div><div class='num text18 mTitle26'>"+data['Georgia'][nn].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['Georgia'][nn].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk2 = eval("("+(data['Georgia'][nn]['pic']).length+")");
 			$(".backgroundColor").append(sp2);
 			
 			for(un=0;un<fk2;un++){
 				$('.pic').eq(nn+as1).append('<div class="pics"><img src="'+data['Georgia'][nn]['pic'][un]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		};  


 	 	$(".backgroundColor").append(ma);

 		for (pp=0; pp<as3; pp++) {
 	 		var sp3 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['Massachusetts'][pp].shopName+"</div><div class='address text18 mTitle26'>"+data['Massachusetts'][pp].shopaddress+"</div><div class='time text18 mTitle26'>"+data['Massachusetts'][pp].shoptime+"</div><div class='num text18 mTitle26'>"+data['Massachusetts'][pp].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['Massachusetts'][pp].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk3 = eval("("+(data['Massachusetts'][pp]['pic']).length+")");
 			$(".backgroundColor").append(sp3);
 		
 			for(up=0;up<fk3;up++){
 				$('.pic').eq(pp+as1+as2).append('<div class="pics"><img src="'+data['Massachusetts'][pp]['pic'][up]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		};  

 		$(".backgroundColor").append(ny);

 		for (ll=0; ll<as4; ll++) {
 	 		var sp4 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['New York'][ll].shopName+"</div><div class='address text18 mTitle26'>"+data['New York'][ll].shopaddress+"</div><div class='time text18 mTitle26'>"+data['New York'][ll].shoptime+"</div><div class='num text18 mTitle26'>"+data['New York'][ll].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['New York'][ll].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk4 = eval("("+(data['New York'][ll]['pic']).length+")");
 			$(".backgroundColor").append(sp4);
 
 			for(ul=0;ul<fk4;ul++){
 				$('.pic').eq(ll+as1+as2+as3).append('<div class="pics"><img src="'+data['New York'][ll]['pic'][ul]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		};

 		$(".backgroundColor").append(ncl);

 		for (oo=0; oo<as5; oo++) {
 	 		var sp5 ="<div class='add'><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['North Carolina'][oo].shopName+"</div><div class='address text18 mTitle26'>"+data['North Carolina'][oo].shopaddress+"</div><div class='time text18 mTitle26'>"+data['North Carolina'][oo].shoptime+"</div><div class='num text18 mTitle26'>"+data['North Carolina'][oo].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['North Carolina'][oo].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk5 = eval("("+(data['North Carolina'][oo]['pic']).length+")");
 			$(".backgroundColor").append(sp5);
 
 			for(uo=0;uo<fk5;uo++){
 				$('.pic').eq(oo+as1+as2+as3+as4).append('<div class="pics"><img src="'+data['North Carolina'][oo]['pic'][uo]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		}; 

 		$(".backgroundColor").append(ncf);

 		for (kk=0; kk<as6; kk++) {
 	 		var sp6 ="<div class='add '><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['North California'][kk].shopName+"</div><div class='address text18 mTitle26'>"+data['North California'][kk].shopaddress+"</div><div class='time text18 mTitle26'>"+data['North California'][kk].shoptime+"</div><div class='num text18 mTitle26'>"+data['North California'][kk].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['North California'][kk].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk6 = eval("("+(data['North California'][kk]['pic']).length+")");
 			$(".backgroundColor").append(sp6);

 			for(uk=0;uk<fk6;uk++){
 				$('.pic').eq(kk+as1+as2+as3+as4+as5).append('<div class="pics"><img src="'+data['North California'][kk]['pic'][uk]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		}; 

 		$(".backgroundColor").append(sc);

 	 	for (j=0; j<as7; j++) {
 	 		var sp7 ="<div class='add'><div class='shops '><div class='shopx'><div class='shopname title30 mTitle38 titleMgnBtm''>"+data['South California'][j].shopName+"</div><div class='address text18 mTitle26'>"+data['South California'][j].shopaddress+"</div><div class='time text18 mTitle26'>"+data['South California'][j].shoptime+"</div><div class='num text18 mTitle26'>"+data['South California'][j].shopnum+"</div><div class='pic'></div></div><div class='map'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='"+data['South California'][j].mapd+"'></iframe></div><div class='clear clearfix'></div></div></div>";
 			var fk7 = eval("("+(data['South California'][j]['pic']).length+")");
 	
 			$(".backgroundColor").append(sp7);
 
 			for(uj=0;uj<fk7;uj++){
 				$('.pic').eq(j+as1+as2+as3+as4+as5+as6).append('<div class="pics"><img src="'+data['South California'][j]['pic'][uj]['str']+'" alt=""></div>');
 	 			
 	 		}	
 		}; 

 		$(".backgroundColor").append(te);

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


