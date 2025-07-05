import { useState, useEffect } from "react";
import { useParams } from "react-router"



export default function SearchFood(){
    
    const {id} = useParams();
    
    const [food,setFood] = useState("")
    const [RestData, setRestData] = useState([]);


    useEffect(()=>{
        
            async function fetchData() {
               
               const proxyServer = "https://cors-anywhere.herokuapp.com/"
               const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
               const response = await fetch(proxyServer+swiggyAPI);
               const data = await response.json();
               const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
               const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
               console.log(filterData);
               setRestData(filterData);
            }


           
            fetchData();
        },[])




    return(
        <div className="w-[80%] mx-auto mt-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Search Menu Items</h2>
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                        className="w-full pl-12 py-4 text-xl bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition-all shadow-sm" 
                        placeholder="Search for dishes..." 
                        onChange={(e)=>setFood(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}