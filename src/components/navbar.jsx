import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    
        const sections = document.querySelectorAll("section");
        let currentSection = "";
    
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
    
          if (
            window.scrollY >= sectionTop - 50 &&
            window.scrollY < sectionTop + sectionHeight - 50
          ) {
            currentSection = section.getAttribute("id");
          }
        });
    
        setActiveSection(currentSection);
      };

      useEffect(() =>{
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
      }, [])
    return (
        <motion.div 
        initial={{ opacity: 0, y: 25, }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 1, delay: 1.2, }} 
        className={`text-white top-0 left-0 bg-[#002D5A] z-10 fixed w-full ${isScrolled ? "md:bg-[#002D5A]" : "md:bg-transparent"}`}>
            <div className="w-full py-[20px] h-[78px] px-[12px] md:pt-[20px] md:pb-[20px] md:px-[50px] items-center">
                <nav className="flex justify-between items-center">
                    <div>
                        <a href="/">
                        <img src={'./logo2.png'} className="md:w-[152px] md:h-[52px] w-[69px] h-[24px]" alt="Logo"  />
                        </a>
                    </div>
                    <ul className="list-none flex md:space-x-4 text-[15px] font-semibold">
                        <li><a href="/shop" className="hidden md:flex hover:text-gray-300">SHOP</a></li>
                        <li><a href="/about" className="hidden md:flex hover:text-gray-300">ABOUT</a></li>
                        <div className="flex items-center relative">
                            <MdOutlineShoppingCart className="md:h-[35px] md:w-[35px] w-[30px] h-[30px] md:hidden" />
                            <div className="absolute bg-[#fbb498] top-[-8px] right-[-8px] w-[28px] h-[28px] rounded-full md:hidden flex items-center justify-center">
                                <p className="text-white text-[12px]">0</p>
                            </div>
                        </div>
                    </ul>
                    <div className="flex items-center">
                        <div className="flex  items-center relative">
                            <MdOutlineShoppingCart className="md:h-[35px] md:w-[35px] w-[30px] h-[30px] hidden md:flex" />
                            <div className="absolute bg-[#fbb498] top-[-8px] right-[-8px] w-[28px] h-[28px] hidden rounded-full md:flex items-center justify-center">
                                <p className="text-white text-[12px]">0</p>
                            </div>
                        </div>


                        <button onClick={toggleMenu} className="md:hidden ml-4">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </nav>

                {isOpen && (
                    <div className="md:hidden bg-white w-full h-[100vh] top-0 left-0 z-10 absolute ">
                        <div className="flex flex-col items-start px-3 py-4 space-y-3">
                            <button onClick={toggleMenu} className="md:hidden ml-1">
                                {isOpen ? <FiX size={24} className="text-black" /> : <h1></h1>}
                            </button>
                            <div className="flex-col flex ml-10  font-semibold text-[21px]">
                                <a href="/shop" className="text-black pb-[13px] hover:text-gray-600">
                                    SHOP
                                </a>
                                <a href="/about" className="text-black hover:text-gray-600">
                                    ABOUT
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
