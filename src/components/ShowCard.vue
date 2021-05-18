<template>
  <div class="show-card">
    <router-link to="/">
      <img class="show-image" :src="cardImage" alt="Show Image"><br>
      <b>{{show.name}}</b><br>
      Rating: {{rating || 'N/A'}}<br>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ShowCard',
  props: ['show'],
  computed: {
    rating() {
      const [rating] = Object.values(this.show.rating);
      return rating;
    },
    cardImage() {
      if (this.show.image !== null) {
        return this.show.image.medium;
      }
      return null;
    },
  },
};
</script>

<style scoped>
.show-image {
  width: 150px;
}
a {
  color: black;
  transition: color 250ms;
}
a:hover {
  color: rgb(221, 25, 25);
  text-decoration: none;
}
</style>
