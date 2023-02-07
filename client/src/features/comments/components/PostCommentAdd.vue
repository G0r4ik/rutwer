<template>
  <div class="">
    <input
      type="text"
      class="form-control i2 mb-1"
      :name="'add-new-comment-author' + post.postID"
      :id="'add-new-comment-author' + post.postID"
      aria-describedby="helpId"
      placeholder="имя"
      v-model="commentAuthor"
    />

    <textarea
      class="form-control i1 mb-1"
      placeholder="текст"
      :name="'add-new-comment-text' + post.postID"
      :id="'add-new-comment-text' + post.postID"
      rows="3"
      v-model="commentText"
    ></textarea>
    <input
      type="date"
      class="form-control i3 mb-1"
      :name="'add-new-comment-date' + post.postID"
      :id="'add-new-comment-date' + post.postID"
      aria-describedby="helpId"
      placeholder="дата"
      v-model="commentDate"
    />
    <div class="btn btn-primary ms-2" @click="addNewComment">Добавить</div>
  </div>
</template>

<script>
import { usePostsStore } from '@/features/posts/index.js'
import { useAuthStore } from '@/features/authentication/index.js'
import api from '../api'

export default {
  props: {
    post: Object,
  },
  data() {
    return {
      commentText: '',
      commentAuthor: '',
      token: useAuthStore().token,
      commentDate: new Date().toISOString().substring(0, 10),
    }
  },
  methods: {
    async addNewComment() {
      const comment = await api.addComment(
        this.token,
        this.post.postID,
        this.commentText,
        this.commentAuthor,
        this.commentDate
      )

      usePostsStore()
        .posts.find(p => p.postID === this.post.postID)
        .comments.push(comment)
      this.commentText = ''
    },
  },
}
</script>
<style>
.i1 {
  width: 100% !important;
}
.i2 {
  width: 250px !important;
}
.i3 {
  width: 150px !important;
}
</style>
