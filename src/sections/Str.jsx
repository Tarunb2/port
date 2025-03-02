import React, { useEffect, useRef, useState } from "react";
import './../css/Strr.css';
import gsap from "gsap";
// import "./Str.css"; // Optional: If you want component-specific styles

const Str = () => {
  const boxRef = useRef();

  const [circle, setCircle] = useState(0);
  const [col1, setCol1] = useState(42);
  const [col2, setCol2] = useState(70);
  const [col3, setCol3] = useState(0);

  // Function to generate random values on button click
  const handleAnimate = () => {
    const randomX = gsap.utils.random(-500, 500, 10);
    const randomCol1 = gsap.utils.random(0, 255, 1);
    const randomCol2 = gsap.utils.random(0, 255, 1);
    const randomCol3 = gsap.utils.random(0, 255, 1);

    setCircle(randomX);
    setCol1(randomCol1);
    setCol2(randomCol2);
    setCol3(randomCol3);
  };

  // Update the GSAP animation when any of the state variables change
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: circle,
      duration: 0.5,
      backgroundImage: `linear-gradient(160deg, rgb(${col1}, ${col2}, ${col3}) 0%, rgb(${col1 - 50}, ${col2 - 50}, ${col3 - 50}) 100%)`,
      ease: "power2.out",
    });
  }, [circle, col1, col2, col3]);

  return (
    <main className="c-space uuu">
      {/* <h1 className="text-white-800">Game</h1> */}
      <button onClick={handleAnimate} className="tarun">Play with Them</button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};

export default Str;
