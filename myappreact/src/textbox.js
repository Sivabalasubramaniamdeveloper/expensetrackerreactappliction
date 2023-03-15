import React from "react";
import {useRef} from 'react';

const Expensebox = () => {
  const inputRef = useRef(null);

  function handleClick() {
    return(<div>
        <h2> {inputRef.current.value *2}</h2>
    </div>)
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

      <button onClick={handleClick}>Log message</button>
    </div>
  );
};

export default Expensebox;