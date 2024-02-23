import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const list = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
  { id: 4, text: "Item 4" },
  { id: 5, text: "Item 5" },
];

const parentVariants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { staggerChildren: 0.1 } },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const childVariants = {
  initial: { x: -200 },
  animate: { x: 0, transition: { staggerChildren: 0.01 } },
  exit: {
    x: -200,
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export default function Animate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-screen bg-purple-700 p-2 font-anta">
      <div className="w-[400px] mx-auto ">
        <motion.button
          key={"fkdfdh"}
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
        {/* motion button ends here */}

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={parentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-5 bg-blue-900/60 p-3 rounded-md flex flex-col gap-4 text-white overflow-hidden"
            >
              {list.map((l, i) => (
                <motion.li
                  key={i}
                  variants={childVariants}
                  transition={{ exit: { duration: 0.6 } }}
                >
                  {l.text}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
