import Vue from 'vue';

export default class Judge {
  constructor(store) {
    new Vue({
      el: '#judge',
      data() {
        return {
          state: {
            descriptions: [
              '全ての始まりの場所にして不死者の使命の終の地、『最初の火の炉』の中枢部にてプレイヤーを待ち受ける光の大王グウィンの成れの果て。',
              '深淵歩き（大嘘）',
              '棄てられた都アノール・ロンドにて「処刑者」スモウと共に聖堂を守る「竜狩り」の騎士。'
            ]
          },
          sharedState: store.state,
        }
      },
      methods: {
        next() {
          store.nextIndex();
          store.updateIsShowQuestion(true);
          store.updateIsShowJudge(false);
          store.updateIsShowResult(false);
        }
      },
      computed: {
        correct() {
          const state = this.sharedState;
          const correct = state.questions[state.questionIndex].correct;
          return state.answer === correct;
        },
        description() {
          const state = this.sharedState;
          return this.state.descriptions[state.questionIndex];
        }
      },
    });
  }
}
