<template>
  <section class="posts">
    <div class="container">
      <PostsItem v-for="post of posts" :post="post" />
    </div>
  </section>
</template>

<script>
import PostsItem from './PostsItem.vue'
import api from '../api.js'
import { usePostsStore } from '../store'

export default {
  components: { PostsItem },
  computed: {
    posts() {
      return usePostsStore().posts
    },
  },
  async mounted() {
    const posts = await api.getAllPosts()
    usePostsStore().setPosts(posts)
  },
}
</script>

<style>
.posts {
  margin-top: 75px;
}
</style>
