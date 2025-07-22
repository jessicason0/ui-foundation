import React, { useState } from "react";

const matchaImgs = [
  {
    id: 0,
    img: "https://images.pexels.com/photos/5946639/pexels-photo-5946639.jpeg",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/8134134/pexels-photo-8134134.jpeg",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4540356/pexels-photo-4540356.jpeg",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  function handlePrev() {
    if (index <= 0) {
      setIndex(matchaImgs.length - 1);
    } else {
      setIndex(index - 1);
    }
    console.log(index);
  }

  function handleNext() {
    if (index >= matchaImgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  }

  return (
    <div className="slider">
      <h2>Matcha</h2>
      <div className="slider__content">
        <button className="slider__btn" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z" />
          </svg>
        </button>

        <div className="slider__imgs">
          {matchaImgs.map((item) => {
            const isTarget = item.id === index;
            return (
              <img
                src={item.img}
                alt="Matcha Image"
                key={item.id}
                style={{ opacity: isTarget ? "1" : "0" }}
              />
            );
          })}
        </div>
        <button className="slider__btn" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
