import dotenv from "dotenv"
// Load environment variables from .env file
dotenv.config()

import { corsMiddleware } from "@infra/http/middleware/allow-requests"
import { projectRoutes } from "./routes/routes"
import express from "express"
import http from "http"

const app = express()

// Middlewares
app.use(corsMiddleware)
app.use(express.json())

// Routes
app.use("/", projectRoutes)

const server = http.createServer(app)

const port = process.env.PORT || 80
server.listen(port, () => {
	console.log(`Server running on port: ${port}`)
})
