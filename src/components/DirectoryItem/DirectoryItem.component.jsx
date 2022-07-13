import React from "react";
import { useNavigate } from "react-router";
import "./DirectoryItem.module.styles.scss";

const DirectoryItem = ({
  id,
  title,
  imageUrl,
  linkUrl,
  size,
  match,
  history,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${size} directory-item`}
      onClick={() => navigate(`shop/${title.toLowerCase()}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default DirectoryItem;
