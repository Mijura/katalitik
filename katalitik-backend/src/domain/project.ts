import { v4 as uuidv4 } from "uuid"

export class Project {
	constructor(
		public readonly id: string,
		public readonly accountId: string,
		public readonly name: string,
		public readonly createdAt: string,
		public readonly rootFolderPath: string,
	) {}

	static create(accountId: string, name: string, rootFolderPath: string): Project {
		const currentDate = new Date().toISOString()
		const id = uuidv4()
		return new Project(id, accountId, name, currentDate, rootFolderPath)
	}
}
