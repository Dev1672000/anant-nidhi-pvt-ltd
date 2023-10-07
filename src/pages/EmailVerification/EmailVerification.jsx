import React from 'react'
import {BiPlusCircle} from "react-icons/bi"
const EmailVerification = () => {
  return (
    <div className="p-5 relative ">
      <form className="absolute mx-[35%]  my-[15%] backdrop-blur-3xl  bg-white shadow-2xl shadow-slate-900 flex flex-col items-center gap-5 z-20  rounded-lg w-[350px] h-[250px]">
        <h1 className="text-3xl my-5 font-bold">Enter OTP</h1>
        <div className="space-y-5 space-x-3">
          <input
            type="checkbox"
            id="otp"
            className="w-6 h-6"
            name="otp"
            value="otp"
          />
          <input
            type="checkbox"
            id="otp"
            className="w-6 h-6"
            name="otp"
            value="otp"
          />
          <input
            type="checkbox"
            id="otp"
            className="w-6 h-6"
            name="otp"
            value="otp"
          />
          <input
            type="checkbox"
            id="otp"
            className="w-6 h-6"
            name="otp"
            value="otp"
          />
          <input
            type="checkbox"
            id="otp"
            className="w-6 h-6"
            name="otp"
            value="otp"
          />
          <input
            type="checkbox"
            id="otp"
            className="w-6 h-6"
            name="otp"
            value="otp"
          />
        </div>
        <div className="flex items-center  mt-1 justify-center">
          <button
            type="submit"
            className="bg-[#234666] text-lg text-white px-12 rounded-3xl py-2 hover:bg-[#15293b]"
          >
            Verify
          </button>
        </div>
      </form>

      <form>
        <div className="mx-[8%] ">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <h1 className="text-[#234666] text-3xl">Personal Details</h1>
            <div className="flex w-full gap-5">
              <div className="mt-1 w-[38%] rounded-md ">
                <label
                  for="Name"
                  className="block text-lg font-medium text-[#234666]"
                >
                  Name
                </label>

                <input
                  type="text"
                  name="Name"
                  id="Name"
                  className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                  placeholder="Enter Name "
                />
              </div>
              <div className="mt-1 w-[38%] rounded-md ">
                <label
                  for="Name"
                  className="block text-lg font-medium text-[#234666]"
                >
                  Surname
                </label>

                <input
                  type="text"
                  name="Name"
                  id="Name"
                  className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                  placeholder="Enter Name "
                />
              </div>
            </div>
            <div className="float-right">
              <div className="h-28 w-28 bg-gray-300 rounded-full"></div>
              <div className="flex gap-2 items-center bg-[#234666] text-white text-lg px-5 py-2 mt-5 rounded-lg">
                {" "}
                <BiPlusCircle /> <span>Photos</span>
              </div>
            </div>
            <div className="mt-1 w-[70%] rounded-md ">
              <label
                for="Aadhar"
                className="block text-lg font-medium text-[#234666]"
              >
                Aadhar Number
              </label>

              <input
                type="text"
                name="Aadhar"
                id="Name"
                className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                placeholder="1234567899"
              />
            </div>

            <div className="mt-1 w-[70%] rounded-md ">
              <label
                for="Aadhar"
                className="block text-lg font-medium text-[#234666]"
              >
                Mobile Number
              </label>

              <input
                type="text"
                name="Aadhar"
                id="Name"
                className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                placeholder="7398671832"
              />
            </div>
            <div className="mt-1 w-[70%] rounded-md ">
              <label
                for="EmailAddress"
                className="block text-lg font-medium text-[#234666]"
              >
                Email Address
              </label>

              <input
                type="email"
                name="EmailAddress"
                id="EmailAddress"
                className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                placeholder="dev1672000@gmail.com"
              />
            </div>
            <div className="flex gap-5">
              <div className="mt-1 w-1/2 rounded-md ">
                <label
                  for="Address
"
                  className="block text-lg font-medium text-[#234666]"
                >
                  Address
                </label>

                <textarea
                  className="w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                  id="w3review"
                  name="address"
                  rows="3"
                  cols="50"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat, molestias.
                </textarea>
              </div>
              <div className="mt-1 w-1/2 rounded-md ">
                <label
                  for="EmailAddress"
                  className="block text-lg font-medium text-[#234666]"
                >
                  Pin Code
                </label>

                <input
                  type="text"
                  name="PinCode"
                  id="PinCode"
                  className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                  placeholder="123456"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mt-1 w-[30%] rounded-md ">
                <label
                  for="Country"
                  className="block text-lg font-medium text-[#234666]"
                >
                  Country
                </label>

                <input
                  type="text"
                  name="Country"
                  id="Country"
                  className=" p-3 w-full border-gray-300 border-[2px] rounded-md  "
                  placeholder="Country"
                />
              </div>
              <div className="mt-1 w-1/3 rounded-md ">
                <label
                  for="EmailAddress"
                  className="block text-lg font-medium text-[#234666]"
                >
                  State
                </label>

                <input
                  type="text"
                  name="State"
                  id="State"
                  className=" p-3 w-full border-gray-300 border-[2px] rounded-md  "
                  placeholder="State"
                />
              </div>
              <div className="mt-1 w-1/3 rounded-md ">
                <label
                  for="District"
                  className="block text-lg font-medium text-[#234666]"
                >
                  District
                </label>

                <input
                  type="text"
                  name="District"
                  id="District"
                  className=" p-3 w-full border-gray-300 border-[2px] rounded-md  "
                  placeholder="District"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mt-1 w-1/2 rounded-md ">
                <label
                  for="Gender
"
                  className="block text-lg font-medium text-[#234666]"
                >
                  Gender
                </label>

                <input
                  type="text"
                  name="Gender"
                  id="Gender"
                  className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                  placeholder="Gender"
                />
              </div>
              <div className="mt-1 w-1/2 rounded-md ">
                <label
                  for="Date of Birth"
                  className="block text-lg font-medium text-[#234666]"
                >
                  Date of Birth
                </label>

                <input
                  type="text"
                  name="Date of Birth"
                  id="Date of Birth"
                  className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                  placeholder="Date of Birth"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#234666] text-xl font-semibold text-white px-[12%] rounded-3xl py-2 hover:bg-[#15293b]"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmailVerification