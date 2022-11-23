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
  components: {},
});
app.mount("#app");
