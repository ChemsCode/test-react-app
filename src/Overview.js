import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
//   const textArr = { props };

  return (
    <ul>
      {props.textArr.map(item => {
        return <li key={uniqid()} >{item.taskOrder}. data:{item.data}</li>;
      })}
    </ul>
  );
};

export default Overview;
