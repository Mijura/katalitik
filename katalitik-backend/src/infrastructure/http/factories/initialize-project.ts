import { InitializeProjectUseCase } from "@app/ports/use-cases/initialize-project"
import { Request, Response } from "express"

export function createInitializeProjectController(initializeProjectUseCase: InitializeProjectUseCase) {
	return async (req: Request, res: Response): Promise<void> => {
		const accountId = req.body.accountId
		if (!accountId) {
			throw new Error(`Account id is required`)
		}

		try {
			const project = await initializeProjectUseCase.execute(accountId)
			res.status(201).json(project)
		} catch (error) {
			console.error("Error during react project initialization:", error)
			res.status(500).json({ error: "Internal server error" })
		}
	}
}
