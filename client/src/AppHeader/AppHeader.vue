<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">Logo</div>
        <button class="header__create-post" @click="showPopupCreatePost">
          Создать пост
        </button>
        <AppLogout class="header__logout" />
      </div>
    </div>
  </header>
</template>

<script>
import AppLogout from '../AppLogout/AppLogout.vue'
export default {
  components: { AppLogout },
  methods: {
    showPopupCreatePost() {
      this.$store.commit('updateIsShowPopupCreatePost', true)
    },
  },
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #000;
}
.header__inner {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
