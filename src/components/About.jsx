import React from 'react'
import back from "../assets/1204247289.png"
import front from "../assets/1204247290.png";

import { NavLink } from "react-router-dom";

const About = () => {
  
  return (
    <div className='w-full h-screen bg-customBg flex justify-center items-center'>
        <div className='w-2/4 h-4/5 flex flex-col justify-center items-start p-24 gap-8'>
            <h1 className='text-4xl font-semibold '>About us</h1>
            <p className=' text-xl font-semibold'>
                Hardware and wood work hall sell services <br />
                That are changing business on more than <br />
                100 hardware counters 
            </p>
            <p className=' text-sm font-normal' >
            Welcome to Sampurna, your trusted partner in top-quality hardware solutions. We pride ourselves on offering a comprehensive range of durable and reliable hardware products, designed to meet the diverse needs of our customers. Whether you're a DIY enthusiast, a professional contractor, or a large-scale enterprise, we have the perfect hardware 
            for every project.
            </p>
            <NavLink to="/aboutus" className="nav-link" >
              <button className='p-2 pl-4 pr-4 bg-blue-700 text-sm cursor-pointer rounded-sm hover:bg-blue-800 text-white '>See More</button>
            </NavLink>
            
        </div>
        <div className='w-2/4 h-4/5  flex justify-center items-center'>
            <img src={back} alt="" className='h-96' />
            <img src={front} alt="" className='z-10 absolute h-72 mr-56 mt-44 ' />
        </div>
    </div>
  )
}
export default About