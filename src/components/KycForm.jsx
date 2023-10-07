import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
const KycForm = () => {
  return (
    <>
    <NavBar/>
      <div className="bg-white m-10">
        <div className="p-5">
          <form>
            <div className="">
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
                <div className="">
                  <img
                    src="/girl.webp"
                    alt="profile"
                    className="h-[400px] w-[300px] rounded-3xl ml-3 mt-[-5%] float-right object-cover"
                  />
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

                <h1 className="text-3xl my-8 ">Nominee Details</h1>
                <div className="flex gap-5">
                  <div className="mt-1 w-[30%] rounded-md ">
                    <label
                      for="Country"
                      className="block text-lg font-medium text-[#234666]"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      name="Name"
                      id="CouNamentry"
                      className=" p-3 w-full border-gray-300 border-[2px] rounded-md  "
                      placeholder="Name"
                    />
                  </div>
                  <div className="mt-1 w-1/3 rounded-md ">
                    <label
                      for="EmailAddress"
                      className="block text-lg font-medium text-[#234666]"
                    >
                      Middle
                    </label>

                    <input
                      type="text"
                      name="Middle"
                      id="StaMiddlete"
                      className=" p-3 w-full border-gray-300 border-[2px] rounded-md  "
                      placeholder="Middle Name"
                    />
                  </div>
                  <div className="mt-1 w-1/3 rounded-md ">
                    <label
                      for="Surname"
                      className="block text-lg font-medium text-[#234666]"
                    >
                      Surname
                    </label>

                    <input
                      type="text"
                      name="Surname"
                      id="Surname"
                      className=" p-3 w-full border-gray-300 border-[2px] rounded-md  "
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="mt-1 w-1/2 rounded-md ">
                    <label
                      for="Nominee Relation
"
                      className="block text-lg font-medium text-[#234666]"
                    >
                      Nominee Relation
                    </label>

                    <input
                      type="text"
                      name="Nominee Relation"
                      id="Nominee Relation"
                      className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                      placeholder="Nominee Relation"
                    />
                  </div>
                  <div className="mt-1 w-1/2 rounded-md ">
                    <label
                      for="Date of Birth"
                      className="block text-lg font-medium text-[#234666]"
                    >
                      Pan Card Number
                    </label>

                    <input
                      type="text"
                      name="Pan Card Number"
                      id="Pan Card Number"
                      className=" flex-1 block w-full  p-3 border-gray-300 border-[2px] rounded-md  "
                      placeholder="Pan Card Number"
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
      </div>
      <Footer/>
    </>
  );
};

export default KycForm;
