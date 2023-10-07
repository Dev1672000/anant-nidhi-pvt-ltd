import React from 'react'
import Footer from "../../components/Footer";
import Status from './Status';
const index = () => {
    const currentStatus = "inProgress"; 
  return (
    <>
      <Status currentStatus={currentStatus} />
      <Footer />
    </>
  );
}

export default index