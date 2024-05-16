import { GrLocation, GrSearchAdvanced } from "react-icons/gr";

function BookingBox(props) {
  return (
    <>
      <section className="grid grid-cols-2 bg-white py-5 px-6 max-w-5xl rounded-md">
        <div className="grid grid-cols-2 gap-16">
          <div className="">
            <div className="flex items-center gap-3 mb-1">
              <GrLocation />
              <span className="text-xs font-semibold text-gray-800">
                Location
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block text-gray-500 py-1.5 pl-7 pr-20  outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Where are you going?"
            />
          </div>
          <div className="">
            <div className="flex items-center gap-3 mb-1">
              <GrLocation />
              <span className="text-xs font-semibold text-gray-800">
                Check In
              </span>
            </div>
            <input
              type="date"
              name="price"
              id="price"
              className="block text-gray-500 py-1.5 pl-7 pr-20  outline-gray-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Where are you going?"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="">
            <div className="flex items-center gap-3 mb-1">
              <GrLocation />
              <span className="text-xs font-semibold text-gray-800">
                Check Out
              </span>
            </div>
            <input
              type="date"
              name="price"
              id="price"
              className="block text-gray-500 py-1.5 pl-7 pr-20  outline-gray-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Where are you going?"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="">
              <div className="flex items-center  mb-1">
                <GrLocation />
                <span className="text-xs font-semibold text-gray-800 ml-3">
                  Total Guest
                </span>
              </div>
              <input
                type="number"
                name="price"
                id="price"
                className=" text-gray-500 w-full py-1.5 pl-3 pr-4   outline-gray-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Total Guest"
              />
            </div>
            <div className=" flex justify-end">
              <div className="">
                <GrSearchAdvanced className="text-white text-4xl bg-orange-500 p-2 rounded cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingBox;
