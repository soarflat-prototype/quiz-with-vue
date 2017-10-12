const store = {
  debug: true,
  state: {
    questionIndex: 0,
    questionCount: 5,
    correctCount: 0,
    questions: [
      {
        correct: '2',
        title: '薪の王は？',
        items: ['グウィンドリン', 'グウィン', 'レスター']
      }, {
        correct: '3',
        title: '深淵歩きは?',
        items: ['オーンスタイン', 'スモウ', 'アルトリウス']
      }, {
        correct: '1',
        title: '龍狩りは？',
        items: ['オーンスタイン', 'ゴー', 'キアラン']
      }
    ],
    answer: null,
    isEndQuiz: false,
    isShowQuestion: true,
    isShowJudge: false,
    isShowResult: false,
  },
  nextIndex() {
    if (this.debug) console.log('nextIndex triggered');
    this.state.questionIndex += 1;
  },

  updateAnswer(answer) {
    if (this.debug) console.log('updateAnswer triggered');
    this.state.answer = answer;
  },

  updateIsShowQuestion(isShow) {
    if (this.debug) console.log('updateIsShowQuestion triggered');
    this.state.isShowQuestion = isShow;
  },

  updateIsShowJudge(isShow) {
    if (this.debug) console.log('updateIsShowJudge triggered');
    this.state.isShowJudge = isShow;
  },

  updateIsShowResult(isShow) {
    if (this.debug) console.log('updateIsShowResult triggered');
    this.state.isShowResult = isShow;
  }
};

export default store;