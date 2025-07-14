import React from "react";
import PhoneInput from "react-phone-input-2";
import brochure from "../../assets/othres/ebrocher_image.png";
import "react-phone-input-2/lib/style.css";

const EBrochure = () => {
  const [phone, setPhone] = React.useState("");

  return (
    <div className="bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA] flex justify-center items-center min-h-[50vh] py-5">
      <div className="bg-[#4570ac] max-w-5xl w-full rounded-[2.5rem] p-4 md:p-10 flex flex-col md:flex-row items-center shadow-md">
        {/* Left Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-[2.5rem]">
          <img
            src={brochure}
            alt="Classroom"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 px-6 py-8 space-y-6">
          <h3 className="text-sm text-gray-700 font-semibold">e-Brochure</h3>
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            Everything You Need for <span className="text-orange-500">Easy</span><br />School Management
          </h2>
          <p className="text-gray-600 text-sm">
            Want to learn more about GurukulSarthi School Management Software? Our helpful brochures are just a click away.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-full border border-gray-300 px-5 py-3 bg-white focus:outline-none text-sm"
              required
            />

            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              inputClass="!w-full !rounded-full !border !border-gray-300 !px-14 !py-3 !bg-white !text-sm focus:!outline-none focus:!ring-2 focus:!ring-orange-300"
              containerClass="w-full"
              buttonClass="!bg-transparent !border-none !absolute !left-4"
              dropdownClass="!rounded-lg !shadow-md"
              enableSearch={true}
            />

            <input
              type="email"
              placeholder="Email ID"
              className="w-full rounded-full border border-gray-300 px-5 py-3 bg-white focus:outline-none text-sm"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition text-sm hover:cursor-pointer"
            >
              Download Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EBrochure;
