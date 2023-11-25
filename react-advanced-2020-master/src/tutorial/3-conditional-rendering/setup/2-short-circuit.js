import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "Hello world"; //if text is false return the "Hello world"
  const secondValue = text && "Hello world"; // if text is true return the "Hello world"

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "Habeeb S.A"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error...</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
