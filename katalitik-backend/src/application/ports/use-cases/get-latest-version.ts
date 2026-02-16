import { FileArtifacts } from "@domain/file-artifacts"

export interface GetLatestVersionUseCase {
	execute(projectId: string): Promise<FileArtifacts>
}
