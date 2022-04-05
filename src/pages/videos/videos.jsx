import React, { useEffect, useState } from "react";

const Videos = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube.search().then((items) => setVideos(items));
  }, []);

  return (
    <ul>
      {videos.map((video) => (
        <li key={video.etag}>{video.snippet.title}</li>
      ))}
    </ul>
  );
};

export default Videos;
