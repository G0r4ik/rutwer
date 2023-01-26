import Router from 'express'
const router = new Router()
import controller from './controller.js'

router.post('/register', controller.registerUser)
router.post('/login', controller.loginUser)
router.post('/logout', controller.logoutUser)

router.post('/post', controller.addPost)
router.get(`/post/*`, controller.getPostById)
router.post(`/post/update/*`, controller.postUpdateById)
router.delete(`/post/*`, controller.deletePostById)
router.get(`/post/search/*`, controller.searchPost)

router.post(`/post/*/comment`, controller.addComment)
router.post(`/post/*/comment/update/*`, controller.updateComment)
router.delete(`/post/*/comment/*`, controller.deleteComment)
router.get(`/post/*/comment/*`, controller.showAllComments)

export default router
