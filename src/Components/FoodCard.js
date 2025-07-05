import { motion } from "framer-motion";

export default function Foodcard({ foodData }) {
  return (
    <>
      <a href={foodData?.action?.link}>
        <motion.div
          className="relative overflow-hidden rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            className="w-44 h-52 object-cover rounded-xl shadow-md"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              foodData?.imageId
            }
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
            <div className="p-3 w-full text-center">
              <span className="bg-white/80 text-indigo-800 px-3 py-1 text-sm font-medium rounded-full">
                View More
              </span>
            </div>
          </div>
        </motion.div>
      </a>
    </>
  );
}