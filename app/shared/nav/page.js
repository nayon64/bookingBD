import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex  gap-5 pb-3 mb-3 border-b-2 border-black">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
