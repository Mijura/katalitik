import { VersionControlService } from "@app/ports/services/version-control-service"
import { GetLatestVersionUseCase } from "@app/ports/use-cases/get-latest-version"
import { FileArtifacts } from "@domain/file-artifacts"

export class GetLatestVersion implements GetLatestVersionUseCase {
	constructor(private vcs: VersionControlService) {}

	async execute(projectId: string): Promise<FileArtifacts> {
		const version = await this.vcs.pull(projectId)
		return version.sourceCodeArtifacts
	}
}
