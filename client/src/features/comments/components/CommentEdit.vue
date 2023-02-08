<template>
  <div class="edit-comment shadow p-3">
    <h4>Редактирование комментария</h4>
    <button
      @click="$emit('close')"
      type="button"
      class="btn-close edit-comment-close"
      aria-label="Close"
    ></button>
    <div class="mb-3">
      <input
        type="text"
        class="form-control form-control-sm"
        name="edit-comment-author"
        id="edit-comment-author"
        aria-describedby="helpId"
        placeholder="Автор"
        v-model="author"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control form-control-sm"
        name="edit-comment-text"
        id="edit-comment-text"
        aria-describedby="helpId"
        placeholder="Текст комментария"
        v-model="text"
      />
    </div>
    <div class="mb-3">
      <input
        type="date"
        v-model="date"
        class="form-control form-control-sm"
        name="edit-comment-text"
        id="edit-comment-text"
        aria-describedby="helpId"
      />
    </div>
    <button class="btn btn-primary" @click="editComment">Изменить</button>
  </div>
</template>
<script>
import { usePostsStore } from '@/features/posts/index.js'
import { toHandlers } from 'vue'
import api from '../api'

export default {
  props: ['comment', 'post'],
  emits: ['close'],
  data() {
    return {
      author: this.comment.author,
      text: this.comment.text,
      date: null,
      token: localStorage.getItem('authToken'),
    }
  },
  mounted() {},
  methods: {
    async editComment() {
      const updatedComment = await api.updateComment(
        this.token,
        this.comment.id,
        this.post.postID,
        this.text,
        this.author,
        this.date
      )
      const post = usePostsStore().posts.find(t => t.postID == this.post.postID)
      const idx = post.comments.findIndex(p => {
        return p.id === this.comment.id
      })
      if (idx > -1) post.comments.splice(idx, 1, updatedComment)
      this.$emit('close')
    },
  },
  //
}
</script>

<style>
.edit-comment {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background: white;
}
.edit-comment-close {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
