import React from 'react'
import { MdOutlineNotificationsNone } from "react-icons/md";
import {TbHome} from "react-icons/tb"
const Status = ({ currentStatus }) => {
  const statuses = [
    { label: "Application Submitted", status: "submitted" },
    { label: "In Progress", status: "inProgress" },
    { label: "Approved", status: "approved" },
  ];
  return (
    <div>
      <nav className="bg-[#234666]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <img
              src="/anantlogo.png"
              alt="Company Logo"
              className="h-16 mx-auto w-16 "
            />
          </div>
          <div className="flex gap-2 md:order-2">
            <button type="button" className=" bg-white rounded-full p-4 ">
              <MdOutlineNotificationsNone size={20} />
            </button>
            <button type="button" className=" bg-white rounded-full p-4 ">
              <MdOutlineNotificationsNone size={20} />
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col text-white text-xl font-medium p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                >
                  <TbHome />
                  <span> Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  {" "}
                  <TbHome />
                  <span> About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  {" "}
                  <TbHome />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  {" "}
                  <TbHome />
                  <span> Calculator</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  {" "}
                  <TbHome />
                  <span> Cibil Score</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="flex justify-around gap-10 items-center my-[5%] mx-[10%]">
          <div className="w-1/2 border rounded-3xl border-[#234666]">
            <div className="p-5">
              <form>
                <div className="flex">
                  <div className="w-[70%]">
                    <div className=" bg-white space-y-6 sm:p-6">
                      <h1 className="text-[#234666] text-3xl">
                        Personal Details
                      </h1>
                      <div className="flex w-full gap-5">
                        <div className="mt-1 rounded-md ">
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
                            className=" block w-full  p-2 border-gray-300 border-[2px] rounded-md  "
                            placeholder="Enter Name "
                          />
                        </div>
                        <div className="mt-1 rounded-md ">
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
                            className="w-full  p-2 border-gray-300 border-[2px] rounded-md  "
                            placeholder="Enter Name "
                          />
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
                          className=" flex-1 block w-full  p-2 border-gray-300 border-[2px] rounded-md  "
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
                          className=" flex-1 block w-full  p-2 border-gray-300 border-[2px] rounded-md  "
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
                          className=" flex-1 block w-full  p-2 border-gray-300 border-[2px] rounded-md  "
                          placeholder="dev1672000@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 w-[30%]">
                    <img
                      src="/girl.webp"
                      alt=" Image"
                      className="h-[250px] w-[200px] rounded-3xl object-cover"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2  ">
            <div >
              <div className="bg-white rounded-3xl p-5">
                <div className="bg-white mx-[3%] my-[5%]">
                  <h1 className='text-3xl font-bold mb-3'>Application Status</h1>
                  <div className=" space-x-3">
                    {statuses.map((step, index) => (
                      <div
                        key={step.status}
                        className={`relative space-y-3 flex items-center gap-2 ${
                          index < statuses.length - 1 ? "mr-4" : ""
                        }`}
                      >
                        {index > 0 && (
                          <div className="absolute left-0 top-1/2 text-bold text-xl -translate-y-1/2 w-4 h-0.5 bg-gray-300"></div>
                        )}
                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                            step.status === currentStatus
                              ? "border-blue-900 text-bold "
                              : "border-gray-300"
                          } ${index < statuses.length - 1 ? "relative" : ""}`}
                        >
                          {step.status === currentStatus ? (
                            <span className="text-blue-500">{index + 1}</span>
                          ) : (
                            <span className="text-gray-400">{index + 1}</span>
                          )}
                        </div>
                        {index < statuses.length - 1 && (
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-gray-300"></div>
                        )}
                        {step.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Status