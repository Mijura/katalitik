import { useEffect, useState } from "react"
import CheckedIcon from "../../icons/checked-icon"

export default function Checkbox({
	id,
	selected,
	disabled = false,
	onChange,
	children,
}: {
	id: string
	selected: boolean
	disabled?: boolean
	onChange: (id: string, value: boolean) => void
	children: React.ReactNode
}) {
	const [selectedState, setSelectedState] = useState(selected)
	const [disabledState, setDisabledState] = useState(disabled)

	useEffect(() => {
		setSelectedState(selected)
	}, [selected])

	useEffect(() => {
		setDisabledState(disabled)
	}, [disabled])

	const handleChange = () => {
		let newValue = !selected
		setSelectedState(newValue)
		onChange(id, newValue)
	}

	return (
		<div
			className={`${disabledState && "opacity-30"} flex cursor-pointer`}
			onClick={handleChange}
			style={{ pointerEvents: disabledState ? "none" : "auto" }}
			key={id}
		>
			<div
				className={`w-[20px] h-[20px] border shadow rounded-[5px] mr-3 hover:opacity-60 flex text-center items-center`}
			>
				{selectedState && <CheckedIcon />}
			</div>
			{children}
		</div>
	)
}
