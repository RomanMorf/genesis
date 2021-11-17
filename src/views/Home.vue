<template>
  <div class="video">
    <div class="video_container">
      <Loader v-if="loading" />
      <Card 
        v-else
        v-for="item in TRENDING" 
        :key="item.id" 
        :item="item"
      />
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'

import {mapGetters} from 'vuex'

export default {
  name: 'Home',

  data() {
    return {
      loading: true,
    }
  },

  async mounted() {
    try {
      await this.$store.dispatch('GET_TRENDING_FEED')
      this.loading = false

    } catch (error) {
      console.log(error);
      throw error
    }
  },

  computed: {
    ...mapGetters(['VOLUME', 'MUTED', 'TRENDING'])
  },

  components: {
    Header,
    Card,
  },
}
</script>

<style scoped lang="scss">

</style>