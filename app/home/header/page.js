import Image from "next/image";
import worldMap from "../../assets/picture/worldMap.jpg";
import Couple from "../../assets/picture/couple.jpg"
import BookingBox from "./bookingBox/page";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <>
      <section className="  overflow-hidden relative py-48 bg-black bg-opacity-40">
        <Image
          className="object-cover h-full absolute top-0 -z-10 w-screen"
          src={Couple}
          alt="world map"
        ></Image>
        <div className="flex  flex-col items-center h-full justify-center">
          <p className={`${satisfy.className} text-orange-600 text-3xl`}>Memorise For Life</p>
          <h1 className="text-white text-5xl font-bold mb-5 mt-2 tracking-wide" >Let's Explore The World</h1>
          <BookingBox />
        </div>
      </section>
    </>
  );
}
