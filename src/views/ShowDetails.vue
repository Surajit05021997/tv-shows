<template>
  <div class="show-details">
    <div class="main-container" v-if="!isLoading && !error">
      <div class="poster-container">
        <img class="show-image" :src="showDetails.image.original" alt="Show Image">
      </div>
      <div class="details-container">
        <h4><b>{{showDetails.name}}</b></h4>
        <div class="show-info">
          <p class="show-summary" v-html="showDetails.summary"></p>
          <h5>Genres</h5><p>{{showDetails.genres.toString() || 'N/A'}}</p>
          <h5>Rating</h5><p>{{rating || 'N/A'}}</p>
        </div>
      </div>
    </div>

    <div v-else-if="!isLoading && error">
      <error-page :error="error"></error-page>
    </div>

    <div class="show-spinner" v-else>
      <b-spinner variant="danger" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ErrorPage from '@/components/ErrorPage.vue';

export default {
  name: 'ShowDetails',
  components: {
    ErrorPage,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.getShowDetails(this.$route.params.id);
  },
  computed: {
    ...mapState(['showDetails']),
    rating() {
      const [rating] = Object.values(this.showDetails.rating);
      return rating;
    },
  },
  methods: {
    async getShowDetails(id) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('getShowDetails', id);
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.show-details {
  min-height: 100%;
  padding-top: 60.67px;
  padding-bottom: 24px;
}
.main-container {
  display: flex;
}
.details-container {
  padding-right: 10px;
}
.show-image {
  height: 80vh;
  padding: 10px;
}
.show-summary {
  text-align: justify;
}
.show-spinner {
  margin: 40vh 0px;
}
</style>
