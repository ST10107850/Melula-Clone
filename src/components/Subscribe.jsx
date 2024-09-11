// import React from 'react'

export const Subscribe = () => {
  return (
    <div className="px-[100px] py-[80px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col">
                  <div className="px-[17px] pb-[17px] text-3xl text-[#131977] md:flex space-x-2" data-aos="fade-right">
                      <h2>Follow us on Instagram</h2>
                      <a href="" className="underline">@melula_copenhagen</a>
                  </div>
                  <div className="flex flex-col lg:flex-row p-[17px] gap-2" data-aos="fade-right">
                      <img className="w-auto h-auto lg:max-w-[200px] lg:max-h-[360px]" src="./image-asset.jpeg" alt="" />
                      <img className="w-auto h-auto lg:max-w-[200px] lg:max-h-[360px]" src="./image-asset (1).jpeg" alt="" />
                  </div>
              </div>

            <div className="px-[17px] py-[34px]" data-aos="fade-left">
            <div className="md:mx-[32px] flex flex-col items-center">
                <h2 className="text-3xl mb-[17px]">Subscribe</h2>
                <p className="my-[17px] text-base">Sign up with your email address to receive news and updates.</p>
            </div>
            <div className="flex justify-center flex-col">
                <div className="flex justify-center mb-3 flex-col sm:flex-row items-center gap-3">
                <input className="border p-[15px] w-[250px]" placeholder="E-mailaddress" type="email"/>
                <button className="border py-[15px] bg-[#1ff4bf] text-white text-base px-[38px]">SIGN UP</button>
                </div>
                <p className="flex justify-center mt-[17px] text-xs text-[#272727]">We respect your privacy.</p>
            </div>
            </div>
        </div>
        </div>
  )
}
