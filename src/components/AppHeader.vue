<template>
  <div class="app-header">
    <div class="my-nav">
      <div class="brand">
        <router-link  to="/"><h2 id="logo-name"><b>TV SHOWSSS</b></h2></router-link>
      </div>
      <div class="search-box">
        <form @submit.prevent>
          <input id="search-field" type="text" v-model.trim="searchInput">
          <button id="search-btn" @click="searchShow(searchInput)">search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    ...mapActions(['getSearchValue', 'changeIsReload']),
    searchShow(searchInput) {
      if(searchInput !== '')
      {
        this.changeIsReload();
        this.getSearchValue(searchInput);
        if(this.$route.path !== `/search`)
        {
          this.$router.push('/search');
        }
        this.searchInput = '';
      }
    },
  },
};
</script>

<style scoped>
.my-nav {
  height: 52.67px;
  width: 100%;
  background-color: black;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  margin: 12px;
}
#logo-name {
  margin: 0px;
}
a {
  color: rgb(221, 25, 25);
  text-decoration: none;
}
.search-box {
  margin: 10px 12px;
}
#search-field {
  width: 30vw;
}
#search-btn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 0px 5px;
  cursor: pointer;
}
@media only screen and (max-width: 480px) {
  .my-nav {
    height: 100px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
