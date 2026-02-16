import { FileArtifacts } from "@domain/file-artifacts"

export interface SaveVersionUseCase {
	execute(projectId: string, fileArtifacts: FileArtifacts): Promise<void>
}
