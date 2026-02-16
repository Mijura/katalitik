import { ProjectRepositoryPort } from "@app/ports/repositories/project-repository"
import { VersionControlService } from "@app/ports/services/version-control-service"
import { InitializeProjectUseCase } from "@app/ports/use-cases/initialize-project"
import { InitializeProject } from "@app/use-cases/initialize-project"
import { ProjectRepository } from "@infra/repositories/project-repository"
import { JigJoyVersionControl } from "./services/jigjoy-vcs"
import { SaveVersion } from "@app/use-cases/save-file-artifacts"
import { GetLatestVersion } from "@app/use-cases/get-latest-version"
import { GetLatestVersionUseCase } from "@app/ports/use-cases/get-latest-version"
import { SaveVersionUseCase } from "@app/ports/use-cases/save-version"

export const projectRepository: ProjectRepositoryPort = new ProjectRepository()

export const versionControlService: VersionControlService = new JigJoyVersionControl()
export const initializeProjectUseCase: InitializeProjectUseCase = new InitializeProject(
	projectRepository,
	versionControlService,
)
export const getLatestVersionUseCase: GetLatestVersionUseCase = new GetLatestVersion(versionControlService)
export const saveVersionUseCase: SaveVersionUseCase = new SaveVersion(versionControlService)
