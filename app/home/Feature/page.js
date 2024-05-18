import AskQuestion from "./AskQuestion/page";
import FutureFeature from "./FutureFeature/page";

export default function Feature() {
	return (<>
		<section className="grid grid-cols-2 max-w-6xl mx-auto gap-3 ">
			<AskQuestion />
			<FutureFeature/>
		</section>
	</>)
}