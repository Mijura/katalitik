import { VersionControlService } from "@app/ports/services/version-control-service"
import { SaveVersionUseCase } from "@app/ports/use-cases/save-version"
import { FileArtifacts } from "@domain/file-artifacts"

export class SaveVersion implements SaveVersionUseCase {
	constructor(private vcs: VersionControlService) {}

	async execute(projectId: string, fileArtifacts: FileArtifacts): Promise<void> {
		const version = await this.vcs.pull(projectId)
		version.sourceCodeArtifacts = fileArtifacts
		await this.vcs.push(version)
	}
}
