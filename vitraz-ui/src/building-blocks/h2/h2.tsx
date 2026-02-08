import { useEffect, useState } from "react"

const textAlignMap = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
}

interface H2Props {
	text: string
	position: "left" | "center" | "right"
}

export default function H2({ text, position }: H2Props) {
	const [textPosition, setTextPosition] = useState("")

	useEffect(() => {
		setTextPosition(textAlignMap[position])
	}, [position])

	return (
		<div className={`inline-block w-full`}>
			<div className={`text-3xl font-bold flex items-center ${textPosition}`}>{text}</div>
		</div>
	)
}
