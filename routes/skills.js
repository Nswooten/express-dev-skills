import { Router } from 'express'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/users
// GET localhost:3000/todos
router.get('/', skillsCtrl.index)
router.get("/new", skillsCtrl.new)
router.get("/:skillId", skillsCtrl.show)
router.delete("/:skillId", skillsCtrl.delete)


router.post("/", skillsCtrl.create)

export { router }
