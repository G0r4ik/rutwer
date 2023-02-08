<template>
  <div class="bg-primary p-1 rounded-1">
    <div class="d-flex comment-group">
      <div class="input-group-sm mb-1 comment-group__el">
        <input
          type="text"
          class="form-control i2 me-2"
          :name="'add-new-comment-author' + post.postID"
          :id="'add-new-comment-author' + post.postID"
          aria-describedby="helpId"
          placeholder="имя"
          v-model="commentAuthor"
        />
      </div>
      <div class="input-group-sm mb-1">
        <input
          type="date"
          class="form-control i3"
          :name="'add-new-comment-date' + post.postID"
          :id="'add-new-comment-date' + post.postID"
          aria-describedby="helpId"
          placeholder="дата"
          v-model="commentDate"
        />
      </div>
    </div>

    <div class="input-group-sm">
      <textarea
        class="form-control i1"
        placeholder="текст"
        :name="'add-new-comment-text' + post.postID"
        :id="'add-new-comment-text' + post.postID"
        rows="3"
        v-model="commentText"
      ></textarea>
    </div>
    <div class="btn btn-light mt-2" @click="addNewComment">Добавить</div>
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
.comment-group {
  width: 100%;
  padding-top: 5px;
}
.comment-group__el {
  width: 100%;
  margin-right: 10px;
}
.i1 {
  width: 100% !important;
}
.i2 {
  /* display: block; */
  /* width: auto !important; */
}
.i3 {
  width: 105px !important;
}
</style>
