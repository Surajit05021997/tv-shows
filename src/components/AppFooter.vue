<template>
  <div class="app-footer">
    <footer>
      <div >&copy; 2021 Copyright:
        <a href="https://www.tvmaze.com/api">tvmaze.com</a>
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
  background-color: rgb(52, 58, 64);
  margin-top: -24px;
}
a {
  color: white;
}
a:hover {
  color: lightgrey;
  text-decoration: none;
}
</style>
