import { useState } from "react"
import RestInfo from "./RestInfo"
import { motion, AnimatePresence } from "framer-motion"


export default function MenuCard({menuItems,foodselected}){

    const [isOpen, setIsOpen] = useState(true);
    
    
    if("categories" in menuItems){
        return(
            <motion.div 
                className="w-full bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl mb-6 border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.01 }}
            >
                <p className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">{menuItems.title}</p>
                <motion.div
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, staggerChildren: 0.1 }}
                >
                    {
                        menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodselected={foodselected}></MenuCard>)
                    }
                </motion.div>
            </motion.div>
        )
    }

   
    if(!isOpen){
        return(
        <motion.div 
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div className="flex justify-between w-full items-center">
                <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">{menuItems.title}</p>
                <motion.button 
                    className="text-3xl font-bold mr-10 h-10 w-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-700"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1, backgroundColor: "#c7d2fe" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        ⌄
                    </motion.span>
                </motion.button>
            </motion.div>
            <div className="h-5 bg-gradient-to-r from-indigo-100 to-purple-100 mt-2 mb-2 rounded-full"></div>
        </motion.div>   
        ) 
    }
    

    if(foodselected==='veg'){
        return(
            <motion.div 
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div className="flex justify-between w-full items-center">
                    <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{menuItems.title}</p>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">Veg Only</span>
                    </div>
                    <motion.button 
                        className="text-3xl font-bold mr-10 h-10 w-10 flex items-center justify-center bg-green-100 rounded-full text-green-700"
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            ⌄
                        </motion.span>
                    </motion.button>
                </motion.div>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {
                                menuItems?.itemCards?.filter((food) => "isVeg" in food?.card?.info).map((items, index) => (
                                    <motion.div
                                        key={items?.card?.info?.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                    >
                                        <RestInfo restData={items?.card?.info}></RestInfo>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <div className="h-5 bg-gradient-to-r from-green-100 to-emerald-100 mt-2 mb-2 rounded-full"></div>
            </motion.div>
        )
    }

    if(foodselected==='nonveg'){
        return(
            <motion.div 
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div className="flex justify-between w-full items-center">
                    <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">{menuItems.title}</p>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">Non-Veg Only</span>
                    </div>
                    <motion.button 
                        className="text-3xl font-bold mr-10 h-10 w-10 flex items-center justify-center bg-red-100 rounded-full text-red-700"
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            ⌄
                        </motion.span>
                    </motion.button>
                </motion.div>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {
                                menuItems?.itemCards?.filter((food) => !("isVeg" in food?.card?.info)).map((items, index) => (
                                    <motion.div
                                        key={items?.card?.info?.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                    >
                                        <RestInfo restData={items?.card?.info}></RestInfo>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <div className="h-5 bg-gradient-to-r from-red-100 to-pink-100 mt-2 mb-2 rounded-full"></div>
            </motion.div>
        )
    }

   


    return (
        <motion.div 
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div 
                className="flex justify-between w-full items-center"
                layout
            >
                <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">{menuItems.title}</p>
                <motion.button 
                    className="text-3xl font-bold mr-10 h-10 w-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-700"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1, backgroundColor: "#c7d2fe" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        ⌄
                    </motion.span>
                </motion.button>
            </motion.div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {
                            menuItems?.itemCards?.map((items) => (
                                <motion.div
                                    key={items?.card?.info?.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <RestInfo restData={items?.card?.info}></RestInfo>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                )}
            </AnimatePresence>
            
            <div className="h-5 bg-gradient-to-r from-indigo-100 to-purple-100 mt-2 mb-2 rounded-full"></div>
        </motion.div>
    )
}