import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard"
import { Link } from "react-router";
import { motion } from "framer-motion";


export default function RestaurantMenu(){
   
    let {id} = useParams();
    const [selected, setSelected] = useState(null);
    console.log(id);

    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           setRestData(filterData);
        }
   
        fetchData();
       },[])

       console.log(RestData);

    return(
        <div>

        <motion.div 
            className="w-[80%] mx-auto mt-20 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <Link to={`/city/delhi/${id}/search`}>
            <div className="w-full text-center py-5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-2xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search for Dishes
            </div>
          </Link>
        </motion.div>  

        <motion.div 
            className="w-[80%] mx-auto mt-20 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-4 flex-wrap">
            <button 
              className={`text-xl py-3 px-8 border rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 ${selected==="veg"? "bg-gradient-to-r from-green-500 to-green-600 text-white border-green-600": "bg-white text-gray-700 border-gray-300 hover:bg-green-50"}`} 
              onClick={()=>setSelected(selected==='veg'?null:'veg')}
            >
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                Veg Only
              </span>
            </button>
            <button 
              className={`text-xl py-3 px-8 border rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 ${selected==="nonveg"? "bg-gradient-to-r from-red-500 to-red-600 text-white border-red-600": "bg-white text-gray-700 border-gray-300 hover:bg-red-50"}`} 
              onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}
            >
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                Non-veg Only
              </span>
            </button>
          </div>
        </motion.div>
       
        <motion.div 
            className="w-[80%] mx-auto mt-20 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
          {
            RestData.map((menuItems, index) => (
              <motion.div 
                key={menuItems?.card?.card?.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <MenuCard menuItems={menuItems?.card?.card} foodselected={selected}></MenuCard>
              </motion.div>
            ))
          }
        </motion.div>
        </div>
    )

}