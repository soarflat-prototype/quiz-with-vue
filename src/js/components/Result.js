import Vue from 'vue';

export default class Result {
  constructor(store) {
    new Vue({
      el: '#result',
      data() {
        return {
          state: {},
          sharedState: store.state,
        }
      },
      methods: {},
      computed: {},
    });
  }
}
