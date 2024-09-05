import { motion } from "framer-motion";

export const AboutPage= () => {
  return (
    <div>
      <div className="top-0 overflow-x-hidden relative bg-cover w-full h-full z-0 flex flex-col justify-center items-center" style={{
        backgroundImage: `url('./headersabout.jpg')`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: "cover"  // or "contain"
      }}>
        <motion.h1 
        initial={{ opacity: 0, y: 25, }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 1, delay: 1, }}
        className="text-7xl text-white font-semibold px-4 pb-4">ABOUT</motion.h1>
        <div className="p-4">
          <motion.button
          initial={{ opacity: 0, y: 25, }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ duration: 1, delay: 1.8, }}  
          className="bg-[#0DF8AD] py-[21px] px-[34px] hover:bg-opacity-70  rounded-full text-[18px] text-white  font-semibold">SHOP</motion.button>

        </div>
      </div>
      <div className="px-[20px] py-[60px] lg:p-[100px]">
        <div className="md:mx-[125px] lg:px-[17px] pb-[17px]">
          <div>
            <h2 className="py-[25px] text-[#131977] text-3xl">Founders</h2>
            <p className="my-4 text-[#333333] text-base">Melula is a Children Fashion brand from Copenhagen, Denmark.
              The danish design duo Louise Møllermark and Søren Hougesen joined forces in 2015 focusing on simple and beautiful design aesthetics. Melula is a direct prod- uct of this collaboration.</p>
          </div>

          <div>
            <h2 className="py-[25px] text-[#131977] text-3xl">Mission</h2>
            <p className="my-4 text-[#333333] text-base">We love kids, kids are fun just as they are - active, creative and playfull.
              Melula was founded because we couldn’t nd children’s shoes with both childlike and playful look in combination with a feel of the simplicity of Scandinavian design.</p>
          </div>

          <div>
            <h2 className="py-[25px] text-[#131977] text-3xl">Melula Shoes</h2>
            <p className="my-4 text-[#333333] text-base">Shapes and Colors are one of the fundamentals in Melula.
              We derive our inspiration from the creative processes of children and how they express themselves while playing. Melula have created a classic stylish shoe that are playful, fun and has a unique colourfull approach to design. Melula shoes are aiming for a unisex approach, unless our patterns guides in a clear direction.

              <br></br> <br></br>The shoes is a transition shoe that both can be used for when your little ones needs to look stylish, but also just for everyday use. We are continualy develop- ing new prints and styles, so that Melula can continue to be a brand that dictates trends instead of following them.</p>
          </div>

          <div>
            <h2 className="py-[25px] text-[#131977] text-3xl">Materials</h2>
            <p className="my-4 text-[#333333] text-base">Quality and comfort are extremely important while creating a shoe for children. That’s why we chose a soft material, which is suitable for the foot. The material and the inner construction stabilizes the ankle but also make it exible enough to bend, which is important for movability as well as Our shoes are made out of strong and durable fabrics. They are easy to clean and breathable for the foot</p>
          </div>

          <div>
            <h2 className="py-[25px] text-[#131977] text-3xl">Transparent and Fair production</h2>
            <p className="my-4 text-[#333333] text-base">We chose to focus heavily on the design and the production as the most im- portant ingredients in the development of the collection. The production of our shoes is an important factor. We cooperate only with manufacturers that have full transparency and works within sound ethical guidelines, fair work- ing conditions and the compliance with environmental standards.

              <br></br> <br></br> Our main shoe manufacture comes from a historical line of shoemakers with there main focus on the creation and development of children’s footwear. A mid- high range productline that is distinguished by its exclusivity and quality of mate- rials. Based in mainland of Portugal</p>
          </div>

          <div>
            <h2 className="py-[25px] text-[#131977] text-3xl">Suppliers</h2>
            <p className="my-4 text-[#333333] text-base">All Melulas suppliers are based in the southern part of Euope mainly Italy, Spain and Portugal, where there is a long historie of producing materials of the highest quality, ensuring longlivity and a high standard. All of our textiles comes from Portugal, all leather materials are supllied by our Italien and spanish based suppliers.</p>
          </div>
        </div>
        <div className="p-[17px]"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 p-[17px]">
          <div className="w-auto h-auto lg:max-w-[340px] md:max-h-[300px]">
          <img src="./1.jpg" alt="" className="w-full h-full" />
          </div>
          <div className="w-auto h-auto lg:max-w-[340px] md:max-h-[300px]">
          <img src="./2.jpg" alt="" className="w-full h-full" />
          </div>
          <div className="w-auto h-auto lg:max-w-[340px] md:max-h-[300px]">
          <img src="./3.jpg" alt="" className="w-full h-full" />
          </div>
          <div className="w-auto h-auto lg:max-w-[340px] md:max-h-[300px]">
          <img src="./4.jpg" alt="" className="w-full h-full" />
          </div>
          </div>
        </div>
      </div>
    
  )
}
