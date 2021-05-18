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
import { mapGetters } from 'vuex';
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
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.getAllShows();
  },
  computed: {
    ...mapGetters(['getTop20Shows']),
  },
  methods: {
    async getAllShows() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('getAllShows');
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },
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
</style>
