import { imageGridCards } from "../Utils/foodData"
import Foodcard from "./FoodCard"

import { motion } from "framer-motion";

export default function FoodOption(){
    return (
        <div className="w-[90%] container mx-auto mt-20 mb-16">
            <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                    Explore Food Categories
                </span>
            </motion.h2>
            
            <motion.div 
                className="flex flex-wrap gap-8 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {
                    imageGridCards.map((foodData, index) => (
                        <motion.div 
                            key={foodData.id} 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileHover={{ 
                                scale: 1.05, 
                                rotate: 2,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                        >
                            <Foodcard foodData={foodData} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}