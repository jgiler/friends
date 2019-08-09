import React from "react";
import "./style.css";

function Title(props) {
  console.log(props)
  return <h1 className="title">{props.title}</h1>;
}

export default Title;