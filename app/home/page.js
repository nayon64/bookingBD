import Discover from "./Discover/page";
import Feature from "./Feature/page";
import Header from "./header/page";
import SpeacialService from "./speacialService/page";

export default function HomePage() {
	return <>
		
		<Header></Header>
		<SpeacialService />
		<Feature />
		<Discover/>
	</>;
}
