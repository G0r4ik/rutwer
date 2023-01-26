<script>
import AppHeader from './AppHeader/AppHeader.vue'
import AppCreatePost from './AppCreatePost/AppCreatePost.vue'
import AppPosts from './AppPosts/AppPosts.vue'
export default {
  components: { AppHeader, AppCreatePost, AppPosts },
  computed: {
    isShowPopupCreatePost() {
      return this.$store.getters.isShowPopupCreatePost
    },
  },
}
</script>

<template>
  <AppCreatePost v-if="isShowPopupCreatePost" />
  <AppHeader />
  <main class="main">
    <AppPosts />
  </main>
  <!-- <AppSignIn />
  <AppSignUp />
  <AppLogout />
    <AppPost />
    <AppComments />
  </AppPosts> -->
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #f2f2f2;
  color: #141619;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  height: 100vh;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color-scheme: light dark;
  /* color: rgba(255, 255, 255, 0.87); */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
}
.main {
  margin-top: 50px;
}
</style>
