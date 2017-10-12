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
          const selectedAnswer = e.currentTarget.getAttribute('data-answer');
          if (selectedAnswer === store.currentQuestion().correct) {
            store.incrementCorrectCount();
          }
          store.updateSelectedAnswer(selectedAnswer);
          store.updateIsShow('judge');
        }
      },
      computed: {
        questionTitle() {
          return store.currentQuestion().title;
        },
        questionItems() {
          return store.currentQuestion().items;
        },
        // questionImage() {
        //   return this.state.questions[this.sharedState.questionIndex].image;
        // }
      },
    });
  }
}
