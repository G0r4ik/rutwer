<template>
  <div class="popup-wrapper container bg-primary rounded py-3">
    <form class="create-post" @click.stop>
      <div class="mb-1">
        <label for="create-post-title" class="form-label">Заголовок</label>
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
        <label for="create-post-text " class="form-label">Текст</label>
        <textarea
          v-model="text"
          class="form-control"
          name="create-post-text"
          id="create-post-text"
          rows="3"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="create-post__date" class="create-post__text-date">
          Дата:
          <input
            v-model="date"
            type="date"
            class="form-control"
            name="create-post__date"
            id="create-post__date"
          />
        </label>
      </div>
      <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->

      <button
        class="create-post__button-add btn btn-light"
        @click.prevent="createNewPost"
      >
        Создать пост
      </button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '../../authentication'
import { usePostsStore } from '../store'

export default {
  data() {
    return {
      title: '',
      text: '',
      date: '',
      token: useAuthStore().token,
    }
  },
  computed: {
    isValidData() {
      return
    },
  },
  mounted() {
    this.date = new Date().toISOString().substring(0, 10)
  },
  methods: {
    createNewPost() {
      usePostsStore().createNewPost(
        this.token,
        this.title,
        this.text,
        this.date
      )
      this.title = ''
      this.text = ''
    },
  },
}
</script>
<style>
.popup-wrapper {
  margin-top: 70px;
}
/* .popup-wrapper {
  z-index: 50;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.create-post {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 15px;
  border-radius: 15px;
  position: relative;
  align-items: flex-start;
}
.create-post__close {
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
}
.create-post__title-label {
  width: 100%;
}
.create-post__title {
  color: black;
  background: rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 5px;
  border: none;
}
.create-post__text-label {
  display: flex;
}
.create-post__text {
  color: black;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
  border: none;
  resize: none;
}
.create-post__button-add {
  margin-top: 15px;
} */
</style>
