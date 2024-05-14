import Link from "next/link";
import { CgShoppingBag } from "react-icons/cg";

export default function Nav() {
  return (
    <nav className="bg-white px-3 py-3 items-center text-sm flex justify-between">
      <div className="font-bold">
        <span className="text-2xl">Booking </span>
        <span className="text-green-700">Free</span>
      </div>
      <ul className="flex  gap-5   text-gray-800">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Destination</Link>
        </li>
        <li>
          <Link href={"/about"}>Pages</Link>
        </li>
        <li>
          <Link href={"/"}>Blog</Link>
        </li>
        <li>
          <Link href={"/about"}>Contact</Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <CgShoppingBag className="text-xl text-green-700 "/>
        <Link href="/about" className="bg-green-700 text-white  py-2 px-3 rounded">Contact Us</Link>
      </div>
    </nav>
  );
}
