import { Project } from "@domain/project"

export interface InitializeProjectUseCase {
	execute(accountId: string, folderName: string): Promise<Project>
}
