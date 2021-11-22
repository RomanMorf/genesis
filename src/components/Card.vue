<template>
  <div 
    class="card"  
    :id="'card-' + item.id"
  >
    <a class="card_link" @click="$router.push('/profile/' + item.authorMeta.name )">
      <img class="card_avatar" :src="item.authorMeta.avatar" alt="user avatar">
    </a>
    <button class="card_subscribe">Подписаться</button>
    <div class="card_body">
      <div class="card_autor">
        <h3 @click="$router.push('/profile/' + item.authorMeta.name )">{{ item.authorMeta.name }}</h3>
        <span v-if="item.authorMeta.verified">
          <svg class="verified jsx-4013687392" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path>
            <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path>
          </svg>
        </span>
        <h4>{{ item.authorMeta.nickName }}</h4>
      </div>
      <div class="card_meta-video">
        <span class="card_meta-text" >{{ cardText }}</span>
        <span class="card_meta-hashtag" v-for="hashtag in item.hashtags" :key="hashtag.id">#{{ hashtag.name }}</span>
      </div>
      <div class="card_meta-audio">
        <svg class="music-icon" width="18" height="18" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="transform: translateY(4px);"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"></path></svg>
        <span class="card_meta-audio-info">
          <span v-if="item.musicMeta.musicName === 'original sound'" class="card_meta-audio-name">оригинальная песня</span> 
          <span v-else>{{ item.musicMeta.musicName }}</span> 
          <span class="card_meta-audio-autor"> - {{ item.musicMeta.musicAuthor }}</span>
        </span>
      </div>
      <div class="card_video">
        <div class="card_video-wrapper">
          <Loader v-if="loading"/>
          <video 
            ref="video"
            loop
            class="card_video-item" 
            :src="item.videoUrl"
            @click="playToggle"
            @loadeddata="hideLoader"
          ></video>
          <span @click="mutedToggle" class="card_video-muted">
            <svg v-if="MUTED" width="24" height="24" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929 18.1213Z"></path></svg>
            <svg  v-if="!MUTED" width="24" height="24" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"></path></svg>          
          </span>
          <input class="card_video-volume" v-model="volume" type="range" min="0" max="100" @change="setVolume">
          <span v-if="!isPlay" class="card_video-btn" @click="playerPlay">
            <svg class="toggle-inner" width="20" height="20" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"></path>
            </svg>
          </span>
          <span v-if="isPlay" class="card_video-btn" @click="playerPause">
            <svg class="toggle-inner" width="20" height="20" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M8 6C8 5.44771 8.44772 5 9 5H17C17.5523 5 18 5.44772 18 6V42C18 42.5523 17.5523 43 17 43H9C8.44772 43 8 42.5523 8 42V6Z"></path><path d="M30 6C30 5.44771 30.4477 5 31 5H39C39.5523 5 40 5.44772 40 6V42C40 42.5523 39.5523 43 39 43H31C30.4477 43 30 42.5523 30 42V6Z"></path>
            </svg>
          </span>
          <div class="card_video-actions">
            <div class="card_video-actions-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#HeartFill_clip0)"><g filter="url(#HeartFill_filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.40179 12.1998C3.58902 14.6966 5.7592 16.9269 7.74989 18.75C9.5504 20.3989 10.9999 21.5 11.9999 21.5C12.9999 21.5 14.4094 20.4072 16.2499 18.75C19.231 16.0657 22.4999 12.5 22.4999 8.49997C22.4999 8.41258 22.4983 8.32566 22.4952 8.23923C20.5671 13.6619 13.6787 18.5 11.75 18.5C10.3127 18.5 5.61087 15.8131 2.40179 12.1998Z" fill-opacity="0.03"></path></g><defs><filter id="HeartFill_filter0_d" x="-0.9" y="1.05" width="25.8" height="24.05" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.2"></feOffset><feGaussianBlur stdDeviation="1.2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><clipPath id="HeartFill_clip0"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
            </div>
            <span class="card_video-actions-text">
              {{ item.authorMeta.heart | short}}
            </span>
            <div class="card_video-actions-btn">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#BubbleEllipsisRightFill_clip0)"><g opacity="0.9" filter="url(#BubbleEllipsisRightFill_filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0393 14.7137C17.75 13 18.75 11.215 18.75 9.13662C18.75 4.91897 14.8887 1.49997 10.125 1.49997C5.36129 1.49997 1.5 4.91897 1.5 9.13675C1.5 13.3545 5.48622 16.25 10.25 16.25V17.6487C10.25 18.0919 10.7095 18.3771 11.0992 18.1659C12.3166 17.5062 14.5725 16.183 16.0393 14.7137ZM5.93527 8.10679C6.61608 8.10679 7.16797 8.65471 7.16797 9.32962C7.16797 10.0059 6.61608 10.5538 5.93527 10.5538C5.2556 10.5538 4.70368 10.0059 4.70368 9.32962C4.70368 8.65471 5.2556 8.10679 5.93527 8.10679ZM11.3572 9.32962C11.3572 8.65471 10.8055 8.10679 10.125 8.10679C9.44459 8.10679 8.89289 8.65471 8.89289 9.32962C8.89292 10.0059 9.44462 10.5538 10.125 10.5538C10.8055 10.5538 11.3572 10.0059 11.3572 9.32962ZM14.3146 8.10679C14.9953 8.10679 15.5464 8.65471 15.5464 9.32962C15.5464 10.0059 14.9953 10.5538 14.3146 10.5538C13.6339 10.5538 13.082 10.0059 13.0821 9.32962C13.0821 8.65471 13.6339 8.10679 14.3146 8.10679Z"></path></g><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M10.25 16.2499C10.25 16.2499 15.0278 15.8807 17.025 13.3234C15.0278 16.1364 13.0307 17.6708 11.2831 18.1822C9.53561 18.6937 10.25 16.2499 10.25 16.2499Z" fill="url(#BubbleEllipsisRightFill_paint0_linear)"></path></g><defs><filter id="BubbleEllipsisRightFill_filter0_d" x="0.5" y="1.49997" width="19.25" height="18.737" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><linearGradient id="BubbleEllipsisRightFill_paint0_linear" x1="8.50426" y1="15.6957" x2="9.29499" y2="18.1805" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-opacity="0.01"></stop></linearGradient><clipPath id="BubbleEllipsisRightFill_clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>            </div>
            <span class="card_video-actions-text">
              {{ item.commentCount | short}}
            </span>
            <div class="card_video-actions-btn">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#PCShare_clip0)"><g opacity="0.9" filter="url(#PCShare_filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9376 3.17495C10.9376 2.58272 11.6469 2.27873 12.0758 2.68715L18.6021 8.90241C19.1764 9.44937 19.1564 10.3717 18.5588 10.8931L12.0541 16.5689C11.6184 16.9491 10.9376 16.6397 10.9376 16.0614V13.4894C10.9376 13.4894 3.95344 12.2312 1.7131 16.3434C1.50423 16.7268 0.690072 16.8609 0.855563 14.948C1.54761 11.4273 2.96196 5.93084 10.9376 5.93084V3.17495Z"></path></g><path opacity="0.03" fill-rule="evenodd" clip-rule="evenodd" d="M15.7538 6.21161L17.0486 8.80136C17.2777 9.25947 17.1677 9.81453 16.7812 10.1506L10.9824 15.193C10.9824 15.193 10.7017 16.5964 11.5437 16.5964C12.3857 16.5964 19.1218 10.4217 19.1218 10.4217C19.1218 10.4217 19.4025 9.57964 18.5605 8.73763C17.7185 7.89563 15.7538 6.21161 15.7538 6.21161Z"></path><path opacity="0.09" fill-rule="evenodd" clip-rule="evenodd" d="M10.9374 6.22983V13.5272C10.9374 13.5272 4.25359 12.5854 2.16026 15.7726C0.146021 18.8394 0.331011 12.3091 3.36331 9.05711C6.39561 5.8051 10.9374 6.22983 10.9374 6.22983Z" fill="url(#PCShare_paint0_radial)"></path></g><defs><filter id="PCShare_filter0_d" x="-0.166473" y="2.5" width="20.1867" height="16.2363" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><radialGradient id="PCShare_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.1827 18.2553) rotate(-113.046) scale(8.93256 8.78076)"><stop></stop><stop offset="0.995496" stop-opacity="0.01"></stop><stop offset="1" stop-opacity="0.01"></stop></radialGradient><clipPath id="PCShare_clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
            </div>
            <span class="card_video-actions-text">
              {{ item.shareCount | short}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

// звгружаем миксины
import playerMixins from '@/mixins/player.mixins.js'

export default {
  name: 'card',
  props: {
    item: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      volume: 30,
      muted: false,
      htmlElem: null,
    }
  },
  methods: {
    startStopPlay() {
      let startStopLine = (window.innerHeight * 0.25) + window.scrollY;
      if (startStopLine < this.htmlElem.offsetTop && startStopLine < this.htmlElem.offsetTop + this.htmlElem.offsetHeight) {
        if (!this.isPlay) {
          return
        } else {
          this.playerStop()
        }
      } else if (startStopLine > this.htmlElem.offsetTop && startStopLine > this.htmlElem.offsetTop + this.htmlElem.offsetHeight) {
        if (!this.isPlay) {
          return
        } else {
          this.playerStop()
        }
      } else if (startStopLine > this.htmlElem.offsetTop && startStopLine < this.htmlElem.offsetTop + this.htmlElem.offsetHeight) {
        if (this.isPlay ) {
          return
        } else if (this.isPause) {
          return
        } else {
          this.playerPlay()
        }
      }
    }
  },
  mixins: [playerMixins],
  computed: {
    cardText() { // текст без хештегов
      const arr = this.item.text.split('#')
      return arr[0]
    },
    ...mapGetters(['VOLUME', 'MUTED']),
  },

  mounted() {
    this.checkParams()
    this.htmlElem = document.querySelector(`#card-${this.item.id}`)

    document.addEventListener('scroll', ()=> {
      this.startStopPlay()
    })
  },
}
</script>

