import React from 'react'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import KycLogin from './KycLogin';
const index = () => {
  return (
    <>
      <NavBar />
      <KycLogin/>
      <Footer/>
    </>
  );
}

export default index