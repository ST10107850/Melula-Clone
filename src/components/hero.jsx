// import React from 'react'
import { motion } from "framer-motion"


export const Hero = () => {
  return (
    <div className="top-0 overflow-x-hidden relative bg-cover w-full h-full z-0 flex justify-center items-center flex-col" style={{
      backgroundImage: `url('./22.jpg')`,
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: ""

    }}>
      <motion.div
        initial={{ opacity: 0, y: 25, }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 1, delay: 1, }}


        className="text-white text-[67px] text-center  font-semibold">
        FOR COLOURFUL
      </motion.div>




      <motion.div
        initial={{ opacity: 0, y: 25, }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 1, delay: 1.8, }} 
        
        className="text-white text-[67px] text-center pb-[17px] font-semibold">STEPS IN LIFE</motion.div>
      <motion.button 
             initial={{ opacity: 0, y: 25, }}
             whileInView={{ opacity: 1, y: 0, }}
             transition={{ duration: 1, delay: 2.0, }} 
             className="bg-[#0DF8AD]   px-[34px] py-[21px] hover:bg-opacity-70 rounded-full text-[18px] text-white p-[17px] font-semibold">VISIT OUR SHOP</motion.button>
    </div>
  )
}
