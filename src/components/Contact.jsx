import React from 'react'
import logo from '/logo-transparent.png'
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div className='py-10 text-white lg:container lg:mx-auto'
        initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className='md:mx-auto md:px-15'>
                <div className='inside-content md:flex mx-auto md:px-10 px-5  py-10 rounded-xl'>
                    <div className='md:w-1/2 pr-5'>
                        <img src={logo} alt="" className='w-50' />
                        <p className='pt-5 text-[#d3b998] text-sm font-extralight'>Brewed To Perfection, Served With Love</p>
                      
                    </div>
                    <div className='md:w-1/2 '>
                        <div className='rounded-xl md:w-full '>
                            <form action="" className='flex flex-col gap-5'>
                                <h1 className='font-extralight text-[#d3b998]'>Join our newsletter to receive exclusive updates, and news!</h1>
                                <div className='flex space-x-5'>
                                
                                <input type="text" placeholder="Subject" name="fname" className="text-sm p-2 rounded-md w-full border text-[#d3b998] border-[#d3b998]"/>
                                <button className='text-sm bg-[#d3b998] text-[#63523f] w-fit px-4 py-2 rounded-md mt-2 flex items-center gap-2 hover:scale-105 transition-all duration-300'><span className='inline-block '>Subscribe</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <h1 className='text-center pt-15 text-[#d3b998] opacity-50'>&copy; 2026 Brussels Brewery. All rights reserved.</h1>
            </div>
        </motion.div>
    )
}

export default Contact