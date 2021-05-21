<template>
  <div class="home">
    <div class="main-container" v-if="!isLoading && !error">
      <div class="show-container">
        <h4><b>Top Shows</b></h4>
        <div class="shows">
          <div class="show" v-for="show in getTop20Shows" :key="show.id">
            <show-card :show="show"></show-card>
          </div>
        </div>
      </div>

      <div class="show-container">
        <h4><b>Shows By Genre</b></h4>
        <h4>{{selectedGenre}} Shows</h4>
        <select v-model="selectedGenre">
          <option v-for="(option, index) in getAllGenres" :key="index" v-bind:value="option">
            {{ option }}
          </option>
        </select>
        <div class="shows">
          <div class="show" v-for="show in getShowListByGenre" :key="show.id">
            <show-card :show="show"></show-card>
          </div>
        </div>
      </div> 
    </div>

    <div v-else-if="!isLoading && error">
      <error-page :error="error"></error-page>
    </div>

    <div class="show-spinner" v-else>
      <!-- <b-spinner variant="danger" label="Spinning"></b-spinner> -->
      <h2>LOADING...</h2>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import ShowCard from '@/components/ShowCard.vue';
import ErrorPage from '@/components/ErrorPage.vue';

export default {
  name: 'Home',
  components: {
    ShowCard,
    ErrorPage,
  },
  data() {
    return { 
      selectedGenre: 'Drama',
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.getAllTvShows();
    this.getSelectedGenre(this.selectedGenre);
  },
  computed: {
    ...mapState(['allShows']),
    ...mapGetters(['getTop20Shows', 'getShowListByGenre']),
    getAllGenres() {
      const genreList = new Set();
      this.allShows.forEach((show) => {
        show.genres.forEach((genre) => {
          genreList.add(genre);
        });
      });
      return genreList;
    },
  },
  methods: {
    ...mapActions(['getAllShows', 'getSelectedGenre']),
    async getAllTvShows() {
      this.isLoading = true;
      try {
        await this.getAllShows();
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },
  watch: {
    selectedGenre: function() {
      this.getSelectedGenre(this.selectedGenre);
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100%;
  padding-top: 52.67px;
  padding-bottom: 24px;
}
.main-container {
  margin: 20px;
}
.show-container {
  margin: 20px 0px;
}
.genre-container {
  margin-bottom: 20px;
}
.shows {
  display: flex;
  overflow-y: auto;
}
.show {
  margin: 10px;
}
.show-spinner {
  margin: 40vh 0px;
}
@media only screen and (max-width: 480px) {
  .shows {
  flex-wrap: wrap;
  justify-content: center;
  }
  .show {
    width: 120px;
  }
}
</style>
