import { motion } from "framer-motion";

export default function Shimmer() {
  // Create an array for shimmer cards
  const shimmerCards = Array.from({ length: 12 });

  return (
    <div className="flex flex-wrap w-[90%] mx-auto mt-20 gap-8 justify-center">
      {shimmerCards.map((_, idx) => (
        <motion.div
          key={idx}
          className="w-[280px] mb-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-lg overflow-hidden border border-indigo-50 animate-pulse"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05, duration: 0.4 }}
        >
          <div className="relative">
            <div className="w-70 h-44 rounded-xl bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-100 shimmer-bg"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/40 to-transparent"></div>
          </div>
          <div className="w-[95%] mx-auto mt-3">
            <div className="w-full h-6 bg-indigo-100 rounded mb-2"></div>
            <div className="w-full h-6 bg-indigo-100 rounded mb-2"></div>
            <div className="w-2/3 h-6 bg-indigo-100 rounded"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Add shimmer effect via Tailwind (add this to your global CSS if not already present):
// .shimmer-bg {
//   background: linear-gradient(90deg, #e0e7ff 25%, #ede9fe 50%, #e0e7ff 75%);
//   background-size: 200% 100%;
//   animation: shimmer 1.5s infinite linear;
// }
// @keyframes shimmer {
//   0% { background-position: 200% 0; }
//   100% { background-position: -200% 0; }
// }