import React, { useState, useEffect } from "react";
import Overview from "./Overview";
import uniqid from "uniqid"

const App = () => {
  const [text, setText] = useState({id:uniqid(),taskOrder: 1, data: '' });

  const [textStorage, setTextStorage] = useState([]);


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
        setText((prevState )=> {
          return {...text,id: uniqid(), taskOrder: prevState.taskOrder + 1}
        })
        }}>
        Add to storage
      </button>
      <Overview textArr={textStorage} setTextStorage={setTextStorage} 
      setText={setText} text={text}/>
    </div>
  );
};

export default App;
