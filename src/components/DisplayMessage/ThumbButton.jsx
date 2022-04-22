import React, { useState } from "react";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import "./ThumbButton.css";

const ThumbButton = props => {
  const [buttonUpClass, setButtonUpClass] = useState("inactive");
  const [buttonDownClass, setButtonDownClass] = useState("inactive");
  function handleClickUp() {
    if (buttonUpClass === "inactive") {
      setButtonUpClass("thumbs-up-active");
    } else if (buttonDownClass === "thumbs-down-active") {
      setButtonDownClass("inactive");
    } else if (buttonUpClass === "thumbs-up-active") {
      setButtonUpClass("inactive");
    }
  }
  function handleClickDown() {
    if (buttonDownClass === "inactive") {
      setButtonDownClass("thumbs-down-active");
    } else if (buttonUpClass === "thumbs-up-active") {
      setButtonUpClass("inactive");
    } else if (buttonDownClass === "thumbs-down-active") {
      setButtonDownClass("inactive");
    }
  }
  return (
    <span>
      <button className={buttonDownClass} onClick={handleClickDown}>
        <FaThumbsDown className="thumbs-down" />
      </button>
      <button className={buttonUpClass} onClick={handleClickUp}>
        <FaThumbsUp className="thumbs-up" />
      </button>
    </span>
  );
};

export default ThumbButton;
