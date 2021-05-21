<template>
  <div class="app-header">
    <div >
      <div class="my-nav" :class="{'toggle-nav': isActive}">
        <div class="left">
          <div class="brand">
            <router-link  to="/"><h2 id="logo-name"><b>TV MAZE</b></h2></router-link>
          </div>
          <div class="search-box">
            <form @submit.prevent>
              <input id="search-field" type="text" v-model.trim="searchInput">
              <button class="btn" @click="searchShow(searchInput)">search</button>
            </form>
          </div>
        </div>
        <div class="right">
          <div class="toggle">
            <button class="btn" @click="taggleNav">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      searchInput: '',
      isActive: false,
    };
  },
  methods: {
    taggleNav() {
      this.isActive = !this.isActive;
    },
    searchShow(searchInput) {
      if(this.$route.path !== `/search/${searchInput}` && searchInput !== '')
      {
        this.$router.push({
        name: 'Search',
        params: {
          searchInput,
        },
      });
      }
      this.searchInput = '';
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
  overflow: hidden;
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
  display: flex;
  margin: 10px 12px;
}
.left {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
#search-field {
  width: 30vw;
}
.right {
  align-self: flex-start;
  margin: 9px;
}
.toggle-nav {
  height: 110px;
}
.toggle {
  display: none; 
}
.btn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 0px 5px;
  cursor: pointer;
}
@media only screen and (max-width: 480px) {
  .left {
    flex-direction: column;
    align-self: flex-start;
  }
  .brand {
    align-self: flex-start;
  }
  .search-box {
    align-self: flex-start;
  }
  .toggle {
    display: inherit;
  }
}
@media only screen and (min-width: 481px){
  .my-nav {
    height: 52.67px;
  }
}
</style>
