import { usePage } from "../../util/store"
import PageContent from "./page-content"

function PageRenderer() {
	const page = usePage()

	return (
		<div className="flex flex-col h-full justify-center items-center px-40 py-10 bg-white">
			{page.config && (
				<div className="flex grow h-full min-h-full w-full justify-center">
					<div className="flex flex-col w-full items-center">
						<div className="grow min-w-full">
							<PageContent config={page.config} key={page.id} id={page.id} />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default PageRenderer
