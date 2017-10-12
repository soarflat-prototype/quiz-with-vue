import Vue from 'vue';

export default class Question {
  constructor(store) {
    new Vue({
      el: '#question',
      data() {
        return {
          state: {},
          sharedState: store.state,
        }
      },
      methods: {
        answer(e) {
          const answer = e.currentTarget.getAttribute('data-answer');
          store.updateAnswer(answer);
          store.updateIsShowQuestion(false);
          store.updateIsShowJudge(true);
          store.updateIsShowResult(false);
        }
      },
      computed: {
        questionTitle() {
          const state = this.sharedState;
          return state.questions[state.questionIndex].title;
        },
        questionItems() {
          const state = this.sharedState;
          return state.questions[state.questionIndex].items;
        }
        // questionImage() {
        //   return this.state.questions[this.sharedState.questionIndex].image;
        // }
      },
    });
  }
}
