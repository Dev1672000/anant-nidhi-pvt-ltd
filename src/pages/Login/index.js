import React from 'react'
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Login from './Login';
const index = () => {
  return (
    <>
      <NavBar />
      <Login/>
      <Footer />
    </>
  );
}

export default index