import { useState } from "react"
import {addItems, IncrementItems, DecrementItems} from "../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion"
import {addItems, IncrementItems, DecrementItems} from "../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({restData}){
  
  const dispatch = useDispatch();
  const items = useSelector(state=>state.cartslice.items);

  const element = items.find(item=>item.id===restData.id);
  const count = element? element.quantity:0;

  function handleAdditems(){
    dispatch(addItems(restData));
  }

  function handleIncrementItems(){
    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems(){
    dispatch(DecrementItems(restData));
  }

    return (
         <>
        <motion.div 
          className="flex w-full justify-between mb-2 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ backgroundColor: "rgba(238, 242, 255, 0.5)", borderRadius: "1rem", padding: "0.5rem" }}
        >
          <div className="w-[70%]">
            <motion.p 
              className="text-2xl font-semibold mb-1 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {restData?.name}
            </motion.p>
            <motion.p 
              className="text-xl font-medium text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}
            </motion.p>
            
            {restData?.ratings?.aggregatedRating?.rating && (
              <motion.div 
                className="flex items-center gap-1 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-medium flex items-center gap-1">
                  <svg className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  {restData?.ratings?.aggregatedRating?.rating}
                </span>
                <span className="text-gray-500 text-sm">{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
              </motion.div>
            )}
            
            <motion.p 
              className="text-gray-600 mt-2 text-sm line-clamp-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {restData?.description}
            </motion.p>    
          </div>
          
          <div className="w-[20%] relative h-42">
            <motion.div 
              className="overflow-hidden rounded-3xl shadow-md"
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              {restData.imageId && (
                <motion.img 
                  className="w-60 h-36 object-cover" 
                  src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                />
              )}
            </motion.div>
            
            {(count==0) ? (
              <motion.button 
                className="absolute bottom-1 left-20 rounded-xl text-lg font-medium text-white px-6 py-2 shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 border border-transparent"
                onClick={() => handleAdditems()}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                ADD
              </motion.button>
            ) : (
              <motion.div 
                className="absolute bottom-1 left-20 flex gap-3 text-xl text-indigo-600 px-6 py-2 shadow-md border border-white bg-white rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.button 
                  onClick={() => handleDecrementItems()}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full"
                >
                  -
                </motion.button>
                <motion.span
                  key={count}
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  className="font-medium"
                >
                  {count}
                </motion.span>
                <motion.button 
                  onClick={() => handleIncrementItems()}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full"
                >
                  +
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
        <motion.hr 
          className="mb-6 mt-2"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
        </>
    )
}