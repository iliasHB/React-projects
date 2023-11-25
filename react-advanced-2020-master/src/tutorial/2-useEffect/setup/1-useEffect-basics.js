import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //The use Effect below will run everytime value is change on click
  useEffect(() => {
    if (value > 1) {
      document.title = `New Message (${value})`;
    }
  }, [value]);

  //The use Effect below will run just once on page rendering
  useEffect(() => {
    console.log("Hello world");
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
