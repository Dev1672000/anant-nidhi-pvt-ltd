import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#234666] ">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className="text-lg font-bold text-white">
            <h2 className="mb-6 text-2xl font-extrabold text-white ">
              Company
            </h2>
            <ul >
              <li className="mb-4">
                <a href="/" className=" hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/">Blog</a>
              </li>
              <li className="mb-4">
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div className="text-lg font-bold text-white">
            <h2 className="mb-6 text-2xl font-extrabold text-white ">
              Support
            </h2>
            <ul>
              <li className="mb-4">
                <a href="/">Help Center</a>
              </li>
              <li className="mb-4">
                <a href="/">Safety Center</a>
              </li>
              <li className="mb-4">
                <a href="/">Community Guidelines</a>
              </li>
            </ul>
          </div>
          <div className="text-lg font-bold text-white">
            <h2 className="mb-6 text-2xl font-extrabold text-white ">Legal</h2>
            <ul className="">
              <li className="mb-4">
                <a href="/">Cookies Policy</a>
              </li>
              <li className="mb-4">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="/">Term of Service</a>
              </li>
              <li className="mb-4">
                <a href="/">Law Enforcement</a>
              </li>
            </ul>
          </div>
          <div className="text-lg font-bold text-white">
            <h2 className="mb-6 text-2xl font-extrabold text-white ">
              Install App
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer