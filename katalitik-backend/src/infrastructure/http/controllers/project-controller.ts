import { initializeProjectUseCase } from "@infra/dependencies"
import { Request, Response } from "express"
import { createInitializeProjectController } from "../factories/initialize-project"

export class ProjectController {
	async develop(req: Request, res: Response): Promise<void> {
		await createInitializeProjectController(initializeProjectUseCase).bind(this)(req, res)
	}
}
