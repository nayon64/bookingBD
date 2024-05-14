import Nav from "./nav/page";

export default function AboutLayout({ children }) {
	return (
		<>
			<Nav></Nav>
			<main>
				{children}
			</main>
			<footer>This  is footer</footer>
		</>
	)
}