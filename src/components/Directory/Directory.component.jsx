import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem.component";
import "./Directory.module.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory">
      {categories.map(({ id, ...rest }) => (
        <DirectoryItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;
