import { Link } from "react-router"
import { motion } from "framer-motion"

export default function RestCard({restInfo}){
    return (
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <motion.div 
            className="max-w-[280px] mb-2"
            whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
        >
        <div className="relative overflow-hidden rounded-xl">
            <motion.img 
                className="w-70 h-45 object-cover" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-xs font-medium bg-indigo-500 py-1 px-2 rounded">
                        {restInfo?.info?.sla?.slaString}
                    </span>
                </div>
            </div>
        </div>
        <div className="w-[95%] mx-auto mt-3">
            <div className="font-bold text-xl text-gray-800">{restInfo?.info?.name}</div>
            <div className="flex items-center gap-2 mt-1">
                <span className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded text-sm">
                    <svg
                        className="w-4 h-4 fill-green-600"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
                    </svg>
                    <span className="font-medium">{restInfo?.info?.avgRating}</span>
                </span>
                <span className="text-sm text-gray-500">{restInfo?.info?.sla?.slaString}</span>
            </div>
            <div className="text-gray-600 text-sm mt-1 line-clamp-1">{restInfo?.info?.cuisines.join(", ")}</div>
        </div>
        </motion.div>
        </Link>
    )
}