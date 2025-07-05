import {dineoutRestaurants} from "../Utils/DineData"
import DineCard from "./DineCard"
import { motion } from "framer-motion";


export default function DineOption(){
    return (
        <div className="w-[90%] mx-auto mt-20 mb-20">
          <motion.p 
            className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Best Restaurants on Dineout
          </motion.p>
          <motion.div 
            className="flex flex-nowrap overflow-x-auto mt-5 gap-8 pb-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {dineoutRestaurants.map((RestData, index) => (
              <motion.div 
                key={RestData?.info?.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <DineCard RestData={RestData} />
              </motion.div>
            ))}
          </motion.div>
        </div>
    )
}