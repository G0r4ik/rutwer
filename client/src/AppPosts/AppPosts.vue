<template>
  <section class="posts">
    <div class="container">
      <div class="post__inner">
        <div v-for="post of posts" class="post__item post-item">
          <div class="post-item__top">
            <h3 class="post-item__title">{{ post.title }}</h3>
            <span class="post-item__date">{{ post.date }}</span>
          </div>
          <span class="post-item__text">{{ post.text }}</span>
          <span class="post-item__show-toolbar" @click="showPostToolbar">
            ...
          </span>
          <div v-if="isShowPostToolbar" class="post-item__show post-toolbar">
            <div class="post-toolbar__edit">Отредактировать</div>
            <div class="post-toolbar__delete" @click="deletePost(post)">
              Удалить
            </div>
          </div>
          <div class="post-item post-comment">
            <AppComments />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppComments from '../AppComments/AppComments.vue'
export default {
  components: {
    AppComments,
  },
  data() {
    return {
      isShowPostToolbar: false,
    }
  },
  computed: {
    posts() {
      return this.$store.getters.allPosts
    },
  },
  methods: {
    deletePost(post) {
      this.isShowPostToolbar = false
      this.$store.commit('deletePost', post)
    },
    showPostToolbar() {
      this.isShowPostToolbar = !this.isShowPostToolbar
    },
  },
}
</script>

<style>
.posts {
  /* width: 100%; */
}
.post__item {
  border: 1px solid black;
  width: 100%;
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
