import React from "react";

const ImageList = ({ image }) => {
  return (
    <div>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
        <div className="w-full rounded-md"></div>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};

export default ImageList;
