import Image from "next/image";
import worldMap  from  "../../assets/picture/worldMap.jpg"

export default function Header() {
	return <>
		<section>
			<Image src={worldMap} alt="World  Map" className="max-h-96 object-cover"/>
		</section>
		<h1>Banner section</h1>
	</>
}