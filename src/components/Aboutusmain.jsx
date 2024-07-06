import React from 'react';
import constuct from "../assets/image 14 (1).png";
import img1 from "../assets/Rectangle 6925.png";
import img2 from "../assets/Rectangle 6924.png";

import prod1 from "../assets/Rectangle 6930.png";
import prod2 from "../assets/Rectangle 6928.png";
import prod3 from "../assets/Rectangle 6929.png";

const Aboutusmain = () => {
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center' >
        <div className='h-screen w-full flex justify-center items-center bg-custom-gradient  bg-opacity-5 '>
            <div className='h-screen w-1/2 flex flex-col justify-center items-center' >
                <div className='w-1/2 flex flex-col gap-6' >
                    <p className='text-4xl font-bold' >About us</p>
                    <p className=' text-xl font-medium w-full' >Hardware and wood work hall sell services
                    That are changing business on more than 
                    100 hardware counters </p>
                    <button className='p-2 w-1/3 pl-4 pr-4 bg-blue-700 text-sm cursor-pointer rounded-sm hover:bg-blue-800 text-white'>Get in Touch</button>
                </div>
            </div>
            <div className='h-screen w-1/2 flex flex-col justify-center items-end' >
                    <img src={constuct} alt=""  className=' h-customheight' />
                    <p className=' absolute text-lg font-medium bg-yellow-300 w-48 p-2 mb-80 mr-80 ' >Celebrating our 25th Year of Succes</p>
            </div>

        </div>

        <div className='h-customheight w-full flex  justify-between items-center'>
            <div className='w-1/2 h-customheight flex justify-center items-center' >
                <img src={img1} alt="" className='h-3/4' />
            </div>
            <div className='w-1/2 h-customheight flex justify-center items-center' >
                <div className='w-1/2  flex flex-col justify-center items-start gap-4' >
                    <p className=' text-3xl font-semibold' >Who We Are?</p>
                    <p className='text-sm' >Welcome to Sampurna, your trusted partner in top-quality hardware solutions. We pride ourselves on offering a comprehensive range of durable and reliable hardware products, designed to meet the diverse needs of our customers. Whether you're a DIY enthusiast, a professional contractor, or a large-scale enterprise, we have the perfect hardware 
                    for every project.</p>
                </div>
            </div>

        </div>

        <div className='h-customheight w-full flex  justify-between items-center flex-row-reverse'>
            <div className='w-1/2 h-customheight flex justify-center items-center' >
                <img src={img2} alt="" className='h-3/4' />
            </div>
            <div className='w-1/2 h-customheight flex justify-center items-center' >
                <div className='w-1/2  flex flex-col justify-center items-start gap-4' >
                    <p className=' text-3xl font-semibold' >Our Mission</p>
                    <p className='text-sm' >Welcome to Sampurna, your trusted partner in top-quality hardware solutions. We pride ourselves on offering a comprehensive range of durable and reliable hardware products, designed to meet the diverse needs of our customers. Whether you're a DIY enthusiast, a professional contractor, or a large-scale enterprise, we have the perfect hardware 
                    for every project.</p>
                </div>
            </div>

        </div>

        <div className='h-customheight w-full flex  justify-between items-center'>
            <div className='w-1/2 h-customheight flex justify-center items-center' >
                <img src={img2} alt="" className='h-3/4' />
            </div>
            <div className='w-1/2 h-customheight flex justify-center items-center' >
                <div className='w-1/2  flex flex-col justify-center items-start gap-4' >
                    <p className=' text-3xl font-semibold' >Who We Are?</p>
                    <p className='text-sm' >Welcome to Sampurna, your trusted partner in top-quality hardware solutions. We pride ourselves on offering a comprehensive range of durable and reliable hardware products, designed to meet the diverse needs of our customers. Whether you're a DIY enthusiast, a professional contractor, or a large-scale enterprise, we have the perfect hardware 
                    for every project.</p>
                </div>
            </div>

        </div>

        <div className='h-customheight w-full flex flex-col justify-evenly items-center' >
            <p className=' text-3xl font-semibold' >Our Leadership</p>
            <div className='w-full flex justify-center items-center gap-20'>
                <div className='h-62 w-80 bg-red-400' >

                </div>

                <div className='h-62 w-80 bg-red-400' >

                </div>

            </div>


        </div>

        <div className='h-screen w-full flex flex-col justify-evenly items-center' >
            <p className=' text-3xl font-semibold' >Our Brand Partners</p>
            <div className='w-full flex justify-center items-center gap-20'>
                <img src={prod1} alt="" />
                <img src={prod2} alt="" />
                <img src={prod3} alt="" />
               

            </div>


        </div>

    </div>
  )
}

export default Aboutusmain