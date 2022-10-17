<template>
  <div id="app">
    <div class="row">
      <al-button>按钮</al-button>
      <al-button type="primary">按钮</al-button>
      <al-button type="success">按钮</al-button>
      <al-button type="info">按钮</al-button>
      <al-button type="warning">按钮</al-button>
      <al-button type="danger">按钮</al-button>
    </div>
    <div class="row">
      <al-button>按钮</al-button>
      <al-button plain type="primary">按钮</al-button>
      <al-button plain type="success">按钮</al-button>
      <al-button plain type="info">按钮</al-button>
      <al-button plain type="warning">按钮</al-button>
      <al-button plain type="danger">按钮</al-button>
    </div>
    <div class="row">
      <al-button>按钮</al-button>
      <al-button plain round type="primary">按钮</al-button>
      <al-button plain round type="success">按钮</al-button>
      <al-button plain round type="info">按钮</al-button>
      <al-button plain round type="warning">按钮</al-button>
      <al-button plain round type="danger">按钮</al-button>
    </div>
    <div class="row">
      <al-button>拆</al-button>
      <al-button plain circle type="primary">拆</al-button>
      <al-button plain circle type="success">拆</al-button>
      <al-button plain circle type="info">拆</al-button>
      <al-button plain circle type="warning">拆</al-button>
      <al-button plain circle type="danger">拆</al-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: "",
    };
  },
  methods: {
    update(val) {
      this.id = val;
    },
    clickButton() {
      this.id = this.$store.state.id;
      console.log(this.id);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 10px;
  .al-button {
    margin-left: 10px;
  }
}
</style>
