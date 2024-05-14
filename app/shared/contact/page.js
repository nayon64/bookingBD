import {  GrFacebookOption, GrLinkedin, GrLocation, GrMail, GrPhone, GrSkype, GrTwitter } from "react-icons/gr";
export default function Contact() {
  return (
    <>
      <section className=" py-3 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className=" ">
            <div className="flex gap-3 ">
              <div className="flex items-center">
                <GrPhone className="mr-2 text-green-600" />
                <div className="font-medium text-sm">(000)956-232-96</div>
              </div>
              <div className="flex items-center">
                <GrMail className="mr-2 text-green-600" />
                <div className="font-medium text-sm">touresinfo@gmail.com</div>
              </div>
              <div className="flex items-center">
                <GrLocation className="mr-2 text-green-600" />
                <div className="font-medium text-sm">
                  290 Grand AvenueMaitland, FL 32751
                </div>
              </div>
            </div>
          </div>
          <div className="text-white flex gap-3 text-sm">
            <a href="https://www.facebook.com/" target="_blank">
              <GrFacebookOption />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <GrTwitter />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <GrSkype />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <GrLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
