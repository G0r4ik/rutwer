<template>
  <div class="edit-post shadow p-3">
    <h4>Редактирование поста</h4>
    <button
      @click="$emit('close')"
      type="button"
      class="btn-close edit-post-close"
      aria-label="Close"
    ></button>
    <div class="mb-3">
      <input
        type="text"
        class="form-control form-control-sm"
        name="edit-post-title"
        id="edit-post-title"
        aria-describedby="helpId"
        placeholder="Заголовок поста"
        v-model="title"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control form-control-sm"
        name="edit-post-text"
        id="edit-post-text"
        aria-describedby="helpId"
        placeholder="Текст поста"
        v-model="text"
      />
    </div>
    <div class="mb-3">
      <input
        type="date"
        v-model="date"
        class="form-control form-control-sm"
        name="edit-post-text"
        id="edit-post-text"
        aria-describedby="helpId"
      />
    </div>
    <button class="btn btn-primary" @click="editPost">Изменить</button>
  </div>
</template>
<script>
import api from '../api'
import { usePostsStore } from '../store'

export default {
  props: {
    post: Object,
  },
  emits: ['close'],
  data() {
    return {
      title: this.post.title,
      text: this.post.text,
      date: new Date(this.post.date).toISOString().substring(0, 10),

      token: localStorage.getItem('authToken'),
    }
  },
  mounted() {
    // this.date = new Date().toISOString().substring(0, 10)
  },
  methods: {
    async editPost() {
      const updaterdPost = await api.updatePost(
        this.token,
        this.post.postID,
        this.title,
        this.text,
        this.date
      )

      const idx = usePostsStore().posts.findIndex(p => p.postID === this.postID)
      if (idx > -1) usePostsStore().posts.splice(idx, 1, updaterdPost)

      this.$emit('close')
    },
  },
}
</script>

<style>
.edit-post {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background: white;
}
.edit-post-close {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
