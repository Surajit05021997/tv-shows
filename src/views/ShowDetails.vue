<template>
  <div class="show-details">
    <div v-if="!isLoading && !error">
      <div class="main-container">
        <button id="back-btn" @click="$router.go(-1)">Back</button>
        <div class="poster-container">
          <img class="show-image" :src="showDetails.image.original" alt="Show Image">
        </div>
        <div class="details-container">
          <h3><b>{{showDetails.name}}</b></h3>
          <div class="show-info">
            <p class="show-summary" v-html="showDetails.summary"></p>
            <h6><b>GENRES</b></h6><p>{{showDetails.genres.toString() || 'N/A'}}</p>
            <h6><b>RATING</b></h6><p>{{rating || 'N/A'}}</p>
            <h6><b>LANGUAGE</b></h6><p>{{showDetails.language || 'N/A'}}</p>
            <h6><b>TYPE</b></h6><p>{{showDetails.type || 'N/A'}}</p>
            <h6><b>OFFICIAL SITE</b></h6><a :href="showDetails.officialSite" target="_blank">{{showDetails.officialSite || 'N/A'}}</a>
          </div>
        </div>
      </div>
      <div class="cast-container">
        <h4><b>CAST</b></h4>
        <div class="cast-poster-container">
          <div class="cast" v-for="(individual, index) in cast" :key="index">
            <img class="cast-image" :src="individual.person.image.medium" alt="Person Image">
            <p>{{individual.person.name}}</p>
          </div>
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
    this.getCast(this.$route.params.id);
  },
  computed: {
    ...mapState(['showDetails', 'cast']),
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
    async getCast(id) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('getCast', id);
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
  padding-top: 52.67px;
  padding-bottom: 24px;
}
.main-container {
  display: flex;
}
#back-btn {
  position: fixed;
  background-color: rgba(221, 25, 25, 0.5);
  border: none;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 4px 4px 0px;
  margin: 5px 5px 5px 0px;
  transition: background-color 400ms, color 400ms;
}
#back-btn:hover {
  background-color: rgba(221, 25, 25, 1);
  color: rgba(255, 255, 255, 1);
}
.details-container {
  padding-right: 10px;
}
.show-image {
  height: 80vh;
  padding: 10px;
}
.show-spinner {
  margin: 40vh 0px;
}
.cast-container {
  margin-top: 20px;
}
.cast-poster-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cast {
  margin: 10px;
  width: 120px;
}
.cast-image {
  width: 100px;
}
@media only screen and (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }
  .details-container {
  padding-right: 15px;
  padding-left: 15px;
  }
}
@media only screen and (max-width: 480px) {
  .show-image {
    width: 70vw;
    height: auto;
  }
}
</style>
