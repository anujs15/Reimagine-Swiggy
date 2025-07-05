import { motion } from "framer-motion";

export default function Grocerycard({foodData}) {
    return (
        <motion.div className="flex-none" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <a href={foodData?.action?.link}>
                <img className="w-40 h-50 object-cover rounded-xl shadow-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} alt={foodData?.action?.text} />
            </a>
            <h1 className="text-center font-bold text-indigo-700 mt-2">{foodData?.action?.text}</h1>
        </motion.div>
    );
}