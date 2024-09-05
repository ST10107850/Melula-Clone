// import React from 'react'
import { Hero } from "../components/hero";
import { TwoPics } from "../components/TwoPics";
import { About } from "../components/About";
import { PicGallery } from "../components/PicGallery";
import { Brands } from "../components/Brands";
import { Subscribe } from "../components/Subscribe";

export const MainLayout = () => {
  return (
    <div>
         <Hero />
        <TwoPics />
        <About />
        <PicGallery />
        <Brands/>
        <Subscribe/>
    </div>
  )
}
