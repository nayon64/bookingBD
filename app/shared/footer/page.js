import React from "react";
import Image from "next/image";
import footerImage from "../../assets/picture/shapeOne.png";
import Link from "next/link";

export default function Footer(props) {
  return (
    <>
      <section className="h-96 relative bg-gray-900 w-full mt-24">
        <div className="absolute -top-14 left-0 w-full flex bg-gray-900">
          <Image
            className="h-14 w-1/3"
            src={footerImage}
            alt="shape One"
            style={{ backgroundRepeat: "repeat-x", backgroundSize: "contain" }}
          />
          <Image
            className="h-14 w-1/3"
            src={footerImage}
            alt="shape One"
            style={{ backgroundRepeat: "repeat-x", backgroundSize: "contain" }}
          />
          <Image
            className="h-14 w-1/3"
            src={footerImage}
            alt="shape One"
            style={{ backgroundRepeat: "repeat-x", backgroundSize: "contain" }}
          />
        </div>
        <div>
          <div className="grid grid-cols-6 gap-6 pt-24 max-w-6xl mx-auto">
            {/* company basic info  */}
            <div className="col-span-2  text-white">
              <div className="font-bold">
                <span className="text-2xl">Booking </span>
                <span className="text-green-700">Free</span>
              </div>
              <p className="text-xs my-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                est, sunt consequuntur provident, reprehenderit magnam, at fuga
                quasi tenetur libero debitis quas assumenda aperiam dolores
                dignissimos! Corporis, perspiciatis voluptas. Hic?
              </p>
              <div className="text-xs flex flex-col gap-1">
                <h3>
                  <span className="font-semibold tracking-wide">PO Box: </span>
                  <span className="text-sm"> +47-252-254-2542</span>
                </h3>
                <h3>
                  <span className="font-semibold tracking-wide">Location </span>
                  <span> Collins Street, Sydney, Australia</span>
                </h3>
                <h3>
                  <span className="font-semibold tracking-wide">Email: </span>
                  <span>info@travelin.com</span>
                </h3>
                <h3>
                  <span className="font-semibold tracking-wide">Website: </span>
                  <span> www.travalin.com</span>
                </h3>
              </div>
            </div>
            {/* company important service  links  */}
            <div className="text-white">
              <h1 className="border-b-2 pb-1">Quick Link</h1>
              <div className="text-sm mt-3 flex flex-col gap-2">
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  About Us
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Delivery Information</p>
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Privacy Policy</p>
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Terms & Conditions</p>
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Customer Service</p>
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Return Policy</p>
                </Link>
              </div>
            </div>
            {/* conpany veriuse category links  */}
            <div className="text-white">
              <h1 className="border-b-2 pb-1">Categories</h1>
              <div className="text-sm mt-3 flex flex-col gap-2">
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  Travel
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Technology</p>
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Lifestyle</p>
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Destinations</p>
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Entertainment</p>
                </Link>
                <Link
                  href={"/about"}
                  className="hover:text-cyan-600 transition duration-500"
                >
                  <p>Business</p>
                </Link>
              </div>
            </div>
            <div className="col-span-2 text-white">
              <h1 className="border-b-2 pb-1">Categories</h1>
              <p className="text-sm mt-3">
                Join our community of over 200,000 global readers who receives
                emails filled with news, promotions, and other good stuff.
              </p>
              <div className="flex justify-between gap-4 mt-4">
                <input
                  className="w-full text-sm  px-3 text-gray-700 outline-none rounded-md"
                  type="email"
                  placeholder="Email  Address "
                />
                <div className="py-2 px-3 rounded-md bg-green-800 hover:bg-white hover:text-green-800 duration-500 cursor-pointer">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
