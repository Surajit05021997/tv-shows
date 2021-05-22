<template>
  <div class="page-not-found">
    <div class="error-msg">
      <h2>Page Not Found</h2>
      <p>Sorry, Requested page not found!</p>
      <button id="home-btn" @click="goToHome">Go To Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.page-not-found {
  min-height: 100%;
  box-sizing: border-box;
  padding-top: 52.67px;
  padding-bottom: 24px;
}
.error-msg {
  color: rgb(221, 25, 25);
}
#home-btn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
@media only screen and (max-width: 480px) {
  .page-not-found {
    padding-top: 100px;
  }
}
</style>
