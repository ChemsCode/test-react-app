import React from "react";

const Overview = (props) => {
  //   const textArr = { props };

  const removeElementFromDom = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    element.remove();
  };

//   const removeElementFromArray = (arrLength) => {
//     let filteredArr = props.textArr.filter(item => item !== props.textArr[arrLength-1]);
//     return filteredArr;
//   }

  return (
    <ul>
      {props.textArr.map((item) => {
        return (
          <li key={item.id} id={item.id}>
            id:{item.id} <br />
            {item.taskOrder}. data:{item.data}
            <button
              onClick={() => {
                removeElementFromDom(item.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
