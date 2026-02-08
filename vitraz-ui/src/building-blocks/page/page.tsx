import ViewPageContent from "../../util/factories/view-page-content"
import EditPageContent from "../../util/factories/edit-page-content"
import { usePage } from "../../util/store"

function PageRenderer({ mode }: { mode: "editing" | "visiting" }) {
	const page = usePage()
	return (
		<div className="flex flex-col h-full justify-center items-center px-40 py-10 bg-white">
			{page.config && (
				<div className="flex grow h-full min-h-full w-full justify-center">
					<div className="flex flex-col w-full items-center">
						<div className="grow min-w-full">
							{mode === "editing" ? <EditPageContent {...page} /> : <ViewPageContent {...page} />}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default PageRenderer
