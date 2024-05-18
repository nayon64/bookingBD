import Link from "next/link";
import { CgShoppingBag } from "react-icons/cg";
import Cup from "../../assets/icon/cup-of-drink.png";
import Giftbox from "../../assets/icon/giftbox.png";
import Pen from "../../assets/icon/pen.png";
import Plane from "../../assets/icon/plane.png";
import ShoppingCard from "../../assets/icon/shopping-cart.png";
import Home from "../../assets/icon/home.png";
import PhotoCamera from "../../assets/icon/photo-camera-interface-symbol-for-button.png";
import AboutBeach from "../../assets/icon/aboutBeach.png";
import SummerBanner from "../../assets/picture/summerBanner.jpg"
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdHeadsetMic } from "react-icons/md";


import Image from "next/image";

const menus = [
  {
    manue: "Home",
    icon: Home,
    no: 1,
    subDetails: [
      {
        subTitle: "About",
        details:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum. Eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
        photo: AboutBeach,
      },
      {
        subTitle: "Recent Post",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Popular  Hotel",
        hotels: [
          {
            photo:
              "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Mandrake Hotel,",
            address: "Macquarie, Sydney, NS",
          },
          {
            photo:
              " https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Sal Panio Estate,,",
            address: "Chico, CA - (530) 366-1659",
          },
          {
            photo:
              "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Symphony Maze",
            address: "Bella Staduim Road, Brazil",
          },
          {
            photo:
              "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "1888 Hotel -by 8 Hotels",
            address: "Chinatown, Potts",
          },
        ],
      },
      {
        subTitle: "Contact",
        phone: {
          mobileNubmer: "1-223-355-2214",
          massage: "Booking time: 0800 - 2000 hrs",
        },
        email: {
          email: "feedback@trendy.com",
          massage: "Help us improve!",
        },
      },
    ],
  },
  {
    manue: "Hotels",
    icon: Cup,
    no: 2,
    subDetails: [
      {
        subTitle: "Hotel Link",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Special Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Upcaming Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
    ],
  },
  {
    manue: "Pages",
    icon: Giftbox,
    no: 3,
    subDetails: [
      {
        subTitle: "Hotel Link",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Special Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Upcaming Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
    ],
  },
  {
    manue: "Place",
    icon: Plane,
    no: 4,
    subDetails: [
      {
        subTitle: "Hotel Link",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Special Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Upcaming Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
    ],
  },
  {
    manue: "Gellary",
    icon: PhotoCamera,
    no: 5,
    subDetails: [
      {
        subTitle: "Hotel Link",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Special Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Upcaming Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
    ],
  },
  {
    manue: "Packegs",
    icon: ShoppingCard,
    no: 7,
    subDetails: [
      {
        subTitle: "Hotel Link",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Special Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Upcaming Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Upcaming Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
    ],
  },
  {
    manue: "Blog",
    icon: Pen,
    no: 8,
    subDetails: [
      {
        subTitle: "Hotel Link",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Special Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
      {
        subTitle: "Upcaming Event",
        links: [
          "Without Sidebar",
          "Lift Sidebar",
          "Right Sidebar",
          "Hotel Details",
        ],
      },
    ],
  },
];

const linksDef = (prop) => {
  if (prop.subTitle === "About") {
    return (
      <div className="w-52">
        <h2 className="border-b-2 pb-2 mb-2 border-red-500 uppercase">
          {prop.subTitle}
        </h2>
        <Image
          className="mx-auto pb-2"
          height={130}
          src={prop.photo}
          alt={prop.subTitle}
        />
        <p className="normal-case text-xs font-light text-gray-500">
          {prop.details}
        </p>
      </div>
    );
  } else if (prop.subTitle === "Popular  Hotel") {
    return (
      <div>
        <h2 className="border-b-2 pb-2 mb-2 border-red-500 uppercase">
          {prop.subTitle}
        </h2>
        <div className="flex  flex-col gap-3">{
          prop.hotels && prop.hotels.map((h) => {
            return (
              <div className="flex gap-3">
                <Image className="bg-cover bg-center" width={80} height={100} src={h.photo} alt="" />
                <div className="">
                  <h4 className="text-sm">{h.name}</h4>
                  <p className="font-normal text-xs">{h.address}</p>

                </div>
              </div>
            )
          })
        }</div>
      </div>
    );
  } else if (prop.subTitle === "Contact") {
    return (
      <div className="w-52">
        <h2 className="border-b-2 pb-2 mb-2 border-red-500 uppercase">
          {prop.subTitle}
        </h2>
        <div className="mt-4">
          <h4>Book By Phone</h4>
          <div className="flex py-2">
            <FaPhone className="mt-1 h-5 mr-2 text-green-700" />
            <div>
              <p>{prop.phone.mobileNubmer}</p>
              <p className="text-xs font-light normal-case">
                {prop.phone.massage}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h4>Give Your Feedback</h4>
          <div className="flex py-2">
            <MdEmail className="mt-1 text-lg mr-2 text-green-700" />
            <div>
              <p>{prop.email.email}</p>
              <p className="text-xs font-light normal-case">
                {prop.email.massage}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h4>Service And Support</h4>
          <div className="flex py-2">
            <MdHeadsetMic className="mt-1 text-lg mr-2 text-green-700" />
            <div>
              <p>Support Center</p>
              <p className="text-xs font-light normal-case">
                Get your doubts cleared
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-52">
        <h2 className="border-b-2 pb-2 mb-2 border-red-500 uppercase">
          {prop.subTitle}
        </h2>
        <ul className="text-xs font-light normal-case transition duration-400">
          {prop.links &&
            prop.links.map((l) => {
              return (
                <li
                  className="mt-1 hover:text-blue-600 cursor-pointer"
                  key={prop.subTitle}
                >
                  {l}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
};

export default function Nav() {
  return (
    <nav className="bg-white ">
      <div className="  text-sm flex items-center justify-between max-w-6xl mx-auto relative">
        <div className="font-bold">
          <span className="text-2xl">Booking </span>
          <span className="text-green-700">Free</span>
        </div>
        <ul className="flex items-center gap-8  font-semibold text-gray-700 ">
          {menus.map((m) => {
            return (
              <li className="group py-5 " key={m.no}>
                <Link className="flex items-center gap-2" href={"/"}>
                  <Image className="w-3 h-3" src={m.icon} />
                  <p className="text-xs uppercase">{m.manue}</p>
                </Link>
                <div
                  className={`hidden group-hover:block hover:block absolute z-40 top-14  ${
                    m.no > 3 ? "right-24" : "left-32"
                  } border-t-2 border-blue-600 rounded-md shadow-md overflow-hidden bg-white`}
                >
                  <div
                    className={`  text-gray-500 grid ${
                      m.no == 1 || m.no == 7 ? "grid-cols-4" : "grid-cols-3"
                    }  gap-6  p-6 `}
                  >
                    {m.subDetails &&
                      m.subDetails.map((e) => {
                        return linksDef(e);
                      })}
                  </div>
                  {m.manue === "Home" && (
                    <div className={`w-full h-36 mt-4`}>
                      <Image
                        className="object-center"
                        src={SummerBanner}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-3 items-center">
          <CgShoppingBag className="text-xl text-green-700 " />
          <Link
            href="/about"
            className="bg-green-700 text-white  py-2 px-3 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

// {
//   return (
//     <div>
//       <h2 className="border-b-2 pb-2 mb-2 border-red-500">{e.subTitle}</h2>
//       <div></div>
//       <ul className="text-xs font-light normal-case transition duration-400">
//         {e.links &&
//           e.links.map((l) => {
//             return (
//               <li
//                 className="mt-1 hover:text-blue-600 cursor-pointer"
//                 key={e.subTitle}
//               >
//                 {l}
//               </li>
//             );
//           })}
//       </ul>
//     </div>
//   );
// }
