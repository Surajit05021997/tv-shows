<template>
  <div class="page-not-found">
    <div class="error-msg">
      <h2>Page Not Found</h2>
      <p>Sorry, an error has occured, Requested page not found!</p>
      <button id="homeBtn" @click="goToHome">Go To Home</button>
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
  padding-top: 52.67px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error-msg {
  color: rgb(221, 25, 25);
}
#homeBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
}
</style>
