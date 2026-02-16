import { projectController } from "@infra/dependencies"
import express, { Request, Response } from "express"

const router = express.Router()

router.post(
	"/project/initialization",
	async (req: Request, res: Response) => await projectController.initializeProject(req, res),
)

export { router as projectRoutes }
