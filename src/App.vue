<template>
  <div id="app">
    <Header />
    <div class="main_body">  
      <SideBar />
      <div class="main_content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    Header,
    SideBar,
  },

  async mounted() {
    await this.$store.dispatch('GET_PLAYER_INFO')
  },
}
</script>

<style scoped lang="scss">

.main {
  &_body {
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
  }

  &_content {
    padding: 24px 0;
    margin-right: 24px;
    width: 692px;
    max-width: 692px;
  }
}

@media (max-width: 700px){
  .main {

    &_content {
      margin-right: 10px;
      margin-left: 10px;
      max-width: 500px;
    }
  }
}

</style>
