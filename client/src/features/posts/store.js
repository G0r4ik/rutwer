import { defineStore } from 'pinia'
import api from './api'
import { normalizeDate } from '@/shared/helpers'
export const usePostsStore = defineStore('postsStotre', {
  state: () => ({
    posts: [],
  }),
  actions: {
    // async addNewPost(token, post, comments) {},
    // api
    async createNewPost(token, title, text, date) {
      const post = await api.createPost(token, title, text, date)
      post.date = normalizeDate(post.date)
      this.posts.unshift(post)
    },

    async deletePost(token, post) {
      api.deletePost(token, post.postID)
      let index = this.posts.findIndex(post_ => post_.postID === post.postID)
      if (index > -1) this.posts.splice(index, 1)
    },
  },
})
