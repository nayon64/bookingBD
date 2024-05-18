import { CiBatteryCharging } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { PiSpeakerHighLight } from "react-icons/pi";
import { BsBrush } from "react-icons/bs";

export default function FutureFeature() {
  return (
    <>
      <div>
        <h2 className="uppercase text-gray-800 text-lg  border-b-2 border-yellow-500 pb-2 w-1/3">Theme features</h2>
        <div className=" flex gap-3 mt-8">
          <div>
            <CiBatteryCharging className="bg-green-500 text-6xl p-2 text-white rounded-full " />
          </div>
          <div>
            <h6 className="uppercase text-sm text-gray-700">Light Weight</h6>
            <p className="text-xs text-gray-500 mt-2">
              Sed at tellus quis enim dictum mollis. Donec nec interdum nulla.
              Aenean adipiscing nunc nec augue pretium, eget eros convallis.
            </p>
          </div>
        </div>
        <div className=" flex gap-3 mt-8">
          <div>
            <LuAlarmClock className="bg-green-500 text-6xl p-3 text-white rounded-full" />
          </div>
          <div>
            <h6 className="uppercase text-sm text-gray-700">Product Page</h6>
            <p className="text-xs text-gray-500 mt-2">
              Sed at tellus quis enim dictum mollis. Donec nec interdum nulla.
              Aenean adipiscing nunc nec augue pretium, eget eros convallis.
            </p>
          </div>
        </div>
        <div className=" flex gap-3 mt-8">
          <div>
            <PiSpeakerHighLight className="bg-green-500 text-6xl p-2 text-white rounded-full " />
          </div>
          <div>
            <h6 className="uppercase text-sm text-gray-700">Asowam Package</h6>
            <p className="text-xs text-gray-500 mt-2">
              Sed at tellus quis enim dictum mollis. Donec nec interdum nulla.
              Aenean adipiscing nunc nec augue pretium, eget eros convallis.
            </p>
          </div>
        </div>
        <div className=" flex gap-3 mt-8">
          <div>
            <BsBrush className="bg-green-500 text-6xl p-2 text-white rounded-full " />
          </div>
          <div>
            <h6 className="uppercase text-sm text-gray-700">Unlimited colors</h6>
            <p className="text-xs text-gray-500 mt-2">
              Sed at tellus quis enim dictum mollis. Donec nec interdum nulla.
              Aenean adipiscing nunc nec augue pretium, eget eros convallis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
