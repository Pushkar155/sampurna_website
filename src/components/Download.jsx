import React from 'react'
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import men from "../assets/Rectangle 2.png";

const Download = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center gap-2' >
        <div className='h-4/5 w-3/5 flex flex-col justify-center items-start gap-20 p-24 '>
            <div className='flex gap-44' >
                <div className=' flex items-baseline gap-1' >
                    <h1 className='font-semibold text-4xl text-sky-900'>10+</h1>
                    <span className='font-medium text-lg text-sky-900' >Warehouses</span>
                </div>

                <div className=' flex items-baseline gap-1' >
                    <h1 className='font-semibold text-4xl text-sky-900'>2000+</h1>
                    <span className='font-medium text-lg text-sky-900' >Products</span>
                </div>
            </div>
            <div className='flex gap-52' >
                <div className=' flex items-baseline gap-1' >
                    <h1 className='font-semibold text-4xl text-sky-900'>50+</h1>
                    <span className='font-medium text-lg text-sky-900' >Brands</span>
                </div>

                <div className=' flex items-baseline gap-1' >
                    <h1 className='font-semibold text-4xl text-sky-900'>24*7</h1>
                    <span className='font-medium text-lg text-sky-900' >Customer support</span>
                </div>
            </div>

            <button className='border-2 border-blue-950 p-4 flex justify-center items-center pl-40 pr-40 font-semibold gap-6 ' >  Download The app now  <span className='h-10 w-10 bg-sky-700 rounded-full flex justify-center items-center' > <FileDownloadRoundedIcon style={{color:"white"}} /> </span> </button>

        </div>
        <div className='h-4/5 w-2/5 flex justify-center items-center'>
            <img src={men} alt="" className='h-4/5' />

        </div>

    </div>
  )
}

export default Download