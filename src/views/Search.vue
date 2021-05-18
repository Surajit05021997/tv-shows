<template>
  <div class="search">
    <div class="search-bar-container">
      <form @submit.prevent>
        <input type="text" v-model.trim="searchInput" placeholder="Search...">
        <button id="searchBtn" @click="getSearchResult(searchInput)">Search</button>
      </form>
    </div>

    <div v-if="!isLoading && !error && shows !== null">
      <div class="search-result-container" v-if="shows.length !== 0">
        <div class="show" v-for="item in shows" :key="item.show.id">
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

    <div class="show-spinner" v-else-if="isLoading">
      <b-spinner variant="danger" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
      searchInput: '',
      isLoading: false,
      error: null,
      shows: null,
    };
  },
  computed: {
    ...mapState(['searchResult']),
  },
  methods: {
    async getSearchResult(searchInput) {
      if (this.searchInput !== '') {
        this.isLoading = true;
        try {
          await this.$store.dispatch('getSearchResult', searchInput);
        } catch (error) {
          this.error = error.message;
        }
        this.shows = this.searchResult;
        this.isLoading = false;
        this.searchInput = '';
      }
    },
  },
};
</script>

<style scoped>
.search {
  min-height: 100%;
  padding-top: 52.67px;
  padding-bottom: 24px;
}
.search-bar-container {
  margin: 20px;
}
#searchBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 5px;
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
</style>
