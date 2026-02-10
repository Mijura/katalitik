import { useState } from "react"
import UrlValidator from "../../../util/file-upload/url-validator"
import Alert from "./alert"
import { Button, Input } from "@jigjoy-io/ui-library"
import AlertProps, { AlertType } from "./alert"

export default function FileUrlEditor({
	filePath,
	fileType,
	callback,
}: {
	filePath: string
	fileType: string
	callback: (url: string) => void
}) {
	const [fileUrl, setFileUrl] = useState<string>(filePath)
	const [urlAlert, setUrlAlert] = useState<AlertProps | null>(null)

	const handleUrlUpdate = (url: string) => {
		if (UrlValidator.validate(fileType, url)) {
			callback(url)
		} else {
			setUrlAlert({ type: AlertType.DANGER, message: "Link field is empty." })
		}
	}

	return (
		<>
			{urlAlert && (
				<div className="mb-2">
					<Alert type={urlAlert.type} message={urlAlert.message} />
				</div>
			)}

			<div className="m-2">
				<Input
					value={fileUrl}
					className="p-1 rounded-lg border border-[#ffffeb1a] w-full focus:outline-0"
					onChange={(e) => setFileUrl(e.target.value)}
					placeholder={`Enter ${fileType} url`}
				/>

				<div className="mt-3">
					<Button onClick={() => handleUrlUpdate(fileUrl)} className="w-full">
						Embed
					</Button>
				</div>
			</div>
		</>
	)
}
