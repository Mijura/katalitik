import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateBlock } from "../../../reducers/page-reducer"
import LeftAlignmentIcon from "../../../icons/alignment-left-icon"
import RightAlignmentIcon from "../../../icons/alignment-right-icon"
import CenterAlignmentIcon from "../../../icons/alignment-center-icon"
import Item from "../../../components/item/item"
import { Button } from "@jigjoy-ai/ui-library"

export default function PositionEditor(props: any) {
	const [value, setValue] = useState(props.value)
	const dispatch = useDispatch()

	let positions = [
		{ text: "Left", key: "left", icon: LeftAlignmentIcon },
		{ text: "Center", key: "center", icon: CenterAlignmentIcon },
		{ text: "Right", key: "right", icon: RightAlignmentIcon },
	]

	const update = () => {
		let block = JSON.parse(JSON.stringify(props.block))
		block[props.attribute] = value
		dispatch(updateBlock(block))
	}

	const select = (event: any, option: any) => {
		setValue(option.id)
	}

	return (
		<div
			className={`fixed flex flex-col p-1 rounded-lg bg-surface-light text-sm backdrop-filter-none max-w-[calc(100vw-24px)] shadow-dialog-pri outline-1 outline-transparent overflow-hidden`}
		>
			<div>
				{positions.map((position: any) => (
					<Item
						tabFocus={false}
						text={position.text}
						icon={position.icon}
						id={position.key}
						selected={value}
						onClick={select}
					/>
				))}
			</div>

			<div className="mx-1 mt-1 mb-0 border-b border-0.5 border-[#ffffeb1a]" />
			<div className="flex w-full justify-end">
				<Button className="w-fit mt-1" onClick={update}>
					Update
				</Button>
			</div>
		</div>
	)
}
