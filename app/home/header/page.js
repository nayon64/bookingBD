import Image from "next/image";
import worldMap from "../../assets/picture/worldMap.jpg";
import BookingBox from "./bookingBox/page";

export default function Header() {
  return (
    <>
      <section className="  overflow-hidden relative h-96 bg-black bg-opacity-50">
        <Image
          className="object-cover h-full absolute top-0 -z-10 w-screen"
          src={worldMap}
          alt="world map"
        ></Image>
        <div className="flex  flex-col items-center h-full justify-center">
          <p className="text-white">Memorise For Life</p>
          <h1 className="text-white text-5xl font-bold mb-5 mt-2 tracking-wide" >Let's Explore The World</h1>
          <BookingBox />
        </div>
      </section>
    </>
  );
}
