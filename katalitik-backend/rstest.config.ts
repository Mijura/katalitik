import { defineConfig } from "@rstest/core"
import dotenv from "dotenv"

dotenv.config({ path: ".env.test" })

export default defineConfig({
	testEnvironment: "node",
	root: "./",
	coverage: {
		enabled: true,
	}
})
