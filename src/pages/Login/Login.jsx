import React from 'react'
import { FaHandPointRight } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-around gap-10 items-center my-[5%] mx-[10%]">
      <div className="w-1/2 border rounded-3xl border-[#234666]">
        <div className="p-5">
          <h2 className="text-lg mb-5 bg-[#234666] rounded-full p-2 text-center text-white mx-[5%] font-semibold ">
            Benefits of Saving Account
          </h2>
          <ul className="space-y-5">
            <li className="flex gap-5 items-center">
              <span>
                <FaHandPointRight size={30} />
              </span>
              <span className="text-lg">
                {" "}
                Liquidity. One of the benefits of opening a savings account is
                that it offers you liquidity
              </span>
            </li>
            <li className="flex gap-5 items-center">
              <span>
                <FaHandPointRight size={30} />
              </span>
              <span className="text-lg">
                {" "}
                Liquidity. One of the benefits of opening a savings account is
                that it offers you liquidity
              </span>
            </li>
            <li className="flex gap-5 items-center">
              <span>
                <FaHandPointRight size={30} />
              </span>
              <span className="text-lg">
                {" "}
                Liquidity. One of the benefits of opening a savings account is
                that it offers you liquidity
              </span>
            </li>
            <li className="flex gap-5 items-center">
              <span>
                <FaHandPointRight size={30} />
              </span>
              <span className="text-lg">
                {" "}
                Liquidity. One of the benefits of opening a savings account is
                that it offers you liquidity
              </span>
            </li>
            <li className="flex gap-5 items-center">
              <span>
                <FaHandPointRight size={30} />
              </span>
              <span className="text-lg">
                {" "}
                Liquidity. One of the benefits of opening a savings account is
                that it offers you liquidity
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 border rounded-3xl border-[#234666]">
        <div className="p-20 bg-[#234666] rounded-3xl">
          <div className="bg-white rounded-3xl p-5">
            <div className="bg-white mx-[3%] my-[5%]">
              <form >
                <div className="mb-4">
                  <label
                    htmlFor="EnterNumber"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Enter Number:
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
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Enter Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    name="password"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    required
                  />
                </div>
                <p className="mt-1 flex justify-end">
                  <a href="/" className="text-[#234666]">
                    Forgot Password?
                  </a>
                </p>
                <div className='flex items-center  mt-1 justify-center' >
                  <button
                    type="submit"
                    className="bg-[#234666] text-lg text-white px-12 rounded-3xl py-2 hover:bg-[#15293b]"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login