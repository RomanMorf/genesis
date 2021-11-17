const playerMixins = {
  data() {
    return {
      isPlay: false,
      loading: true,
    }
  },
  methods: {
    playToggle() {// переключает режим "PLAY" на "PAUSE", и наоборот
      if (this.isPlay) {
        this.playerPause()
      } else {
        this.playerPlay()
      }
    },
    mutedToggle() {// переключает режим "MUTE" (без звука)
      this.checkParams()

      if (this.muted) {
        this.$refs.video.muted = false
        this.muted = false
        this.$store.dispatch('SET_MUTED', false)
      } else {
        this.$refs.video.muted = true
        this.muted = true
        this.$store.dispatch('SET_MUTED', true)

      }
    },
    playerPlay() { // запускай проигрывание
      this.checkParams()
      this.$refs.video.play()
      this.isPlay = true
    },
    playerPause() { // ставит проигрыватель на паузу
      this.checkParams()
      this.$refs.video.pause()
      this.isPlay = false
    },
    setVolume() { // устанавливает уровень громкости
      const volumeValue = this.volume
      this.$refs.video.volume = volumeValue / 100
      this.$store.dispatch('SET_VOLUME', volumeValue)
    },
    checkParams() { // проверяет все параметры
      this.volume = this.VOLUME
      this.muted = this.MUTED
      this.$refs.video.volume = +this.VOLUME / 100
      this.$refs.video.muted = this.MUTED
    },
    hideLoader() {// прячет анимацию загрузки, после загрузки видео
      this.loading = false
    },

  },

};

export default playerMixins;
