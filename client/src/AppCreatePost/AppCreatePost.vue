<template>
  <div class="popup-wrapper" @click="closePopup">
    <form class="create-post" @click.stop>
      <div class="create-post__close" @click="closePopup">x</div>
      <label for="create-post__title-label" class="create-post__text-title">
        Заголовок:
        <input
          v-model="title"
          class="create-post__title"
          type="text"
          name="create-post__title"
          id="create-post__title"
        />
      </label>
      <label for="create-post__text" class="create-post__text-label">
        Текст:
        <textarea
          v-model="text"
          class="create-post__text"
          name="create-post__text"
          id="create-post__text"
          cols="35"
          rows="10"
        >
        </textarea>
      </label>
      <label for="create-post__date" class="create-post__text-date">
        Дата:
        <input
          v-model="date"
          type="date"
          name="create-post__date"
          id="create-post__date"
        />
      </label>
      <button class="create-post__button-add" @click.prevent="createNewPost">
        Создать пост
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      text: '',
      date: '',
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
    closePopup() {
      this.$store.commit('updateIsShowPopupCreatePost', false)
    },
    createNewPost() {
      const text = this.text
      const title = this.title
      const date = this.date
      const id = this.$store.getters.allPosts.at(-1)?.id + 1 || 1
      this.$store.commit('createNewPost', { text, title, date, id })
      this.title = ''
      this.text = ''
      this.date = ''
      this.$store.commit('updateIsShowPopupCreatePost', false)
    },
  },
}
</script>
<style>
.popup-wrapper {
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
}
</style>
