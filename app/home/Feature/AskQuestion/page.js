"use client"
import { useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";


const askQuestion = [
  {
    _id: 1,
    title: "We have  the best Travel Packages",
    ans: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    _id: 2,
    title: "Best travel  guides abailable throught the trip",
    ans: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    _id: 3,
    title: "Complete packages till date",
    ans: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    _id: 4,
    title: "Best prices and  Deiscounts  for Memberships",
    ans: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    _id: 5,
    title: "Various other features for a travel package",
    ans: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    _id: 6,
    title: "Best travel  guides abailable throught the trip",
    ans: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    _id: 7,
    title: "Complete packages till date",
    ans: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
];






export default function AskQuestion() {
  let [isActive, setIsActive] = useState(false);
  let [accordingNum,setAccordingNum]=useState(0)
  const accordingOpen = (d) => {
    if (d._id == accordingNum) {
      setIsActive(!isActive);
    } else {

      setAccordingNum(d._id);
      setIsActive(true);
    }
    
    
  };
	return (<>
		<div>
			<h2 className="text-lg text-gray-800 uppercase border-b-2 border-yellow-500 pb-2 w-2/3">We are the best in Bussiness</h2>
			<div>
				{
          askQuestion.map((d) => {
            
						return (
              <div className="mb-2" onClick={() => accordingOpen(d)}>
                <div className=" bg-gray-100 text-gray-800 text-sm px-3 py-2.5 flex  items-center gap-3 group">
                  <FaRegHandPointRight
                    className={`duration-1000 text-xl text-green-600 ${
                      isActive == true && accordingNum == d._id
                        ? "rotate-270"
                        : ""
                    }`}
                  />
                  <p className="font-light">{d.title}</p>
                </div>
                <p
                  className={` duration-1000 text-xs text-gray-400 py-3 ${
                    isActive == true && accordingNum == d._id
                      ? ""
                      : " hidden"
                  }`}
                >
                  {d.ans}
                </p>
              </div>
            );
					})
				}
			</div>
		</div>
	</>)
}