<template>
  <div class="post-item">
    <div class="post-item__top">
      <span class="d-block fs-2 mb-1">{{ post.user.username }}</span>
      <span class="post-item__date">{{ post.date }}</span>
    </div>
    <h3 class="post-item__title">{{ post.title }}</h3>
    <span class="post-item__text">{{ post.text }}</span>
    <div class="post-item__dropdown-wrapper">
      <PostToolbar
        v-if="post.user.userID === user.id"
        @editPost="editPost(post)"
        @deletePost="deletePost(post)"
      />
    </div>
    <button class="btn btn-primary mt-1" @click="loadComments">
      {{ showOrHide }}
    </button>
    <div class="comment-wrapper mt-2">
      <!-- <PostComments v-if="isVisibleComment && isDownloadComment" :post="post" /> -->
    </div>
    <teleport v-if="isEditPost" to="body">
      <PostEdit :post="post" @close="close" />
    </teleport>
  </div>
</template>

<script>
import { useAuthStore } from '@/features/authorization'
import {
  PostComments,
  showAllComments,
  useCommentsStore,
} from '@/features/comments/index.js'
import { usePostsStore } from '../store'

import PostToolbar from './PostToolbar.vue'
import PostEdit from './PostEdit.vue'
export default {
  //
  components: { PostToolbar, PostEdit, PostComments },
  props: { post: Object },
  data() {
    return {
      isVisibleComment: false,
      isDownloadComment: false,
      isEditPost: false,
    }
  },
  computed: {
    showOrHide() {
      this.isVisibleComment = true
      return this.isVisibleComment
        ? 'Скрыть комментарии'
        : 'Показать комменатрии'
    },
    user() {
      return useAuthStore().user
    },
  },
  methods: {
    close() {
      this.isEditPost = false
    },
    async loadComments() {
      this.isVisibleComment = !this.isVisibleComment
      if (this.isDownloadComment) return
      const comments = await showAllComments(this.post.postID)
      const posts = usePostsStore().posts
      useCommentsStore().setComments(posts, this.post, comments)
      this.isDownloadComment = true
    },

    editPost() {
      this.isEditPost = true
    },
    deletePost(post) {
      usePostsStore().deletePost(post)
    },
  },
}
</script>

<style>
.post-item__top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.post-item {
}
.post-item {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  margin-bottom: 15px;
  background: lightskyblue;
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
.post-item__show {
  position: absolute;
}
.post-item__dropdown-wrapper {
  position: absolute;
  right: 10px;
  top: 10 px;
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
.post-item__show-toolbar {
  position: absolute;
  right: 0;
}
.c {
  width: 100%;
  margin-top: 15px;
}
.comment-wrapper {
  width: 100%;
}
</style>
