import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { motion } from "framer-motion";

export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     fetchData();
    },[])

    // console.log(RestData);
   
    // Shimmer Effect 
    if(RestData.length==0)
        return <Shimmer></Shimmer>

    return (
        <div className="w-full bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
            <motion.h1 
                className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Explore Restaurants
                </span>
            </motion.h1>
            
            <motion.div 
                className="flex flex-wrap w-[95%] md:w-[90%] mx-auto gap-6 md:gap-8 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, staggerChildren: 0.1 }}
            >
                {
                    RestData.map((restInfo, index)=>(
                        <motion.div 
                            key={restInfo?.info?.id} 
                            className="transform transition-all duration-300 hover:scale-[1.03]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                delay: index * 0.1,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ 
                                scale: 1.05, 
                                rotate: -1,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <RestCard restInfo={restInfo}></RestCard>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )

}