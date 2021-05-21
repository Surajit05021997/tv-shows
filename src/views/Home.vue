<template>
  <div class="home">
    <div class="main-container" v-if="!isLoading && !error">
      <div class="show-container">
        <h2><b>Top Shows</b></h2>
        <div class="shows">
          <div class="show" v-for="show in getTop20Shows" :key="show.id">
            <show-card :show="show"></show-card>
          </div>
        </div>
      </div>

      <div class="show-container">
        <h2><b>Shows By Genre</b></h2>
        <h3>{{selectedGenre}} Shows</h3>
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
  box-sizing: border-box;
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
select {
  background-color: black;
    color: white;
    width: 120px;
}
.show-spinner {
  margin: 40vh 0px;
}
@media only screen and (max-width: 480px) {
  .home {
    padding-top: 100px;
  }
  .shows {
  flex-wrap: wrap;
  justify-content: center;
  }
  .show {
    width: 120px;
  }
}
</style>
