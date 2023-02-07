<template>
  <div class="post-item__top">
    <span class="d-block fs-2 mb-1">{{ post.user.username }}</span>
    <span class="post-item__date">{{ post.date }}</span>
  </div>
  <h3 class="post-item__title">{{ post.title }}</h3>
  <span class="post-item__text">{{ post.text }}</span>
  <div class="post-item__show-toolbar" v-if="post.user.userID === user.id">
    <div class="dropdown">
      <span type="button" data-bs-toggle="dropdown" aria-expanded="false">
        ...
      </span>
      <PostToolbar @editPost="editPost(post)" @deletePost="deletePost(post)" />
    </div>
  </div>

  <button
    class="btn btn-primary mt-4"
    @click="changeIsVisibleComment"
    @click.once="loadComments"
  >
    {{ showOrHide }}
  </button>
  <div
    v-if="isVisibleComment && isDownloadComment"
    class="post-comment border-top border-primary"
  >
    <PostComments :post="post" />
  </div>
  <teleport v-if="isEditPost" to="body">
    <PostEdit :post="post" @close="close" />
  </teleport>
</template>
<script>
import { useAuthStore } from '../../authentication'
import {
  PostComments,
  showAllComments,
  useCommentsStore,
} from '@/features/comments/index.js'
import { usePostsStore } from '../store'

import PostToolbar from './PostToolbar.vue'
import PostEdit from './PostEdit.vue'
export default {
  components: {
    PostToolbar,
    PostComments,
    PostEdit,
  },
  emits: ['setComments'],
  props: {
    post: Object,
  },
  data() {
    return {
      user: useAuthStore().user,
      token: useAuthStore().token,
      isVisibleComment: false,
      isDownloadComment: false,
      isEditPost: false,
    }
  },
  computed: {
    showOrHide() {
      this.isDownloadComment = true
      return this.isVisibleComment
        ? 'Скрыть комментарии'
        : 'Показать комменатрии'
    },
  },
  methods: {
    close() {
      console.log('da')
      this.isEditPost = false
    },
    async loadComments() {
      const comments = await showAllComments(this.token, this.post.postID)
      const posts = usePostsStore().posts
      useCommentsStore().setComments(posts, this.post, comments)
    },
    changeIsVisibleComment() {
      this.isVisibleComment = !this.isVisibleComment
    },
    editPost(post) {
      this.isEditPost = true
    },
    deletePost(post) {
      usePostsStore().deletePost(this.token, post)
    },
  },
}
</script>

<style>
.post-item__show-toolbar {
  position: absolute;
  right: 0;
}
.c {
  width: 100%;
  margin-top: 15px;
}
</style>
