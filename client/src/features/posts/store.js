import { defineStore } from 'pinia'
import api from './api'

export const usePostsStore = defineStore('postsStotre', {
  state: () => ({
    posts: [],
  }),
  actions: {
    // async addNewPost(token, post, comments) {},
    // api
    async createNewPost(token, title, text, date) {
      const post = await api.createPost(token, title, text, date)
      post.date = new Date(post.date).toLocaleString('ru-RU', {
        hour: '2-digit',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        minute: '2-digit',
      })
      this.posts.unshift(post)
    },

    async deletePost(token, post) {
      api.deletePost(token, post.postID)
      let index = this.posts.findIndex(post_ => post_.postID === post.postID)
      if (index > -1) this.posts.splice(index, 1)
    },
  },
})
