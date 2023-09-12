import React, { useState } from "react";
import "./postItem.css";

const PostItem = ({ name, post, likes, Dislike }) => {
  const [isLike, SetIsLike] = useState(false);
  const [isDisliked, SetisDisliked] = useState(false);

  const handleDislikeClick = (e) => {
    SetisDisliked(!isDisliked);
    if (isLike === true) {
      SetIsLike(!isLike);
    }
  };

  const handleLikeClick = (e) => {
    SetIsLike(!isLike);
    if (isDisliked === true) {
      SetisDisliked(!isDisliked);
    }
  };

  const btnLike = isLike ? "active-btn" : "";
  const btnDislike = isDisliked ? "active-btn" : "";

  return (
    <div className="post-box">
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <p>{post}</p>
      </div>
      <div>
        <button className={btnLike} onClick={handleLikeClick}>
          Like
        </button>
        <button className={btnDislike} onClick={handleDislikeClick}>
          DisLike
        </button>
      </div>
    </div>
  );
};

export default PostItem;
