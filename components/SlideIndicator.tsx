import React from "react";
import { motion } from "framer-motion";

const SlideIndicator = ({ currentIndex, totalSlides }: { currentIndex: number; totalSlides: number }) => {
  return (
    <div className="absolute bottom-10 right-10 flex items-center space-x-2">
      <span className="text-white text-xl">{currentIndex + 1}</span>
      <motion.span
        key={currentIndex}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="text-white text-xl"
      >
        /
      </motion.span>
      <span className="text-white text-xl">{totalSlides}</span>
    </div>
  );
};

export default SlideIndicator;
