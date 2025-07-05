import {GrocerGridCard} from "../Utils/Grocery"
import Grocerycard from "./GroceryCard"
import { motion } from "framer-motion";

export default function GroceryOption(){
    return(
         <div className="w-[80%] container mx-auto mt-20">
            <motion.h1 
                className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Shop Groceries on Instamart
            </motion.h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                {
                    GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                }
            </div>
        </div>
    )
}