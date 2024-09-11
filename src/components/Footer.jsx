import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa"

export const Footer = () => {
  return (
      <div className='bg-[#002d5a] px-[100px] py-[50px] flex justify-center' >
          <div className='flex flex-col' data-aos="zoom-in">
              <div className='text-white py-[20px] space-x-4'>
                  <span className='text-[#2ff4b2]'>
                      Melula
                  </span> 11 Dannevirkegade, Kobenhavn, 12763, Denmark
                  <a href='#'>hello@melula.com</a>
              </div>
              <dv className='flex flex-row justify-center text-white py-5 gap-5'>
                <FaInstagram className="w-[30px] h-[30px]"/>
                <FaFacebookF className="w-[30px] h-[30px]"/>
                <FaPinterest className="w-[30px] h-[30px]"/>
              </dv>
              <div className="text-white flex justify-center space-x-5 text-xs py-[20px] font-semibold">
              <p>CONTACT $ WHOLESALE</p>
              <p>TERMS AND CONDITIONS</p>
              <p>SHIPPING $ RETURNS</p>
              </div>
          </div>
      </div>
  )
}
