
import { Link } from "react-router"
import { motion } from "framer-motion"

export default function Header(){
    return (
        <motion.header 
            className="bg-gradient-to-r from-indigo-900 to-purple-800 font-sans"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
            <div className="flex justify-between container mx-auto py-8">
                <motion.div 
                    className="flex items-center"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link to="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center"
                        >
                            <motion.div 
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2"
                                animate={{ rotate: [0, 10, -10, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, repeatDelay: 2 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </motion.div>
                            <div className="text-2xl font-bold text-white">FoodSwiggy</div>
                        </motion.div>
                    </Link>
                </motion.div>
                <motion.div 
                    className="text-white text-base font-medium flex gap-6 items-center"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                >
                    <motion.a 
                        whileHover={{ scale: 1.05, color: "#c7d2fe" }}
                        className="hover:text-indigo-200 transition-colors duration-300" 
                        target="_blank" href="https://www.swiggy.com/corporate/"
                    >
                        Swiggy Corporate
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.05, color: "#c7d2fe" }}
                        className="hover:text-indigo-200 transition-colors duration-300" 
                        target="_blank" href="https://partner.swiggy.com/login#/swiggy"
                    >
                        Partner with Us
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#4f46e5" }}
                        className="border border-white py-3 px-4 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300" 
                        target="_blank" href="https://www.swiggy.com/corporate/"
                    >
                        Get The App
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.05, backgroundColor: "transparent", color: "#ffffff" }}
                        className="border border-white bg-white text-indigo-600 py-3 px-4 rounded-xl hover:bg-transparent hover:text-white transition-all duration-300"
                        target="_blank" href="https://www.swiggy.com/corporate/"
                    >
                        Sign in
                    </motion.a>
                </motion.div>
            </div>

            <div className="pt-16 pb-8 relative overflow-hidden">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-indigo-900 opacity-20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 1 }}
                >
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -left-20 top-10 w-96 h-96 text-white opacity-30">
                        <path fill="currentColor" d="M44.2,-76.9C58.3,-69.1,71.8,-59.2,79.8,-45.8C87.8,-32.4,90.5,-16.2,89,0.9C87.5,17.9,81.9,35.9,73.2,53.6C64.6,71.3,52.8,88.9,37,93.9C21.1,99,1.1,91.7,-17.7,85C-36.4,78.3,-53.9,72.3,-65.8,60.3C-77.7,48.4,-84,30.5,-86.6,11.9C-89.1,-6.7,-88,-26,-79.9,-40.7C-71.9,-55.4,-56,-65.5,-40.9,-72.9C-25.8,-80.2,-12.9,-84.8,1.7,-87.5C16.3,-90.3,30.1,-84.7,44.2,-76.9Z" transform="translate(100 100)" />
                    </svg>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute right-20 bottom-10 w-96 h-96 text-purple-300 opacity-20">
                        <path fill="currentColor" d="M32.9,-54.6C45.3,-49,59.6,-44.8,65.3,-35.2C71.1,-25.6,68.1,-10.8,66.8,3.8C65.4,18.3,65.6,32.6,59.7,42.9C53.7,53.2,41.6,59.4,29.3,60.9C17.1,62.5,4.8,59.3,-9.7,57.7C-24.3,56.1,-41.2,56.1,-50.9,48.1C-60.5,40.2,-62.8,24.1,-63.9,9.1C-65,-5.9,-64.7,-19.8,-58.6,-29.8C-52.5,-39.7,-40.4,-45.7,-28.9,-51.8C-17.3,-57.9,-6.4,-64,2,-67.2C10.4,-70.4,20.6,-60.3,32.9,-54.6Z" transform="translate(100 100)" />
                    </svg>
                </motion.div>
                
                <motion.img 
                    className="h-110 w-60 absolute top-0 left-0" 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                ></motion.img>
                
                <motion.img 
                    className="h-110 w-60 absolute top-0 right-0" 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                ></motion.img>
                
                <motion.div 
                    className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <span className="bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-transparent">
                        Order Food and groceries. Discover best restaurants. Swiggy it!
                    </span>
                </motion.div>
                
                <motion.div 
                    className="max-w-[70%] container mx-auto flex gap-5 mt-10"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <motion.input 
                        whileFocus={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                        className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl border border-transparent focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 transition-all shadow-lg" 
                        placeholder="Delhi, India"
                    ></motion.input>
                    
                    <motion.input 
                        whileFocus={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                        className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl border border-transparent focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 transition-all shadow-lg" 
                        placeholder="Search for restaurant and items for more"
                    ></motion.input>
                </motion.div>
            </div>

            <motion.div 
                className="max-w-[80%] container mx-auto flex"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to="/restaurant">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                    </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                    </a>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="https://www.swiggy.com/dineout">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                    </a>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="https://www.swiggy.com/genie">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                    </a>
                </motion.div>
            </motion.div>
        </motion.header>
    )
}