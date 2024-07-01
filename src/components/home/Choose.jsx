import React from 'react'
import bus from "../../assets/Vector.png";
import tool from "../../assets/bi_tools.png";
import rupee from "../../assets/mdi_rupee.png";

const choose = [
    {img:bus,title:"Best Delivery services",text:"Fast, reliable delivery service ensuring your hardware products arrive on time, every time, right to your doorstep."},
    {img:tool,title:"2000+ Products",text:"Wide range of high-quality hardware products available anytime, ensuring you find what you need."},
    {img:rupee,title:"2000+ Products",text:"Wide range of high-quality hardware products available anytime, ensuring you find what you need."}
]

const Choose = () => {
  return (
    <div className='w-full h-customheight bg-white flex flex-col justify-center items-center gap-5'>

        <h1 className='text-4xl font-semibold' >Why choose us</h1>

        <div className='h-3/4 w-3/4 flex justify-between items-center gap-5' >

            {
                choose.map((item, index) => (
                    <div key={index} className='h-72  w-96 border-gray-300 border-solid border-2 flex flex-col justify-center items-center gap-5  shadow-lg hover:-translate-y-2 transition'>
                        <div className='bg-blue-600 w-14 h-14 p-0  rounded-full flex justify-center items-center'>
                            <img src={item.img} alt="" className='w-5 h-5' /> 
                        </div>
                        <h1 className='font-semibold' >{item.title}</h1>
                        <p className='w-64 text-center text-sm font-medium' >{item.text}</p>
                    </div>
                ))
            }

        </div>
        

    </div>
  )
}

export default Choose