import { Tooltip } from "@jigjoy-ai/ui-library"
import { Component } from "react"

export default class ToolbarButtonWrapper extends Component<any> {
	render() {
		return (
			<Tooltip message={this.props.tooltip}>
				<div className="hover:bg-primary-light border-2 border-transparent rounded-[5px] h-fit w-fit">
					{this.props.children}
				</div>
			</Tooltip>
		)
	}
}
