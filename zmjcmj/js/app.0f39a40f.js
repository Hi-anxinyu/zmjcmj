(function(e){function t(t){for(var a,o,i=t[0],s=t[1],p=t[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("5c0b"),n("2877")),i={},s=Object(o["a"])(i,c,r,!1,null,null,null),p=s.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));n("bb51");a["a"].use(u["a"]);var m=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}}],d=new u["a"]({mode:"hash",base:"/h5/m5/mxyh",routes:m}),l=d,f=n("2f62");a["a"].use(f["a"]);var y=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=(n("66b9"),n("b650")),g=(n("e7e5"),n("d399")),v=(n("c3a6"),n("ad06"));a["a"].use(h["a"]).use(g["a"]).use(v["a"]),a["a"].config.productionTip=!1,new a["a"]({router:l,store:y,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6209:function(e,t,n){"use strict";n("ac27")},"9c0c":function(e,t,n){},ac27:function(e,t,n){},bb51:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home_wrapper"},[n("section",[n("div",{staticClass:"block"}),n("div",{staticClass:"bc"},[e._m(0),e._l(e.dataSource,(function(t){return n("div",{key:t.pcName,staticClass:"police"},[n("div",{staticClass:"top"},[n("p",{staticClass:"pname"},[e._v(e._s(t.pcName))]),n("div",{staticClass:"center"},[n("span",{style:[{position:"relative",left:t.num/e.allNum*100+"%"}]},[e._v(" "+e._s(t.num)+"票 ")]),n("div",{staticClass:"progress"},[n("div",{staticClass:"schedule",style:[e.allNum>0?{width:t.num/e.allNum*100+"%"}:{width:"0%"}]})])]),n("van-icon",{staticClass:"icon",attrs:{name:"good-job",size:24,color:e.flag?"#ccc":"#9c1010"},on:{click:function(n){return e.onClickHand(t.pcId)}}})],1),n("dl",[n("dt",[e._v(e._s(t.post))]),n("dd",[e._v(e._s(t.company))])])])}))],2)]),n("footer",[e._v("技术支持：芯言科技")])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rule"},[n("h4",{staticClass:"title"},[e._v("点赞说明")]),n("p",{staticClass:"time"},[e._v("点赞时间：12月25日9:00-12月26日18:00")]),n("p",[e._v("点赞规则：")]),n("p",[e._v("1. 点赞期间，每名用户仅有一次点赞机会，不可重复点赞；")]),n("p",[e._v(" 2. 为防止违规操作，点赞用户需下载新华社客户端，成功注册后进行点赞。 ")])])}],r=n("5530"),o=n("1da1"),i=(n("d3b7"),n("e9c4"),n("4e82"),n("d81d"),n("96cf"),n("d629")),s=n("bc3a"),p=n.n(s);p.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),p.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var u=p.a,m="https://xinyan.xinhuaxmt.com/zmjcmj",d=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(m,"/leaderboard"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(m,"/vote_record?account=").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t,"params.................."),e.next=3,u({headers:{"Content-Type":"application/json"},method:"POST",url:"".concat(m,"/vote"),data:Object(r["a"])({},t)});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=(n("ac1f"),n("466d"),n("1276"),n("fb6a"),n("5319"),{android:"https://a.app.qq.com/o/simple.jsp?pkgname=net.xinhuamm.mainclient",ios:"https://a.app.qq.com/o/simple.jsp?pkgname=net.xinhuamm.mainclient"}),h=n("1157");function g(e,t){h.ajax({url:e+"activity/num/getNum",type:"POST",data:JSON.stringify({secretKey:"e9469538b0623783f38c585821459454",nm:t}),dataType:"json",contentType:"application/json",success:function(e){if(e=JSON.parse(e),e&&e.data&&e.data.num>0)e.data.num;else console.log(e&&e.msg)}})}function v(e,t,n){h.ajax({url:n+"activity/num/updateNum",type:"POST",data:JSON.stringify({secretKey:"e9469538b0623783f38c585821459454",nm:e,ip:""}),xhrFields:{withCredentials:!0},dataType:"json",contentType:"application/json",success:function(e){e=JSON.parse(e),e&&e.data&&""!=t&&navigator.userAgent.indexOf("XinhuasheBrower")>-1&&(location.href=t)}})}var x=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";var n=document.getSelection(),a=!1;n.rangeCount>0&&(a=n.getRangeAt(0)),document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(e){}return document.body.removeChild(t),a&&(n.removeAllRanges(),n.addRange(a)),c};function b(e){var t=e.match(/appVersion:\d+\.\d+\.\d+/),n=t&&t[0];return n?n.split(":")[1]:""}var N=function(){var e=navigator.userAgent,t=b(e);return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1===e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1===e.indexOf("Safari"),weixin:e.match(/micromessenger/i),appVersion:t,xyapp:e.indexOf("XinhuasheBrower")>-1,qq:e.indexOf("QQ/")>-1,qqBrowser:e.indexOf("MQQBrowser")>-1,wechat:e.indexOf("MicroMessenger/")>-1}}(),I=function(e){if("object"==h.type(e)){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t.slice(0,t.length-1)}},O=function(e,t){var n="xhpfm://"+e+(t?"/?"+I(t):""),a="https://d.xinhuaxmt.com",c=window.navigator.userAgent.toLocaleLowerCase(),r=!!c.indexOf("micromessenger")>-1;if(x(n),N.ios||N.iphone||N.iPad){var o=c.indexOf("os "),i=+c.substr(o+3,3).replace("_",".");return i>=9?a+"?url=xhpfm://"+e+(t?"/?"+I(t):""):r?y.ios+"&ios_schema="+encodeURIComponent("xhpfm://"+e+(t?"/?"+I(t):"")):a+"?url=xhpfm://"+e+(t?"/?"+I(t):"")}return N.android,y.android+"&android_schema="+encodeURIComponent("xhpfm://"+e+(t?"/?"+I(t):""))};function w(e,t,n,a){if(navigator.userAgent.indexOf("XinhuasheBrower")>-1)return S(t,n,a);location.href=O("light",{id:"",newstype:1004,link:e,title:t})}function S(e,t,n){var a,c="";window.xyJSBridgeIn={},window.xyJSBridgeIn.postUserInfo=function(t){console.log("用户信息:"+t),console.log(JSON.stringify(t)),localStorage.setItem("userInfo",JSON.stringify(t));var r=t.data||t,o=r.openId;r.isRegister;a=o,console.log("当前openid是:"+a);t.isRegister?c="nickName="+t.nickName+"&avatar="+t.uiHeadImage:t.data&&t.data.isRegister&&(c="nickName="+t.data.nickName+"&avatar="+t.data.uiHeadImage);var i=!1;1==t.isRegister?(i=!0,t.openId):t.data&&1==t.data.isRegister&&(i=!0,t.data.openId),i&&h.ajax({url:n+"activity/num/updateNum",type:"POST",data:JSON.stringify({secretKey:"e9469538b0623783f38c585821459454",nm:e,ip:returnCitySN&&returnCitySN["cip"]||""}),dataType:"json",contentType:"application/json",success:function(e){e=JSON.parse(e)}}),""!=e?j(e,"?"+c):location.href="?"+c,console.log("str"+c)},window.xyJSBridge&&window.xyJSBridge.getUserInfo(JSON.stringify({appKey:t}))}var j=function(e,t,n,a){h.ajax({url:"https://activity.xhsxmt.com/activity/num/updateNum",type:"POST",data:JSON.stringify({secretKey:a,nm:e,ip:""}),xhrFields:{withCredentials:!0},dataType:"json",contentType:"application/json",success:function(e){e=JSON.parse(e),e&&e.data&&""!=t&&navigator.userAgent.indexOf("XinhuasheBrower")>-1&&(location.href=t)}})},_={data:function(){return{dataSource:[],flag:!!localStorage.getItem("isVote")}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:g("https://activity.xhsxmt.com/","2021最美基层民警投票-浏览量"),v("2021最美基层民警投票-浏览量","","https://activity.xhsxmt.com/"),e.changeStructure();case 3:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{allNum:function(){return this.dataSource.reduce((function(e,t){return e+t.num}),0)}},methods:{onClickHand:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(localStorage.getItem("userInfo")){t.next=4;break}w("https://h5.xinhuaxmt.com/h5/m5/zmjcmj/index.html","2021年“最美基层民警”云推介","E0F1076E057E893286AFC6E56A4421CB","https://activity.xhsxmt.com/"),t.next=14;break;case 4:if(n=JSON.parse(localStorage.getItem("userInfo")).data?JSON.parse(localStorage.getItem("userInfo")).data.openId:JSON.parse(localStorage.getItem("userInfo")).openId,localStorage.getItem("isVote")){t.next=10;break}return t.next=8,l(n);case 8:a=t.sent,localStorage.setItem("isVote",JSON.stringify(a));case 10:return t.next=12,f({account:n,project:"zmjcmj",items:[e]});case 12:c=t.sent,console.log("res..........105",c);case 14:case"end":return t.stop()}}),t)})))()},changeStructure:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:n=t.sent,console.log(n),a=n.data.leaderboard.zmjcmj,e.dataSource=i.map((function(e,t){for(var n in a)if(e.pcId&&e.pcId===n)return Object(r["a"])(Object(r["a"])({},e),{},{num:a[n]})})).sort((function(e,t){return t.num-e.num}));case 6:case"end":return t.stop()}}),t)})))()}}},C=_,k=(n("6209"),n("2877")),R=Object(k["a"])(C,a,c,!1,null,"290cbbb3",null);t["default"]=R.exports},d629:function(e){e.exports=JSON.parse('[{"pcId":"c01","pcName":"魏建力","company":"北京市公安局通州分局警务支援支队视频警务中队","post":"警务技术四级主管","num":0},{"pcId":"c02","pcName":"闫凤冰","company":"天津市公安局西青分局打击犯罪侦查支队三大队","post":"大队长、一级警长","num":0},{"pcId":"c03","pcName":"王永辉","company":"河北省石家庄市公安局桥西分局吕建江综合警务服务站","post":"主任、一级警长","num":0},{"pcId":"c04","pcName":"王振生","company":"蒲县公安局刑侦大队副大队长兼警犬基地","post":"负责人，二级警督","num":0},{"pcId":"c05","pcName":"杨宏峰","company":"内蒙古自治区呼伦贝尔市海拉尔分局向华街派出所","post":"所长","num":0},{"pcId":"c06","pcName":"王春昱","company":"辽宁省大连市公安局沙河口分局兴工街派出所","post":"社区民警、一级警长","num":0},{"pcId":"c07","pcName":"程新安","company":"吉林省吉林市公安局昌邑分局延江派出所","post":"一级警长","num":0},{"pcId":"c08","pcName":"陈亮","company":"黑龙江省哈尔滨市公安道外分局东莱街派出所","post":"副所长","num":0},{"pcId":"c09","pcName":"王瑞芳","company":"上海市公安局徐汇分局徐家汇派出所","post":"三级高级警长","num":0},{"pcId":"c10","pcName":"唐贤权","company":"江苏省无锡市看守所","post":"一级警长","num":0},{"pcId":"c11","pcName":"隋永辉","company":"浙江省杭州市公安局西湖区分局警务督察大队","post":"一级警长","num":0},{"pcId":"c12","pcName":"张恒菖","company":"安徽省宿州市公安局交通警察支队一大队事故处理中队","post":"指导员","num":0},{"pcId":"c13","pcName":"林志兴","company":"福建省厦门市公安局侨英派出所社区警务队","post":"队长、一级警长","num":0},{"pcId":"c14","pcName":"廖福来","company":"江西省芦溪县公安局银河派出所","post":"所长","num":0},{"pcId":"c15","pcName":"李涌","company":"山东省青岛市公安局交通警察支队同三高速公路大队二中队","post":"原中队长","num":0},{"pcId":"c16","pcName":"杨旭恒","company":"河南省新密市公安局城关派出所","post":"副局长","num":0},{"pcId":"c17","pcName":"邱军","company":"湖北省襄阳市襄州区公安局肖湾派出所","post":"副所长","num":0},{"pcId":"c18","pcName":"柳四清","company":"湖南省湘潭市特殊违法犯罪人员医疗收治所","post":"政委","num":0},{"pcId":"c19","pcName":"邬松君","company":"广东省广州市公安局荔湾区分局中南派出所","post":"所长","num":0},{"pcId":"c20","pcName":"于伍生","company":"广西壮族自治区桂林市公安局三里店派出所","post":"二级警长","num":0},{"pcId":"c21","pcName":"陈家振","company":"海南省海口市公安局龙华分局城西派出所","post":"四级警长","num":0},{"pcId":"c22","pcName":"余行江","company":"重庆市公安局九龙坡区分局科技信息化科","post":"副科长/警务技术四级主任","num":0},{"pcId":"c23","pcName":"李振宇","company":"四川省成都市公安局高新区分局网络安全保卫大队","post":"大队长/警务技术一级主管","num":0},{"pcId":"c24","pcName":"王焱刚","company":"贵州省黔南州都匀市公安局特巡警大队","post":"大队长、一级警长","num":0},{"pcId":"c25","pcName":"雷冉","company":"云南省德宏傣族景颇族自治州瑞丽市公安局银河派出所","post":"所长、三级警长","num":0},{"pcId":"c26","pcName":"多吉白玛","company":"西藏自治区阿里地区普兰县公安局","post":"一级警长","num":0},{"pcId":"c27","pcName":"雷俊生","company":"陕西省西安市新城分局长乐中路派出所刑侦技术民警","post":"警务技术四级主任","num":0},{"pcId":"c28","pcName":"狄世俊","company":"甘肃省武威市天祝藏族自治县公安局打柴沟派出所","post":"所长三级警长","num":0},{"pcId":"c29","pcName":"赵新录","company":"青海省公安厅森林（国家公园）警察总队可可西里森林公安局","post":"四级警长","num":0},{"pcId":"c30","pcName":"梁维科","company":"宁夏青铜峡城关派出所南苑警务室社区民警、社区党委副书记","post":"三级警长","num":0},{"pcId":"c31","pcName":"热合曼·艾海提","company":"新疆维吾尔自治区阿克苏地区沙雅县公安局哈德墩派出所","post":"教导员、三级警长","num":0},{"pcId":"c32","pcName":"邓雄杰","company":"新疆生产建设兵团第十二师公安局刑侦支队","post":"警务技术三级主管","num":0},{"pcId":"c33","pcName":"周荣亮","company":"上海铁路公安局上海公安处虹桥站派出所","post":"副所长、一级警长","num":0},{"pcId":"c34","pcName":"翟进","company":"广州海关缉私局大铲分局","post":"副局长","num":0},{"pcId":"c35","pcName":"廖洁","company":"第九支赴南苏丹维和警队队长、重庆市公安局两江新区分局警令处民警","post":"队长","num":0},{"pcId":"c36","pcName":"刘峥","company":"首都机场公安局治安二支队公共秩序管理大队","post":"副大队长","num":0},{"pcId":"c37","pcName":"史先强","company":"黑龙江总站大兴安岭支队北极边境派出所洛古河夫妻警务室","post":"一级警员","num":0}]')}});
//# sourceMappingURL=app.0f39a40f.js.map