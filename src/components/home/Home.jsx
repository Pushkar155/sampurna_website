import React from 'react';
import image from "../../assets/image 14.png";

const Home = () => {
  return (
        <div className="relative h-screen w-full">
            <img src={image} alt="" className="h-screen w-full absolute top-0 left-0 object-cover" />
            <div className="absolute top-0 left-0 h-screen w-full z-20  bg-custom-gradient  bg-opacity-5 flex justify-center items-center">
                <div className=' flex flex-col items-start gap-12  mr-96' >
                    <h1 className='text-5xl font-medium'>Top-Quality Hardware for Every <br /> Project: <span className=' text-blue-900'>Durable</span>, <span className=' text-green-900'>Reliable</span>, <br /> <span className=' text-violet-950'>Affordable</span> </h1>
                    <p className='text-gray-900 font-medium' >Discover Our Exceptional Hardware Service: Wide Variety, Competitive <br /> Pricing, Unmatched Trust and Dedication. Our comprehensive range of high- <br />quality hardware products ensures you get the best value and reliability. <br />Experience unparalleled customer service with our commitment to yourbr
                     satisfaction and success</p>
                     <button className='p-2 pl-4 pr-4 bg-blue-700 text-sm cursor-pointer rounded-sm hover:bg-blue-800 text-white ' >Get in Touch</button>

                </div>
                
            </div>
        </div>
  )
}

export default Home