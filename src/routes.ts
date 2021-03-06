import authRouter from './modules/auth/auth.controller'
import userRouter from './modules/users/users.controller'
import notificationsRouter from './modules/notifications/notifications.controller'
import { Router } from 'express'

const router = Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/notifications', notificationsRouter)

export default router