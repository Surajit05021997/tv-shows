<template>
  <div class="show-details">
    <div v-if="!isDetailsLoading && !isCastLoading && !error">
      <div class="main-container">
        <button id="back-btn" @click="$router.go(-1)">Back</button>
        <div class="poster-container">
          <img class="show-image" :src="poster" alt="Show Image | Refresh if image doesn't load">
        </div>
        <div class="details-container">
          <h1><b>{{showDetails.name}}</b></h1>
          <div class="show-info">
            <p v-html="showDetails.summary"></p>
            <h3><b>GENRES</b></h3><p>{{genres || 'N/A'}}</p>
            <h3><b>LANGUAGE</b></h3><p>{{showDetails.language || 'N/A'}}</p>
            <h3><b>TYPE</b></h3><p>{{showDetails.type || 'N/A'}}</p>
            <h3><b>OFFICIAL SITE</b></h3><a :href="showDetails.officialSite" target="_blank">{{showDetails.officialSite ? 'Click Me' : 'N/A'}}</a>
          </div>
        </div>
      </div>
      <div class="cast-container">
        <h3><b>CAST</b></h3>
        <div v-if="filteredCast === null || filteredCast === undefined || filteredCast.length === 0">
          <h4><b>No Cast Available</b></h4>
        </div>
        <div class="cast-poster-container" v-else>
          <div class="cast" v-for="(individual, index) in filteredCast" :key="index">
            <img class="cast-image" :src="castImage(individual)" alt="Person Image | Refresh if image doesn't load">
            <p>{{individual.person.name}}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="!isDetailsLoading && !isCastLoading && error">
      <error-page :error="error"></error-page>
    </div>

    <div class="show-spinner" v-else>
      <h2>LOADING...</h2>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ErrorPage from '@/components/ErrorPage.vue';

export default {
  name: 'ShowDetails',
  components: {
    ErrorPage,
  },
  data() {
    return {
      isDetailsLoading: false,
      isCastLoading: false,
      error: null,
    };
  },
  created() {
    this.getTvShowDetails(this.$route.params.id);
    this.getShowCast(this.$route.params.id);
  },
  computed: {
    ...mapState(['showDetails', 'cast']),
    poster() {
      if(this.showDetails.image) {
        return this.showDetails.image.original;
      }
      return null;
    },
    genres() {
      if (this.showDetails.genres) {
        return this.showDetails.genres.join(', ');
      }
      return null;
    },
    filteredCast() {
      return this.cast.filter((cast) => {
        if(cast.person.image) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    ...mapActions(['getShowDetails', 'getCast']),
    async getTvShowDetails(id) {
      this.isDetailsLoading = true;
      try {
        await this.getShowDetails(id);
      } catch (error) {
        this.error = error.message;
      }
      this.isDetailsLoading = false;
    },
    async getShowCast(id) {
      this.isCastLoading = true;
      try {
        await this.getCast(id);
      } catch (error) {
        this.error = error.message;
      }
      this.isCastLoading = false;
    },
    castImage(individual) {
      if(individual.person.image) {
        return individual.person.image.medium;
      }
      return null;
    },
  },
};
</script>

<style scoped>
.show-details {
  min-height: 100%;
  box-sizing: border-box;
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
  cursor: pointer;
  transition: background-color 400ms, color 400ms;
}
#back-btn:hover {
  background-color: rgba(221, 25, 25, 1);
  color: rgba(255, 255, 255, 1);
}
.show-image {
  height: 80vh;
  padding: 10px;
}
.details-container {
  padding-right: 10px;
}
.show-info {
  text-align: left;
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
.show-spinner {
  margin: 40vh 0px;
}
@media only screen and (max-width: 768px), only screen and (orientation: portrait) {
  .main-container {
    flex-direction: column;
  }
  .details-container {
    padding-right: 15px;
    padding-left: 15px;
  }
  .show-info {
    text-align: center;
  }
}
@media only screen and (max-width: 480px) {
  .show-details {
    padding-top: 100px;
  }
  .show-image {
    width: 70vw;
    height: auto;
  }
  .show-info {
    text-align: center;
  }
}
</style>
