import Link from "next/link";

export default function Nav() {
	return (
		<ul className="flex gap-6  pb-3 mb-3 border-black border-b-2">
			<li><Link href={"/about/mission"}>Mission</Link></li>
			<li><Link href={"/about/vission"}>Vission</Link></li>
		</ul>
	)
}