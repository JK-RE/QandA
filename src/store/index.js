import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
	week: '第一周', //活动周数
	itemNum: 1, // 第几题
	answerid: [], //答案id
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "下面哪句话出自《孟子》?",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 1,
			"topic_id": 20,
			"answer_name": "水能载舟，亦能覆舟",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 2,
			"topic_id": 20,
			"answer_name": "独乐乐，与人乐乐，熟乐？",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 3,
			"topic_id": 20,
			"answer_name": "先天下之忧而忧，后天下之乐而乐",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 4,
			"topic_id": 20,
			"answer_name": "民惟邦本，本固邦宁",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "下列选项中与“亡羊补牢”意思最接近的是：",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 5,
			"topic_id": 21,
			"answer_name": "人无远虑，必有近忧",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 6,
			"topic_id": 21,
			"answer_name": "往者不可谏，来者犹可追",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 7,
			"topic_id": 21,
			"answer_name": "祸兮，福之所倚，福兮，祝之所伏 ",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 8,
			"topic_id": 21,
			"answer_name": "失之东隅，收之桑榆",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "谁被称为中国的“国父”？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 9,
			"topic_id": 21,
			"answer_name": "韩非子",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 10,
			"topic_id": 21,
			"answer_name": "孔子",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 11,
			"topic_id": 21,
			"answer_name": "周恩来",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 12,
			"topic_id": 21,
			"answer_name": "孙中山",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "人体全身有几块骨？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 13,
			"topic_id": 21,
			"answer_name": " 208块",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 14,
			"topic_id": 21,
			"answer_name": "206块",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 15,
			"topic_id": 21,
			"answer_name": "204块",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 16,
			"topic_id": 21,
			"answer_name": "202块",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "圆周率精确到小数后九位是什么？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 17,
			"topic_id": 21,
			"answer_name": "3.141592651",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 18,
			"topic_id": 21,
			"answer_name": "3.141592654",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 19,
			"topic_id": 21,
			"answer_name": "3.141592656",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "3.141592657",
			"is_standard_answer": 0
		}]
	}],
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})