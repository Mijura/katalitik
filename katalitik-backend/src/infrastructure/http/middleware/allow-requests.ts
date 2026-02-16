import { Request, Response, NextFunction } from "express"

export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*") // Allow requests from any origin
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS") // Include OPTIONS
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization") // Allow these headers

	// Check if the request is for SSE by inspecting the URL or headers
	if (req.headers.accept && req.headers.accept.includes("text/event-stream")) {
		console.log("Handling SSE request...")

		// Set CORS headers for SSE
		res.header("Access-Control-Expose-Headers", "Content-Length, X-Accel-Buffering")
		res.header("X-Accel-Buffering", "no") // Prevents buffering

		// SSE-specific headers
		res.header("Content-Type", "text/event-stream")
		res.header("Cache-Control", "no-cache")
		res.header("Connection", "keep-alive")

		res.flushHeaders() // Send headers immediately

		// **Important:** Do NOT call `next()` here. The response remains open for streaming.
		return
	} else {
		// Handle preflight requests
		if (req.method === "OPTIONS") {
			res.sendStatus(204) // No content for preflight requests
			return
		}

		next()
	}
}
