<template>
  <div class="error-page">
    <h3>{{error}}</h3>
    <button id="reload-btn" @click="reloadPage">Reload</button>
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
  props: {
    error: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.error-page {
  color: rgb(221, 25, 25);
}
#reload-btn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 5px;
}
</style>
