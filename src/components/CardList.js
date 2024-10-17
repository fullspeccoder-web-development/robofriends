import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponents = robots.map((robot) => (
    <Card key={robot.id} {...robot} />
  ));
  return <div>{cardComponents}</div>;
};

export default CardList;
