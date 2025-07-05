import { useSelector } from "react-redux"
import { motion } from "framer-motion";

export default function Checkout(){
    const items = useSelector(state=>state.cartslice.items);

    // Calculate total bill
    const total = items.reduce((acc, value) => {
        const price = "defaultPrice" in value ? value.quantity * value.defaultPrice / 100 : value.quantity * value.price / 100;
        return acc + price;
    }, 0);

    return(
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-center py-10">
            <motion.h1 
                className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Your Cart
            </motion.h1>
            <div className="flex flex-wrap gap-8 justify-center w-full max-w-5xl">
                {items.length === 0 ? (
                    <motion.div 
                        className="text-2xl text-gray-400 font-semibold mt-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Your cart is empty.
                    </motion.div>
                ) : (
                    items.map((value, index) => (
                        <motion.div
                            key={value.id}
                            className="h-80 w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-indigo-100 hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-indigo-700 mb-2 truncate">{value.name}</h3>
                                <p className="text-lg text-gray-700 mb-1">Quantity: <span className="font-semibold">{value.quantity}</span></p>
                                <p className="text-lg text-gray-700 mb-1">Price per item: <span className="font-semibold">₹{("defaultPrice" in value ? value.defaultPrice/100 : value.price/100).toFixed(2)}</span></p>
                                <p className="text-lg text-indigo-600 font-semibold">Subtotal: ₹{("defaultPrice" in value ? value.quantity*value.defaultPrice/100 : value.quantity*value.price/100).toFixed(2)}</p>
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <img className="w-40 h-28 object-cover rounded-xl shadow" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.imageId} alt={value.name}/>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
            {items.length > 0 && (
                <motion.div 
                    className="mt-12 bg-white rounded-xl shadow-lg px-10 py-6 border border-indigo-100 flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-indigo-700 mb-2">Total Bill</h2>
                    <p className="text-3xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">₹{total.toFixed(2)}</p>
                </motion.div>
            )}
        </div>
    )
}

// src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}