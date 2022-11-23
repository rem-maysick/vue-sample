const app = Vue.createApp({
  data() {
    return {
      animals: [],
    };
  },
  mounted() {
    Papa.parse("animals.csv", {
      download: true,
      header: true,
      complete: (parsed) => {
        this.animals = parsed.data;
      },
    });
  },
});

app.component("animal-profile", {
  props: ["animal"],
  template: `
  <section class="profile">
    <div class="profile-images">
      <img :src="'img/' + animal.id + '.jpg'" alt="" />
    </div>
    <dl class="profile-list">
      <div class="profile-list-name">{{animal.名前}}</div>
      <dt>性別</dt>
      <dd>{{animal.性別}}</dd>
      <dt>生年月日</dt>
      <dd>{{animal.生年月日}}</dd>
      <dt>年齢</dt>
      <dd>{{animal.年齢}}</dd>
      <dt>体重</dt>
      <dd>{{animal.体重}}</dd>
      <dt>狂犬病ワクチン</dt>
      <dd>{{animal.狂犬病ワクチン}}</dd>
      <dt>混合ワクチン</dt>
      <dd>{{animal.混合ワクチン}}</dd>
      <dt>マイクロチップ</dt>
      <dd>{{animal.マイクロチップ}}</dd>
      <dt>既往歴</dt>
      <dd>{{animal.既往歴}}</dd>
      <dt>施設に来た日</dt>
      <dd>{{animal.施設に来た日}}</dd>
    </dl>
  </section>`,
});

const vm = app.mount("#app");
