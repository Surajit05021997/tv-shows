<template>
  <div class="search">
    <div v-if="!isLoading && !error && shows !== null">
      <h2>Search result for: {{searchInput}}</h2>
      <div class="search-result-container" v-if="shows.length !== 0">
        <div class="show" v-for="item in filteredShow" :key="item.show.id">
          <show-card :show="item.show"></show-card>
        </div>
      </div>
      <div v-else>
        <h4>No Data Found</h4>
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
import { mapState, mapActions } from 'vuex';
import ShowCard from '@/components/ShowCard.vue';
import ErrorPage from '@/components/ErrorPage.vue';

export default {
  name: 'Search',
  components: {
    ShowCard,
    ErrorPage,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      shows: null,
    };
  },
  created() {
    if(this.isReload === false) {
      this.getTvShowSearchResult(this.searchInput);
    } else {
      this.$router.push('/');
    }
  },
  computed: {
    ...mapState(['searchResult', 'searchValue', 'isReload']),
    searchInput() {
      return this.searchValue;
    },
    filteredShow() {
      return this.shows.filter((show) => {
        if(show.show.image) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    ...mapActions(['getSearchResult']),
    async getTvShowSearchResult(searchInput) {
      if (this.searchInput !== '') {
        this.isLoading = true;
        try {
          await this.getSearchResult(searchInput);
        } catch (error) {
          this.error = error.message;
        }
        this.shows = this.searchResult;
        this.isLoading = false;
      }
    },
  },
  watch: {
    searchInput: function() {
      this.getTvShowSearchResult(this.searchInput);
    }
  },
};
</script>

<style scoped>
.search {
  min-height: 100%;
  box-sizing: border-box;
  padding-top: 52.67px;
  padding-bottom: 24px;
}
.search-result-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.show {
  margin: 10px;
  width: 150px;
}
.show-spinner {
  margin: 40vh 0px;
}
@media only screen and (max-width: 480px) {
  .search {
    padding-top: 100px;
  }
}
</style>
