import { FileArtifacts } from "@domain/file-artifacts"

export type Version = {
	repositoryId: string
	buildArtifacts: FileArtifacts
	sourceCodeArtifacts: FileArtifacts
}

export interface VersionControlService {
	init(): Promise<string>
	pull(repositoryId: string): Promise<Version>
	push(version: Version): Promise<void>
}
