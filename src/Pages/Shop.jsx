import { motion } from "framer-motion";

export const Shop = () => {
    const shoes = [
        { 
            id: 1,
            name: 'Bue',
            price: 45.00,
            url: './shoes/1.jpg'
        },

        { 
            id: 2,
            name: 'Skjold',
            price: 45.00,
            url: './shoes/2.jpg'
        },

        { 
            id: 3,
            name: 'Fille',
            price: 45.00,
            url: './shoes/3.jpg'
        },

        { 
            id: 4,
            name: 'Mint',
            price: 45.00,
            url: './shoes/4.jpg'
        },

        { 
            id: 5,
            name: 'Mikka',
            price: 45.00,
            url: './shoes/5.jpg'
        },

        { 
            id: 6,
            name: 'Purple',
            price: 45.00,
            url: './shoes/6.jpg'
        },

        { 
            id: 7,
            name: 'Patent Mint',
            price: 45.00,
            url: './shoes/7.jpg'
        },

        { 
            id: 8,
            name: 'Gold',
            price: 45.00,
            url: './shoes/8.jpg'
        },

        { 
            id: 9,
            name: 'Peoni',
            price: 45.00,
            url: './shoes/9.jpg'
        },

        { 
            id: 10,
            name: 'Birk',
            price: 45.00,
            url: './shoes/10.jpg'
        },
        { 
            id: 11,
            name: 'Vigga',
            price: 45.00,
            url: './shoes/11.jpg'
        },
        { 
            id: 12,
            name: 'Ville',
            price: 45.00,
            url: './shoes/12.jpg'
        },
        { 
            id: 13,
            name: 'Coral No-Tie Laces',
            price: 10.00,
            url: './shoes/13.jpg'
        },
        { 
            id: 14,
            name: 'Turqouis No-Tie Laces',
            price: 10.00,
            url: './shoes/14.jpg'
        },
        { 
            id: 15,
            name: 'Royal Blue No-Lie Laces',
            price: 10.00,
            url: './shoes/15.jpg'
        },
        { 
            id: 16,
            name: 'Yellow No-Tie Laces',
            price: 10.00,
            url: './shoes/16.jpg'
        },
        { 
            id: 17,
            name: 'White No-Tie Laces',
            price: 10.00,
            url: './shoes/17.jpg'
        },
        { 
            id: 18,
            name: 'Dark Blue No-Tie Laces',
            price: 10.00,
            url: './shoes/18.jpg'
        }

        // Repeat or add more shoes if needed
    ];

    return (
        <div>
            <div className="top-0 overflow-x-hidden relative bg-cover w-full h-full z-0 flex justify-center items-center" style={{
                backgroundImage: `url('./headershop.jpg')`,
                height: '50vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: "cover"  // or "contain"
            }}>
                <motion.h1
                initial={{ opacity: 0, y: 25, }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 1, delay: 1.8, }} className="text-7xl text-white font-semibold">SHOP</motion.h1>
            </div>
            <div className="p-[100px]">
                <div>
                    <ul className="flex justify-center gap-11">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Kids shoes</a></li>
                        <li><a href="#">No-tie Laces</a></li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3"> 
                    {shoes.map((shoe) => (
                        <div key={shoe.id} className="relative w-auto h-auto">
                            <img src={shoe.url} alt={shoe.name} className="w-full h-auto" />
                            <div className="flex md:absolute inset-x-0 bottom-0 flex flex-col justify-center items-center text-black p-2">
                                <h1>{shoe.name}</h1>
                                <p className="text-gray-400">R {shoe.price}.00</p>

                            </div>
                        </div>
                         
                    ))}
                    </div>
                </div>
            </div>
    );
};
