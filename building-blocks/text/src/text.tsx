import { useEffect, useState } from "react"

const textAlignMap = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
}

interface TextProps {
	text: string
	position: "left" | "center" | "right"
}

export default function Text({ text, position }: TextProps) {
	const [textPosition, setTextPosition] = useState("")

	useEffect(() => {
		setTextPosition(textAlignMap[position])
	}, [position])
	return (
		<div className={`inline-block h-min-[1.7rem] h-max w-full`}>
			<div className={`text-paragraph whitespace-pre-line ${textPosition}`}>{text}</div>
		</div>
	)
}
