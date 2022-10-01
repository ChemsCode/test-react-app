import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  //   const textArr = { props };

  return (
    <ul>
      {props.textArr.map((item) => {
        return (
          <li key={uniqid()}>
            {item.taskOrder}. data:{item.data}
            <button
              onClick={(e) => {
                // props.textArr.splice(props.arrSize - 1, 1); never directly modify an array
                console.log(props.textArr);
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
