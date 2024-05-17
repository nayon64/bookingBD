
import {Satisfy} from "next/font/google"
import React from 'react';
import CyclingImg from "../../assets/icon/cycling.png";
import DeckImg from "../../assets/icon/deck.png";
import MapsImg from "../../assets/icon/maps.png";
import SafariImg from "../../assets/icon/safari.png";
import SurfingImg from "../../assets/icon/surfing.png";
import parasailingImg from "../../assets/icon/parasailing.png";
import TentImg from "../../assets/icon/tent.png";
import Image from 'next/image';


const speacialSevice = [
  {
    name: "Cycling",
    img: CyclingImg,
  },
  {
    name: "Deck",
    img: DeckImg,
  },
  {
    name: "Hiking",
    img: MapsImg,
  },
  {
    name: "Parasiling",
    img: parasailingImg,
  },
  {
    name: "Tent",
    img: TentImg,
  },
  {
    name: "Safari",
    img: SafariImg,
  },
  {
    name: "Surging",
    img: SurfingImg,
  },
];

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

function SpeacialService(props) {
  return (
    <section className='flex justify-between items-center my-4 max-w-6xl mx-auto'>
    
      {
        speacialSevice.map((e) => {
          return (
            <div className="p-6 ">
              <Image height={80} src={e.img} alt={e.name} />
              <h6
                className={`text-center mt-4 font-semibold tracking-wider text-gray-700 ${satisfy.className}`}
              >
                {e.name}
              </h6>
            </div>
          );
        })
      }
   </section>
 )
}

export default SpeacialService;