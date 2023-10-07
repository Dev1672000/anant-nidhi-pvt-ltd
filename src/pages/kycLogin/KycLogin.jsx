import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const KycLogin = () => {
  return (
    <div className="flex justify-around gap-10 items-center my-[5%] mx-[10%]">
      <div className="w-1/2 border bg-green-300 rounded-3xl border-[#234666]">
        <div className="p-5 ">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="">
                <div className="flex gap-5">
                  <img
                    src="/girl.webp"
                    alt="profile"
                    className="h-[300px]   w-[300px] rounded-3xl "
                  />
                  <h1 className="mt-16">
                    Lorem ipsum dolor sit amet, consectectur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </h1>
                </div>

                <div className="flex flex-col justify-end items-end">
                  <h1 className="font-bold text-xl">Priyanka Chaudhary</h1>
                  <h2> UI/UX Designer</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
      <div className="w-1/2 border rounded-3xl border-[#234666]">
        <div className="p-20 bg-[#234666] rounded-3xl">
          <div className="bg-white rounded-3xl p-5">
            <div className="bg-white text-center mx-[3%] my-[5%]">
              <h1 className="text-3xl ">Become a member</h1>

              <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200  ">
                <li class="mr-2">
                  <a
                    href="/"
                    aria-current="page"
                    class="inline-block p-4 text-[#152a3d] bg-gray-100 rounded-t-lg active "
                  >
                    E - KYC
                  </a>
                </li>
                <li class="mr-2">
                  <a
                    href="/"
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
                  >
                    Manual KYC
                  </a>
                </li>
              </ul>

              <form>
                <div className="mb-4  mt-5">
                  <label
                    htmlFor="EnterNumber"
                    className="block text-sm mb-4 font-medium text-gray-600"
                  >
                    Enter Adhar Number:
                  </label>
                  <input
                    type="number"
                    id="EnterNumber"
                    placeholder="Enter Mobile Number"
                    name="EnterNumber"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    required
                  />
                </div>

                <div className="flex items-center  mt-1 justify-center">
                  <button
                    type="submit"
                    className="bg-[#234666] font-bold text-lg text-white px-12 rounded-3xl py-2 hover:bg-[#15293b]"
                  >
                    Get OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycLogin;
