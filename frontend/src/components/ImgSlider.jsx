import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ImgSlider = ({ images }) => {
  const array = Object.keys(images);
  const [toggleSlider, setToggleSlider] = useState(false);
  const [count, setCount] = useState(0);
  const handleImgClick = () => {
    setToggleSlider(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setToggleSlider(false);
      document.body.style.overflow = "unset";
    }
  };

  const nextOnArrow = (e) => {
    if (e.keyCode === 37) {
      count == 0 ? setCount(array.length - 1) : setCount(count - 1);
    } else if (e.keyCode === 39) {
      count < array.length - 1 ? setCount(count + 1) : setCount(0);
    }
    window.removeEventListener("keydown", nextOnArrow);
  };
  useEffect(() => {
    window.addEventListener("keydown", nextOnArrow);
  }, [count, toggleSlider]);
  return (
    <div className="imgSlider">
      {toggleSlider && (
        <div className="slider ">
          <span
            className="close-slider"
            onClick={() => {
              setToggleSlider(false);
              document.body.style.overflow = "unset";
            }}
          >
            <AiOutlineCloseCircle />
          </span>

          <span
            onClick={() =>
              count == 0 ? setCount(array.length - 1) : setCount(count - 1)
            }
            className="left-chevron"
          >
            <BsChevronLeft />
          </span>
          <img
            key={count}
            src={images[array[count]]}
            alt=""
            onClick={() => {
              count < array.length - 1 ? setCount(count + 1) : setCount(0);
            }}
          />
          <span
            onClick={() => {
              count < array.length - 1 ? setCount(count + 1) : setCount(0);
            }}
            className="right-chevron"
          >
            <BsChevronRight />
          </span>
        </div>
      )}
      <div className="grid">
        {array.map(
          (image, index) =>
            index < 5 && (
              <div
                key={image}
                className={
                  image == array[0]
                    ? "main img-container skeleton"
                    : "img-container skeleton"
                }
              >
                <img
                  key={image}
                  className="img-slider"
                  src={images[image]}
                  alt=""
                  onClick={() => {
                    setCount(array.indexOf(image));
                    handleImgClick();
                  }}
                />
              </div>
            )
        )}
        <button
          onClick={() => {
            handleImgClick();
          }}
          className="button"
        >
          Voir toutes les photos
        </button>
      </div>
    </div>
  );
};

export default ImgSlider;
