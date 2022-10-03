import React from "react";

const Overview = ({textArr, setTextStorage, setText, text}) => {
  //   const textArr = { props };

  const removeElement = (id) => {
    let filteredArr = textArr.filter(item => item.id !== id);
    console.log(filteredArr);
    setTextStorage(filteredArr);
  }

  const editElement = (id, newValue) => {
    setTextStorage(prev => prev.map(item => item.id === id? newValue: item));
  }


  return (
    <ul>
      {textArr.map((item) => {
        return (
          <li key={item.id} id={item.id}>
            id:{item.id} <br />
            {item.taskOrder}. data:{item.data}
            <button
              onClick={() => {
                removeElement(item.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                editElement(item.id, {id: item.id, taskOrder: 1, data:"test"});
              }}
            >
              Edit
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
