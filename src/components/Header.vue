<template>
  <div class="header_container">
    <div class="header_content">
      <div class="header_logo">
        <a @click="$router.push('/')">
          <img src="@/assets/logo.svg" alt="tiktok-logo">
        </a>
      </div>
      <div class="header_search">
        <form class="header_form">
          <input type="text" class="header_input" placeholder="Поиск аккаунтов и видео">
          <span class="header_input-split"></span>
          <button class="header_input-btn">
            <svg class="header-input-svg" width="24" height="24" viewBox="0 0 48 48" fill="rgba(22, 24, 35, 0.3">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"></path>
            </svg>
          </button>
        </form>
      </div>
      <div class="header_menu">
        <div class="header_upload">
          <span>Загрузить</span>
        </div>
        <button class="header_login">Войти</button>
        <div class="header_icon">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
.header {

  &_container {
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid rgba(34,90,89,0.2);
    box-sizing: border-box;
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &_content {
    width: 100%;
    padding: 0;
    max-width: 1100px;
    padding-left: 20px;
    padding-right: 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &_logo {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
  }

  &_search {
    display: block;
  }

  &_form {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 12px 16px;
    background: rgba(22,24,35,0.06);
    border-radius: 92px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  &_input {
    font-weight: 400;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    width: 292px;
    caret-color: #fe2c55;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    &-split {
      width: 1px;
      height: 28px;
      margin: -3px 0;
      background: rgba(22,24,35,0.12);
    }

    &-btn {
      padding: 11px 16px 11px 12px;
      margin: -12px -16px;
      margin-left: 0;
      font-size: 0;
      cursor: pointer;
      outline: none;
      border: none;
      background: transparent;
    }
    &-svg {
      width: 24;
      height: 24;
      fill: rgba(22, 24, 35, 0.34);
    }

  }

  &_menu {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;      
  }

  &_upload {
    cursor: pointer;
  }

  &_login {
    font-weight: 700;
    min-width: 100px;
    margin-left: 16px;
    background-color: #fe2c55;
    color: #fff;
    border: none;  
    line-height: 22px;
    user-select: none;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-transition: all 0.2s cubic-bezier(0.65,0,0.35,1);
    transition: all 0.2s cubic-bezier(0.65,0,0.35,1);
  } 

  &_icon {
    cursor: pointer;
    height: 20px;
    margin-left: 16px;
  }
}


@media (max-width: 750px) { 
  .header {
    &_search {
      display: none;
    }
  }
}

@media (max-width: 480px) { 
  .header {
    &_upload {
      display: none;
    }
  }
}
</style>
