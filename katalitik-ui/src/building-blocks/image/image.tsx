import { useEffect, useState } from "react"

export default function Image({
	source,
	position,
	size,
	radius,
}: {
	source: string
	position: "left" | "center" | "right"
	size: "small" | "medium" | "large"
	radius: "full" | "rounded"
}) {
	const [imageWidth, setImageWidth] = useState(400)
	const [imagePosition, setImagePosition] = useState(position)
	const [imageSource, setImageSource] = useState(source)
	const [borderRadius, setBorderRadius] = useState("rounded-[20px]")

	useEffect(() => {
		if (radius == "full") {
			setBorderRadius("rounded-full")
		}
	}, [radius])

	useEffect(() => {
		if (size == "small") {
			setImageWidth(200)
		} else if (size == "medium") {
			setImageWidth(300)
		} else if (size == "large") {
			setImageWidth(400)
		}
	}, [size])

	useEffect(() => {
		setImageSource(source)
	}, [source])

	useEffect(() => {
		setImagePosition(position)
	}, [position])

	return (
		<div className="flex h-max w-full" style={{ justifyContent: imagePosition }}>
			<img className={`${borderRadius}`} width={imageWidth} height="auto" src={imageSource} loading="lazy" />
		</div>
	)
}
