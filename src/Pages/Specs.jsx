import React from 'react'
import Navigation from '../Navigation/Navigation';
import Specification from "../Images/iPhone Specs.png"

const Specs = () => {
  return (
    <>
        <Navigation />
        <>
          <img src={Specification} alt="Specification" className='cover' />
        </>
    </>
  )
}

export default Specs;