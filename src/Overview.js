import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
//   const textArr = { props };

  return (
    <ul>
      {props.textArr.map(item => {
        return <li key={uniqid()} >id:{item.id}<br/>data:{item.data}</li>;
      })}
    </ul>
  );
};

export default Overview;
