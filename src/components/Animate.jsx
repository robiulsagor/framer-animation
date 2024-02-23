import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Animate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <section className="h-screen bg-purple-700 p-2">
        <div className="w-[400px] mx-auto ">
          <motion.button
            className="flex justify-between items-center bg-white w-full p-2 rounded text-2xl font-anta"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.1 }}
          >
            <span>Menu</span>
            <motion.span
              className="border-8 border-transparent border-t-black"
              animate={{ rotate: isOpen ? 180 : 0, y: isOpen ? -4 : 3 }}
            ></motion.span>
          </motion.button>
        </div>
      </section>
    </AnimatePresence>
  );
}
