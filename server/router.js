
import { UserRoute } from './components/Auth/index.js'
import { PostsRoute } from './components/Posts/index.js'
import { CommentsRoute } from './components/Comments/index.js'
import Router from 'express'
const router = new Router()

router.use(PostsRoute)
router.use(UserRoute)
router.use(CommentsRoute)

export default router
