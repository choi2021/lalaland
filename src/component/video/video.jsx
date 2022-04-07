import React from "react";
import { Link, useParams } from "react-router-dom";

const Video = ({ id, title, imgInfo }) => {
  return (
    <Link to={`/videos/${id}`}>
      <li>
        <img src={imgInfo.medium.url} alt="thumbnails" />
        <h1>{title}</h1>
      </li>
    </Link>
  );
};

export default Video;
