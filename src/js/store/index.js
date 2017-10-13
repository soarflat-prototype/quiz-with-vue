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
        image: 'images/gwin.jpg',
        items: ['グウィンドリン', 'グウィン', 'レスター'],
        detailLink: 'https://dic.pixiv.net/a/%E8%96%AA%E3%81%AE%E7%8E%8B%E3%82%B0%E3%82%A6%E3%82%A3%E3%83%B3',
      }, {
        correct: '3',
        title: '深淵歩きは?',
        image: 'images/artorius.jpg',
        items: ['オーンスタイン', 'スモウ', 'アルトリウス'],
        detailLink: 'https://dic.pixiv.net/a/%E6%B7%B1%E6%B7%B5%E6%AD%A9%E3%81%8D%E3%82%A2%E3%83%AB%E3%83%88%E3%83%AA%E3%82%A6%E3%82%B9',
      }, {
        correct: '1',
        title: '龍狩りは？',
        image: 'images/ornstein.jpg',
        items: ['オーンスタイン', 'ゴー', 'キアラン'],
        detailLink: 'https://dic.pixiv.net/a/%E7%AB%9C%E7%8B%A9%E3%82%8A%E3%82%AA%E3%83%BC%E3%83%B3%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%B3',
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
    this.state.selectedAnswer = answer;
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
