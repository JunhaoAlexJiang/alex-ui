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
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
.row {
  .al-button {
    margin-left: 10px;
  }
}
</style>
