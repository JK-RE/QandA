webpackJsonp([5,3],{0:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=i(47),_=a(n),r=i(94),s=a(r),d=i(53),c=a(d),o=i(55),u=a(o);i(72),i(52),_.default.use(s.default);var p=new s.default({routes:c.default});new _.default({router:p,store:u.default}).$mount("#app")},48:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},52:function(e,t){"use strict";!function(e,t){var i=e.documentElement,a="orientationchange"in window?"orientationchange":"resize",n=function(){var e=i.clientWidth;e&&(i.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(a,n,!1),e.addEventListener("DOMContentLoaded",n,!1))}(document,window)},53:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(86),_=a(n);t.default=[{path:"/",component:_.default,children:[{path:"",component:function(e){return i.e(1,function(){return e(i(87))})}},{path:"/item",component:function(e){return i.e(0,function(){return e(i(88))})}},{path:"/score",component:function(e){return i.e(2,function(){return e(i(89))})}}]}]},54:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={addNum:function(e,t){var i=e.commit,a=e.state;i("REMBER_ANSWER",t),a.itemNum<a.itemDetail.length&&i("ADD_ITEMNUM",1)},initializeData:function(e){var t=e.commit;t("INITIALIZE_DATA")}}},55:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(47),_=a(n),r=i(12),s=a(r),d=i(56),c=a(d),o=i(54),u=a(o);_.default.use(s.default);var p={week:"第一周",itemNum:1,answerid:[],itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"下面哪句话出自《孟子》?",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"水能载舟，亦能覆舟",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"独乐乐，与人乐乐，熟乐？",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"先天下之忧而忧，后天下之乐而乐",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"民惟邦本，本固邦宁",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"下列选项中与“亡羊补牢”意思最接近的是：",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"人无远虑，必有近忧",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"往者不可谏，来者犹可追",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"祸兮，福之所倚，福兮，祝之所伏 ",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"失之东隅，收之桑榆",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"谁被称为中国的“国父”？",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"韩非子",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"孔子",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"周恩来",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"孙中山",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"人体全身有几块骨？",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:" 208块",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"206块",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"204块",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"202块",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"圆周率精确到小数后九位是什么？",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"3.141592651",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"3.141592654",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"3.141592656",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"3.141592657",is_standard_answer:0}]}]};t.default=new s.default.Store({state:p,actions:u.default,mutations:c.default})},56:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,_=i(58),r=a(_),s="ADD_ITEMNUM",d="REMBER_ANSWER",c="INITIALIZE_DATA";t.default=(n={},(0,r.default)(n,s,function(e,t){e.itemNum+=t}),(0,r.default)(n,d,function(e,t){e.answerid.push(t)}),(0,r.default)(n,c,function(e){e.itemNum=1,e.answerid=[]}),n)},72:function(e,t){},75:function(e,t){},86:function(e,t,i){i(75);var a=i(2)(i(48),i(92),null,null);e.exports=a.exports},92:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("router-view")],1)},staticRenderFns:[]}}});