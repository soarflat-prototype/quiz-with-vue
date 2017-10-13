import Vue from 'vue';

export default class Judge {
  constructor(store) {
    new Vue({
      el: '#judge',
      data() {
        return {
          state: {
            descriptions: [
              'かつて万物の起源『最初の火』から王のソウルを見出し、騎士を率いて魔女イザリスや最初の死者ニト、白竜シースたちと共に古竜と戦った人物。 王のソウルを見出した者たちの中でも、火の時代（現在の世界）を作り上げた中心人物であり、劇中でも多くの人物や事象に影響を与えている。 『最初の火』が消えて闇の時代が到来してしまうことを畏れ、消えかけた火を継ぐべく自らのソウルを一族に分け与えた後に最初の火の炉に身を投じた。 プレイヤーがやってきた頃には、その肉体とソウルは最初の火の燃料として燃やし尽くされ既に燃え殻と化していたが、それでも最後の試練とばかりに刃を向けてくる。',
              '竜狩りオーンスタインを筆頭とするグウィン王の四騎士の一人で、「深淵歩き」の異名を持つ。深淵で行動するためにあえて深淵の魔物と契約を交わしており、彼が遺した契約指輪はとあるボスキャラと戦うためのキーアイテムとなる。 四騎士の残り2名（王の刃キアラン、鷹の目ゴー）もDLCにて初登場を果たしている。 ボスキャラの1体である灰色の大狼シフとは親友であり、相棒であった。また、白猫アルヴィナとも友人関係だったらしく、どうやら動物に好かれやすい人物だったようだ。',
              '棄てられた都アノール・ロンドにて「処刑者」スモウと共に聖堂を守る「竜狩り」の騎士。 グウィン王の四騎士、その長。黄金獅子の鎧兜は雷の力を帯び、十字槍は竜の体深く槍を刺し人などは大きく吹き飛ばす。それは岩のウロコをも貫いたと言う。 このボス戦は本作屈指の鬼門であり、数多のプレイヤーの心を折った存在である。 しかし見た目や攻撃モーションの美しさからファンも少なくない。 彼の「竜狩り」は後の世に伝説として語り継がれており、「竜狩り」をキーワードとした存在が後のシリーズでも登場している。'
            ]
          },
          sharedState: store.state,
        }
      },
      methods: {
        next() {
          store.nextIndex();
          store.updateIsShow('question');
        },
        result() {
          store.updateIsShow('result');
        }
      },
      computed: {
        correct() {
          return this.sharedState.selectedAnswer === store.currentQuestion().correct;
        },
        correctAnswer() {
          const currentQuestion = store.currentQuestion();
          return currentQuestion.items[Number(currentQuestion.correct - 1)];
        },
        description() {
          const state = this.sharedState;
          return this.state.descriptions[state.questionIndex];
        },
        detailLink() {
          return store.currentQuestion().detailLink;
        },
        canNext() {
          const state = this.sharedState;
          return state.questionIndex + 1 < state.questionCount;
        }
      },
    });
  }
}
