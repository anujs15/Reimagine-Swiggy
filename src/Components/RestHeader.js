import { useSelector } from "react-redux"
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function RestHeader(){

    const counter = useSelector(state=> state.cartslice.count);
    
    return (
        <motion.div 
            className="container w-full px-4 lg:w-[90%] mx-auto py-4 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg sticky top-0 z-50 rounded-2xl"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex justify-between items-center">
                <Link to="/">
                    <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Swiggy</h1>
                    </motion.div>
                </Link>
                <Link to="/Checkout">
                    <motion.div 
                        className="flex items-center gap-2 bg-white text-indigo-600 px-5 py-2 rounded-full shadow-md cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-lg font-medium">Cart {`(${counter})`}</span>
                        {counter > 0 && (
                            <motion.span 
                                className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            >
                                {counter}
                            </motion.span>
                        )}
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    )
}