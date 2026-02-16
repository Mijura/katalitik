import { VersionControlService } from "@app/ports/services/version-control-service"
import { PlatformSDK } from "@jigjoy-ai/platform-sdk"

export class JigJoyVersionControl implements VersionControlService {
	private readonly jigjoyClient: PlatformSDK
	constructor() {
		const JIGJOY_API_ENDPOINT = process.env.JIGJOY_API_ENDPOINT || ""
		this.jigjoyClient = new PlatformSDK(`${JIGJOY_API_ENDPOINT}`)
	}

	async init(): Promise<string> {
		return await this.jigjoyClient.versioning.initializeProjectHistory()
	}

	async pull(repositoryId: string): Promise<Version> {
		const response = await this.jigjoyClient.versioning.getLatestVersion(repositoryId)

		const version: Version = {
			repositoryId: response.projectHistoryId,
			buildArtifacts: response.buildArtifacts,
			sourceCodeArtifacts: response.sourceCodeArtifacts,
		}

		return version
	}

	async push(version: Version): Promise<void> {
		const versionDTO = {
			projectHistoryId: version.repositoryId,
			buildArtifacts: version.buildArtifacts,
			sourceCodeArtifacts: version.sourceCodeArtifacts,
		}
		await this.jigjoyClient.versioning.saveVersion(versionDTO)
	}
}
