import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: "ease-in-out",
    /*     transition: {
      x: {
        type: "spring",
        stiffness: 300,
        damping: 50,
        opacity: { duration: 0.3 },
      },
    }, */
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      transition: "ease-in-out",
      /*       transition: {
        x: {
          type: "spring",
          stiffness: 300,
          damping: 50,
          opacity: { duration: 0.3 },
        },
      }, */
    };
  },
};
const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextStep = (images) => {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  const prevStep = (images) => {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  };
  return (
    <div className="slideshow">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          className="slides"
          src={images[index]}
          alt="slides"
          key={images[index]}
          custom={direction}
        />
      </AnimatePresence>
      <button className="prevButton" onClick={() => prevStep(images)}>
        <BiChevronLeft />
      </button>
      <button className="nextButton" onClick={() => nextStep(images)}>
        <BiChevronRight />
      </button>
    </div>
  );
};

export default Slideshow;
