import { useEffect, useState } from "react"

const textAlignMap = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
}

interface TextProps {
	text: string
	position?: "left" | "center" | "right"
}

export default function Text({ text, position = "left" }: TextProps) {
	const [textPosition, setTextPosition] = useState("")

	useEffect(() => {
		setTextPosition(textAlignMap[position])
	}, [position])
	return (
		<div className={`inline-block w-full`}>
			<div className={`h-8 flex items-center ${textPosition}`}>{text}</div>
		</div>
	)
}
