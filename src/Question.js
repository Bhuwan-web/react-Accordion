import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question }) => {
  const { title, info, id } = question;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <li className="question" key={id}>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showInfo ? info : ""}</p>
    </li>
  );
};

export default Question;
