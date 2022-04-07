import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const id = useParams();
  console.log(id);
  return <h1>Detail</h1>;
};

export default Detail;
