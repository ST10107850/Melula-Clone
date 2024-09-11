// import React from 'react'

export const PicGallery = () => {
   return (
      <>
         {/* First Container */}
         <div className="flex md:flex-row flex-col w-full " data-aos="fade-down">

            <div className="w-full h-[60vh] md:h-[80vh]">
               <a href="/shop">
                  <img className="w-full h-full transition-transform" src="./pg1.jpg" alt="" />
               </a>
            </div>

            <div className="md:w-[45vw] w-full h-auto">
               <a href="/shop">
                  <img className="w-full md:h-[40vh] h-[60vh] transition-transform" src="./pg2.jpg" alt="" />
               </a>
               <a href="/shop">
                  <img className="w-full md:h-[40vh]  h-[60vh]  transition-transform" src="./pg3.jpg" alt="" />
               </a>
            </div>

         </div>


         {/* Second Container */}
         <div className="flex md:flex-row flex-col " data-aos="fade-up">
            <div className="md:w-[45vw] w-full h-auto">
               <a href="/shop">
                  <img className="w-full md:h-[40vh] h-[60vh] transition-transform" src="./pg4.jpg" alt="" />
               </a>
               <a href="/shop">
                  <img className="w-full md:h-[40vh] h-[60vh] transition-transform" src="./pg5.jpg" alt="" />
               </a>
            </div>

            <div className="w-full h-[60vh] md:h-[80vh]">
               <a href="/shop">
                  <img className="w-full h-full transition-transform" src="./pg6.jpg" alt="" />
               </a>
            </div>

         </div>

         {/* Third Container */}
         <div className="flex md:flex-row flex-col " data-aos="fade-down">

            <div className="w-full h-[60vh] md:h-[80vh]">
               <a href="/shop">
                  <img className="w-full h-[80vh] transition-transform" src="./pg7.jpg" alt="" />
               </a>
            </div>

            <div className="md:w-[45vw] w-full h-auto">
               <a href="/shop">
                  <img className="w-full md:h-[40vh] h-[60vh] transition-transform" src="./pg8.jpg" alt="" />
               </a>
               <a href="/shop">
                  <img className="w-full md:h-[40vh] h-[60vh] transition-transform" src="./pg10.gif" alt="" />
               </a>
            </div>

         </div>
      </>
   )
}
