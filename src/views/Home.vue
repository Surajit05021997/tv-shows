<template>
  <div class="home">
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {

  },
  created() {
    this.getAllShows();
  },
  computed: {
    ...mapGetters(['getTop20Shows']),
  },
  methods: {
    getAllShows() {
      this.$store.dispatch('getAllShows');
    }
  },
}
</script>

<style scoped>
.home {
  min-height: 100%;
  padding-top: 52.67px;
  padding-bottom: 24px;
}
</style>
