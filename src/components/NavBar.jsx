import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-[#234666] p-4">
      <div className="container mx-auto md:flex justify-around  items-center">
        <div>
          <img src="/anantlogo.png" alt="Company Logo" className="h-16 mx-auto w-16 " />
        </div>
        <div className="text-white text-center">
          <span className=" font-bold text-lg md:text-3xl ">
            WELCOME TO ANANT NIDHI PRIVATE LIMITED
          </span>

          <div className="text-white">
            235, 2nd Floor Opposite Sector - 13 Entrance, Modal Town Hisar
            Haryana - 125001{" "}
          </div>
          <div className="md:flex justify-center  gap-10">
            <span>Contact: 9015702702</span>
            <span> Email: infopb77@gmail.com</span>
          </div>
          <span> CIN NO. : U65999HR2018PLC0770</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
