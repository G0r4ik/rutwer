<template>
  <div class="posts-create container py-2">
    <form class="create-post" @click.stop>
      <div class="mb-1">
        <label for="create-post-title">Заголовок:</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          name="create-post-title"
          id="create-post-title"
          aria-describedby="helpId"
          placeholder="Заголовок"
        />
      </div>

      <div class="mb-1">
        <label for="create-post-text">Текст:</label>
        <textarea
          v-model="text"
          class="form-control"
          name="create-post-text"
          id="create-post-text"
          placeholder="Текст"
          rows="3"
        ></textarea>
      </div>

      <div class="">
        <label for="create-post__date" class="create-post__text-date">
          Дата:
        </label>
        <input
          v-model="date"
          type="date"
          class="form-control"
          name="create-post__date"
          id="create-post__date"
        />
      </div>

      <small class="text-danger fs-4 d-block my-2">{{ error }} </small>
      <button
        class="create-post__button-add btn btn-primary"
        @click.prevent="createNewPost"
      >
        Создать пост
      </button>
    </form>
  </div>
</template>

<script>
import api from '../api'
import { usePostsStore } from '../store'

export default {
  data() {
    return {
      title: '',
      text: '',
      date: new Date().toISOString().substring(0, 10),
      error: '',
    }
  },
  methods: {
    async createNewPost() {
      const result = await api.createPost(this.title, this.text, this.date)
      if (result.error) {
        this.error = result.error.message
      } else {
        usePostsStore().createNewPost(result)
        this.title = ''
        this.text = ''
      }
    },
  },
}
</script>
<style>
.posts-create {
  background: lightskyblue;
  margin-top: 70px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
</style>
