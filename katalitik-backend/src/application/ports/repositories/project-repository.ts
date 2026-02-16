import { Project } from "@domain/project"

export interface ProjectRepositoryPort {
	get(projectId: string): Promise<Project>
	getByAccountIdAndName(accountId: string, name: string): Promise<Project>
	save(project: Project): Promise<void>
}
