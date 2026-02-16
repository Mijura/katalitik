import { ProjectRepositoryPort } from "@app/ports/repositories/project-repository"
import { VersionControlService } from "@app/ports/services/version-control-service"
import { InitializeProjectUseCase } from "@app/ports/use-cases/initialize-project"
import { Project } from "@domain/project"

export class InitializeProject implements InitializeProjectUseCase {
	constructor(
		private projectRepository: ProjectRepositoryPort,
		private vcs: VersionControlService,
	) {}

	async execute(accountId: string, name: string): Promise<Project> {
		const existingProject = await this.projectRepository.getByAccountIdAndName(accountId, name)
		if (existingProject) {
			throw new Error(`Project ${name} already exists`)
		}

		const rootFolderPath = `${process.env.PROJECTS_FOLDER}/${accountId}/${name}`

		const project = Project.create(accountId, name, rootFolderPath)

		await this.projectRepository.save(project)

		return project
	}
}
