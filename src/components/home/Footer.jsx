import React from 'react'
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Footer = () => {
  return (
    <div className='h-customheight w-full bg-footerbg flex flex-col justify-center items-center gap-2 pt-20'>
        <div className=' w-11/12 h-12 flex justify-center items-center gap-32 border-b-2 pb-16 ' >
            <div className='text-white flex justify-center items-center gap-3' >
                <CallRoundedIcon style={{fontSize:"36px"}}/>
                <div>
                    <p className='text-xl font-semibold'>+91-0000000001</p>
                    <p>Hotline 24/7</p>
                </div>

            </div>
            <div className='text-white flex justify-center items-center gap-3' >
                <EmailRoundedIcon style={{fontSize:"36px"}}/>
                <div>
                    <p className='text-xl font-semibold'>Sampurnabc@gmail.com</p>
                    <p>Free consult</p>
                </div>

            </div>
            <div className='text-white flex justify-center items-center gap-3' >
                <LocationOnRoundedIcon style={{fontSize:"36px"}}/>
                <div>
                    <p className='text-xl font-semibold'>karma road Aurangabad (Bihar)</p>
                    <p>Near Gol ghar</p>
                </div>

            </div>

        </div>

        <div className=' w-11/12 h-96  flex justify-center items-center' >
           
           <div className=' h-56 w-1/4 flex flex-col gap-7 text-white'>
              <h1 className=' text-3xl font-semibold' >Sampurn</h1>
              <p className='text-sm' >We have deferent kind of team <br /> members with deferent key abelites <br />to deliver the services and they are <br /> very good and professionals .</p>
              <div className='flex gap-4' >
                {/* < className='h-10 w-10 border-2 rounded-full flex justify-center items-center' > */}
                  <FacebookRoundedIcon style={{fontSize:"25px"}} />
                  <LinkedInIcon style={{fontSize:"25px"}} />
                  <WhatsAppIcon style={{fontSize:"25px"}} />
                  <XIcon style={{fontSize:"25px"}} />

              </div>
           </div>

           <div className=' h-56 w-2/5 text-white flex gap-40 ' >
              <div className=' flex flex-col gap-5'>
                <h1 className='text-lg font-semibold' >PAGES</h1>
                <div className='flex items-center' >
                  <NavigateNextIcon/>
                  <h1>Home</h1>
                </div>
                <div className='flex items-center' >
                  <NavigateNextIcon/>
                  <h1>About</h1>
                </div>
                <div className='flex items-center' >
                  <NavigateNextIcon/>
                  <h1>Team</h1>
                </div>
                <div className='flex items-center' >
                  <NavigateNextIcon/>
                  <h1>FAQs</h1>
                </div>

              </div>

              <div className=' flex flex-col gap-5'>
                <h1 className='text-lg font-semibold' >Products</h1>
                <div className='flex items-center' >
                  <NavigateNextIcon/>
                  <h1>Hardware</h1>
                </div>
                <div className='flex items-center' >
                  <NavigateNextIcon/>
                  <h1>Plywood / Doors</h1>
                </div>
                <div className='flex items-center' >
                  <NavigateNextIcon/>
                  <h1>Mica</h1>
                </div>
          
              </div>

           </div>




        </div>

    </div>
  )
}

export default Footer