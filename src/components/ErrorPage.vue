<template>
  <div class="error-page">
    <h3>{{error}}</h3>
    <button id="reloadBtn" @click="reloadPage">Reload</button>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
  props: ['error'],
};
</script>

<style scoped>
.error-page {
  color: rgb(221, 25, 25);
}
#reloadBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 5px;
}
</style>
