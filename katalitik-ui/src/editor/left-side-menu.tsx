import { useDispatch } from "react-redux"
import { usePages, useRootPage } from "../util/store"
import Node from "./node"
import { sidebarExpanded } from "../reducers/sidebar-reducer"
import MagicIcon from "../icons/magic-icon"

export default function LeftSideMenu() {
	const pages = usePages()
	const page = useRootPage()

	const dispatch = useDispatch()

	return (
		<div className="h-dvh max-h-dvh border-r text-secondary border-surface-light shadow-dialog flex flex-col flex-none">
			<div className="grow overflow-y-auto mt-4">
				{pages.length > 0 && (
					<div className="flex flex-col">
						<div className="w-full">
							<div className="px-3 py-2 text-sm">Drafts</div>
							<div className="flex flex-col m-1 gap-0.25">
								{pages.map((page: any) => (
									<Node key={page.id} {...page} root={page} ident={0} />
								))}
							</div>
						</div>
					</div>
				)}
			</div>

			<div className="w-full mb-40 text-sm">
				<div className="px-3 py-2">Options</div>

				<div
					className="flex flex-col hover:cursor-pointer hover:bg-[hsla(0,0%,100%,.055)] hover:text-primary rounded-sm m-1 h-[28px] items-center"
					onClick={() => dispatch(sidebarExpanded({ expanded: true }))}
				>
					<div className="flex flex-row w-full h-full">
						<div className="m-1 flex items-center">
							<MagicIcon />
						</div>
						<div className="flex items-center">AI Assistant</div>
					</div>
				</div>
			</div>
		</div>
	)
}
