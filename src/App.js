import React, { useState, useEffect } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

const App = () => {
  const [text, setText] = useState({id: uniqid(), data: '' });

  const [textStorage, setTextStorage] = useState([]);

  // useEffect(() => {
  //   setTextStorage([...textStorage, text])
  // }, [text]);

  // console.log(textStorage)

  return (
    <div>
      <form>
        <label for="textinput">Text input: </label>
        <input
          type="text"
          id="tinput"
          name="textinput"
          onChange={(e) => setText({...text, data: e.target.value})}
        />
      </form>
      <button onClick={() => {
        setTextStorage([...textStorage, text])
        setText({...text, id: uniqid()})
        }}>
        Add to storage
      </button>
      <Overview textArr={textStorage} />
    </div>
  );
};

export default App;
