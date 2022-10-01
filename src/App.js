import React, { useState, useEffect } from "react";
import Overview from "./Overview";

const App = () => {
  const [text, setText] = useState({taskOrder: 1, data: '' });

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
        setText(prevState => {
          return {...text, taskOrder: prevState.taskOrder + 1}
        })
        }}>
        Add to storage
      </button>
      <Overview textArr={textStorage} arrSize = {textStorage.length} />
    </div>
  );
};

export default App;
