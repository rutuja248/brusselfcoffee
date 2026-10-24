import React from 'react'

const Locations = () => {
  return (
    <div className='bg-[#262324] px-5'>
        <div className='py-20'>
            <h1 className='text-4xl flex justify-center text-[#E2C8AF] font-light py-5'>Locations</h1>
            <div className='flex flex-col md:flex-row md:justify-between md:px-50 gap-5 text-[#E2C8AF]'>
                <div>
                    <h2 className='text-2xl'>Brussels</h2>
                    <p className='font-extralight'>Rue du Midi 45, 1000 <br/>Brussels, Belgium</p>
                </div>
                <div>
                    <h2 className='text-2xl'>Anderlecht</h2>
                    <p className='font-extralight'>PI, De Linde 27, 1070 <br/>Anderlecht, Belgium</p>
                </div>
                <div>
                    <h2 className='text-2xl'>Manchelen</h2>
                    <p className='font-extralight'>Dorpsplein 2, 1830 <br/>Machelen, Belgiium</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations