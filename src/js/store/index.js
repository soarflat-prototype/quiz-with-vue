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
        description: 'かつて万物の起源『最初の火』から王のソウルを見出し、騎士を率いて魔女イザリスや最初の死者ニト、白竜シースたちと共に古竜と戦った人物。 王のソウルを見出した者たちの中でも、火の時代（現在の世界）を作り上げた中心人物であり、劇中でも多くの人物や事象に影響を与えている。 『最初の火』が消えて闇の時代が到来してしまうことを畏れ、消えかけた火を継ぐべく自らのソウルを一族に分け与えた後に最初の火の炉に身を投じた。 プレイヤーがやってきた頃には、その肉体とソウルは最初の火の燃料として燃やし尽くされ既に燃え殻と化していたが、それでも最後の試練とばかりに刃を向けてくる。',
      }, {
        correct: '3',
        title: '深淵歩きは?',
        image: 'images/artorius.jpg',
        items: ['オーンスタイン', 'スモウ', 'アルトリウス'],
        detailLink: 'https://dic.pixiv.net/a/%E6%B7%B1%E6%B7%B5%E6%AD%A9%E3%81%8D%E3%82%A2%E3%83%AB%E3%83%88%E3%83%AA%E3%82%A6%E3%82%B9',
        description: '竜狩りオーンスタインを筆頭とするグウィン王の四騎士の一人で、「深淵歩き」の異名を持つ。深淵で行動するためにあえて深淵の魔物と契約を交わしており、彼が遺した契約指輪はとあるボスキャラと戦うためのキーアイテムとなる。 四騎士の残り2名（王の刃キアラン、鷹の目ゴー）もDLCにて初登場を果たしている。 ボスキャラの1体である灰色の大狼シフとは親友であり、相棒であった。また、白猫アルヴィナとも友人関係だったらしく、どうやら動物に好かれやすい人物だったようだ。',
      }, {
        correct: '1',
        title: '龍狩りは？',
        image: 'images/ornstein.jpg',
        items: ['オーンスタイン', 'ゴー', 'キアラン'],
        detailLink: 'https://dic.pixiv.net/a/%E7%AB%9C%E7%8B%A9%E3%82%8A%E3%82%AA%E3%83%BC%E3%83%B3%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%B3',
        description: '棄てられた都アノール・ロンドにて「処刑者」スモウと共に聖堂を守る「竜狩り」の騎士。 グウィン王の四騎士、その長。黄金獅子の鎧兜は雷の力を帯び、十字槍は竜の体深く槍を刺し人などは大きく吹き飛ばす。それは岩のウロコをも貫いたと言う。 このボス戦は本作屈指の鬼門であり、数多のプレイヤーの心を折った存在である。 しかし見た目や攻撃モーションの美しさからファンも少なくない。 彼の「竜狩り」は後の世に伝説として語り継がれており、「竜狩り」をキーワードとした存在が後のシリーズでも登場している。'
      }
    ],
    selectedAnswer: null,
    visible: {
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

  isCorrect(selectedAnswer) {
    return (selectedAnswer === this.currentQuestion().correct);
  },

  incrementCorrectCount() {
    if (this.debug) console.log('incrementCorrectCount triggered');
    this.state.correctCount += 1;
  },

  updateSelectedAnswer(answer) {
    if (this.debug) console.log('updateSelectedAnswer triggered');
    this.state.selectedAnswer = answer;
  },

  updateVisible(el) {
    if (this.debug) console.log('updateVisible triggered');
    for (let key in this.state.visible) {
      if (this.state.visible.hasOwnProperty(key)) {
        this.state.visible[key] = false;
      } else {
        console.error(`not find ${key}`);
      }
    }
    this.state.visible[el] = true;
  },

  canNext() {
    return (this.state.questionIndex + 1 < this.state.questionCount);
  }
};

export default store;
