<template>
  <div class="slot_wrapper">
    <Loader v-if="loading"/>
    <video 
      @click="playToggle"
      @loadeddata="hideLoader"

      @mouseenter="playerPlay" 
      @mouseleave="playerPause"

      ref="video"
      loop
      class="slot_video" 
      :src="video.videoUrl"
    ></video>
    <span class="slot_text">{{ video.authorMeta.heart | short }}</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import playerMixins from '@/mixins/player.mixins.js'

export default {
  props: ['video'],
  computed: {
    ...mapGetters(['VOLUME', 'MUTED'])
  },
  mixins: [playerMixins],
  mounted() {
    this.checkParams()
  },
}
</script>

<style scoped lang='scss'>
.slot {
  &_wrapper {
    height: 300px;
    overflow: hidden;
    position: relative;
  }
  &_video {
    background-color: #000;
    object-fit: cover;
    object-position: 0px -30px;
    min-height: 300px;
    width: 200px;
  }
  &_text {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
    font-weight: bold;
  }
}

</style> 