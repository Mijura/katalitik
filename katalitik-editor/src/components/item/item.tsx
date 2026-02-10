import { Suspense, useEffect, useState } from "react"

interface ItemProps {
	selected?: string
	tabFocus?: boolean
	borderOn?: boolean
	icon?: any
	onClick: any
	children?: any
	color?: string
	text: string
	id?: string
}

export default function Item(props: ItemProps) {
	const [selected, setSelected] = useState(props.selected)

	useEffect(() => {
		setSelected(props.selected)
	}, [props.selected])

	const callback = (event: any) => {
		props.onClick(event, props)
	}

	const handleKeyDown = (event: any) => {
		if (event.key === "Enter") {
			callback(event)
		}
	}

	return (
		<div
			onClick={callback}
			onKeyDown={handleKeyDown}
			tabIndex={props.tabFocus ? 0 : -1}
			className={`min-w-[225px] 
			${selected != null && selected === props.id ? "bg-gradient-custom-opacity" : ""} 
			text-primary text-sm p-0.5 hover:bg-[hsla(0,0%,100%,.055)]
			${props.borderOn && "border border-surface-light shadow-md"} 
			rounded-lg cursor-pointer flex flex-col`}
		>
			<div className="flex flex-row p-0.5">
				{props.icon && (
					<div className="pl-1 pr-2 flex items-center">
						<Suspense fallback={<div></div>}>
							<props.icon />
						</Suspense>
					</div>
				)}
				<div className={props.color && `${props.color}`}>{props.text}</div>
			</div>
			<div>{props.children}</div>
		</div>
	)
}
