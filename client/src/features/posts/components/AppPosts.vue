<template>
  <section class="posts">
    <div class="container">
      <div class="post__inner">
        <div v-for="post of posts" class="post__item post-item">
          <PostsItem :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from '@/features/authentication/index.js'
// import { PostComments } from '@/features/comments/index.js'
import api from '../api.js'
import { usePostsStore } from '../store'
import PostsItem from './PostsItem.vue'

export default {
  components: {
    // PostComments,
    PostsItem,
  },
  data() {
    return {
      // posts: usePostsStore().posts,
      token: useAuthStore().token,
    }
  },
  computed: {
    posts() {
      return usePostsStore().posts
    },
  },
  async mounted() {
    const result = await api.getAllPosts(useAuthStore().token)
    const res = result.map(post => {
      post.date = new Date(post.date).toLocaleString('ru-RU', {
        hour: '2-digit',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        minute: '2-digit',
      })
      return post
    })
    usePostsStore().posts = res
  },
  methods: {},
}
</script>

<style>
.posts {
  margin-top: 75px;
  /* width: 100%; */
}
.post__item {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 100%;
  margin-bottom: 15px;
}
.post-item__top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.post-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 15px;
  padding-bottom: 5px;
  width: 100%;
}
.post-item__title {
  margin-right: 15px;
}
.post-item__text {
}
.post-item__date {
  font-size: 14px;
  margin-right: 20px;
}
.post-item__show-toolbar {
  cursor: pointer;
  position: absolute;
  font-size: 24px;
  top: 0;
  right: 10px;
}

.post-item__show {
  position: absolute;
}
.post-toolbar {
  background: gray;
  padding: 15px;
}
.post-toolbar__edit {
  cursor: pointer;
}
.post-toolbar__delete {
  cursor: pointer;
}
</style>
