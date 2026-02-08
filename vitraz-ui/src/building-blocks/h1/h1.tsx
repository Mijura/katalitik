import { useEffect, useState } from "react"

const textAlignMap = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
}

interface H1Props {
	text: string
	position: "left" | "center" | "right"
}

export default function H1({ text, position }: H1Props) {
	const [textPosition, setTextPosition] = useState("")

	useEffect(() => {
		setTextPosition(textAlignMap[position])
	}, [position])

	return (
		<div className={`inline-block w-full h-min-[2.5rem] h-max`}>
			<div className={`text-title w-full flex ${textPosition}`}>{text}</div>
		</div>
	)
}
