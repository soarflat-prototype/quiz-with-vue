import Vue from 'vue';

export default class Question {
  constructor(store) {
    new Vue({
      el: '#question',
      data() {
        return {
          globalState: store.state,
        }
      },
      methods: {
        answer(e) {
          const selectedAnswer = e.currentTarget.getAttribute('data-answer');

          if (store.isCorrect(selectedAnswer)) {
            store.incrementCorrectCount();
          }

          store.updateSelectedAnswer(selectedAnswer);
          store.updateVisible('judge');
        }
      },
      computed: {
        questionTitle() {
          return store.currentQuestion().title;
        },
        questionItems() {
          return store.currentQuestion().items;
        },
        questionImage() {
          return store.currentQuestion().image;
        }
      },
    });
  }
}
