import Vue from 'vue';

export default class Judge {
  constructor(store) {
    new Vue({
      el: '#judge',
      data() {
        return {
          globalState: store.state,
        }
      },
      methods: {
        next() {
          store.nextIndex();
          store.updateVisible('question');
        },
        result() {
          store.updateVisible('result');
        }
      },
      computed: {
        correct() {
          return store.isCorrect(this.globalState.selectedAnswer);
        },
        correctAnswer() {
          const currentQuestion = store.currentQuestion();
          return currentQuestion.items[Number(currentQuestion.correct - 1)];
        },
        description() {
          return store.currentQuestion().description;
        },
        detailLink() {
          return store.currentQuestion().detailLink;
        },
        canNext() {
          return store.canNext();
        }
      },
    });
  }
}
