import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card" + props.className;

  return <div className={`${classes.card}`}>{props.children}</div>;
};

export default Card;
