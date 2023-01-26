import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isAuth: false,
      isShowPopupCreatePost: false,
      allPosts: [],
      newIdForPost: localStorage.getItem('newIdForPost') || 0,
    }
  },
  getters: {
    allPosts(state) {
      return state.allPosts
    },
    isAuth(state) {
      return state.isAuth
    },
    isShowPopupCreatePost(state) {
      return state.isShowPopupCreatePost
    },
    newIdForPost(state) {
      return state.newIdForPost
    },
  },
  mutations: {
    incrementNewIdForPost() {},
    updateIsShowPopupCreatePost(state, status) {
      state.isShowPopupCreatePost = status
    },
    createNewPost(state, post) {
      const newPost = {
        id: post.id,
        title: post.title,
        text: post.text,
        date: post.date,
      }
      state.allPosts.push(newPost)
    },
    deletePost(state, post) {
      console.log('delete', post)
      state.allPosts = state.allPosts.filter(postItem => {
        return post.id !== postItem.id
      })
    },
  },
})

export default store
