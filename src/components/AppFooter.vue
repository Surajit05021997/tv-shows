<template>
  <div class="app-footer">
    <footer>
      <div >&copy; 2021 Copyright:
        <a href="https://www.tvmaze.com/api" target="_blank">tvmaze.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.app-footer {
  color: white;
  height: 24px;
  background-color: black;
  margin-top: -24px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: lightgrey;
}
</style>
