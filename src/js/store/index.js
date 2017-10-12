const store = {
  debug: true,

  state: {
    questionIndex: 0,
    questionCount: 3,
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
    selectedAnswer: null,
    isShow: {
      question: true,
      judge: false,
      result: false,
    },
    isEndQuiz: false,
  },

  currentQuestion() {
    return this.state.questions[this.state.questionIndex];
  },

  nextIndex() {
    if (this.debug) console.log('nextIndex triggered');
    this.state.questionIndex += 1;
  },

  incrementCorrectCount() {
    if (this.debug) console.log('incrementCorrectCount triggered');
    this.state.correctCount += 1;
  },

  updateSelectedAnswer(answer) {
    if (this.debug) console.log('updateSelectedAnswer triggered');
    this.state.answer = answer;
  },

  updateIsShow(el) {
    if (this.debug) console.log('updateIsShow triggered');
    for (let key in this.state.isShow) {
      if (this.state.isShow.hasOwnProperty(key)) {
        this.state.isShow[key] = false;
      } else {
        console.error(`not find ${key}`);
      }
    }
    this.state.isShow[el] = true;
  },
};

export default store;
