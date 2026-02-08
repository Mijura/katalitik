import ImageIcon from "./image.icon"
import MediaSettings from "./media-settings/media-settings"

interface ImageUploaderProps {
	file: File
	onFileChange: (file: File) => void
}

export default function ImageUploader({ file, onFileChange }: ImageUploaderProps) {
	return <MediaSettings mediaType="image" icon={<ImageIcon />} props={{ file, onFileChange }} />
}
