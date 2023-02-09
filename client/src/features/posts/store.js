import { defineStore } from 'pinia'
import api from './api'
import { normalizeDate } from '@/shared/helpers'

export const usePostsStore = defineStore('postsStotre', {
  state: () => ({
    posts: [],
  }),
  actions: {
    async createNewPost(post) {
      post.date = normalizeDate(post.date)
      this.posts.unshift(post)
    },

    async deletePost(post) {
      api.deletePost(post.postID)
      let index = this.posts.findIndex(post_ => post_.postID === post.postID)
      if (index > -1) this.posts.splice(index, 1)
    },

    setPosts(posts) {
      const truePosts = posts.map(post => {
        return { ...post, date: normalizeDate(post.date) }
      })
      this.posts = truePosts
    },
  },
})
