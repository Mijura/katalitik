import { ProjectRepositoryPort } from "@app/ports/repositories/project-repository"
import { Project } from "@domain/project"

export class ProjectRepository implements ProjectRepositoryPort {
	save(project: Project): Promise<void> {
		throw new Error("Method not implemented.")
	}

	async get(projectId: string): Promise<Project> {
		throw new Error("Method not implemented.")
	}

	async getByAccountIdAndName(accountId: string, name: string): Promise<Project> {
		throw new Error("Method not implemented.")
	}
}