<style scoped lang='scss'>
.card {
  position: relative;
  
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      left: 16px;
      right: 16px;
      background: rgba(22,24,35,0.12);
      -webkit-transform: scaleY(0.5);
      -ms-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }

  &_link {
    cursor: pointer;
  }

  &_avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 0;
  }

  &_subscribe {
    position: absolute;
    background: #fff;
    border: 1px solid #fe2c55;
    color: #fe2c55;
    right: 10px;
    top: 20px;
    transition: all .3s ease;
    border-radius: 3px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    min-width: 88px;
    padding: 0px 10px;
    cursor: pointer;

    &:hover {
      transition: all .3s ease;
      background-color: #fe2c5623;
    }
  }

  &_body {
    margin-left: 70px;
    max-width: 692px;
    padding: 20px 0;
  }

  &_autor {
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 150px;

    h3 {
      margin: 0;    
      margin-right: 5px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }

    }
    span {
      margin-right: 5px;
    }
    h4 {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin: 0px;
      cursor: pointer;
    }
  }

  &_meta {
    &-video {
      word-break: break-word;
      margin-right: 150px;
    } 

    &-hashtag {
      margin-right: 5px;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #000;
      }
    }

    &-text {
      margin-right: 5px;
    }

    &-audio {
      overflow: hidden;
      display: inline-block;
      position: relative;
      cursor: pointer;

      svg {
        margin-right: 5px;
      }

      span:hover {
        border-bottom: 1px solid #000;
      }

    } 
  }

  &_video {
    &-wrapper {
      display: inline-block;
      position: relative;
    }

    &-item {
      border-radius: 5px;
      cursor: pointer;
      width: calc(0.56 * (450px + ((100vw - 480px) / 288) * 70));
      &:hover ~ .card_video-muted {
        opacity: 1;
        transition: all 0.3s ease;
      }
      &.loading {
        background: black url(/assets/img/loading.gif) center center no-repeat;
      }
    }

    &-btn {
      position: absolute;
      bottom: 20px;
      left: 20px;
      cursor: pointer;
    }
    &-volume {
      position: absolute;
      right: -17px;
      bottom: 90px;
      width: 100px;
      background-color: transparent;
      transform: rotateZ(270deg);
      transition: all 0.3s ease;
      opacity: 0;

      &:hover {
        opacity: 1;
        transition: all 0.3s ease;
      }
    }
    &-muted {
      position: absolute;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
      opacity: 0;
      transition: all 0.3s ease;
      &:hover ~ .card_video-volume {
        opacity: 1;
        transition: all 0.3s ease;

      }

      &:hover {
        opacity: 1;
        transition: all 0.3s ease;
      }

    }

    &-actions {
      position: absolute;
      right: -62px;
      bottom: 10px;
      display: flex;
      flex-direction: column;

      &-btn {
        padding: 5px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: rgba(22, 24, 35, 0.06);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      &-text {
        margin: 10px 0;
        max-width: 55px;
        font-size: 14px;
        font-weight: 300;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
      }
    }
  }

}

@media (max-width: 600px){
  .card {
    &_body { 
      margin-left: 0px;
      max-width: 692px;
      padding: 70px 0 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    &_avatar {
      top: 0;
      left: calc(50% - 100px);
    }
    &_autor {
      margin-right: 0;
    }
    &_meta-video {
      margin-right: 0;
    }
  }
}



</style> 