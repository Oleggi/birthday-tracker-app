import React from "react";
import { BirthBlock } from "./BirthBlock/BirthBlock";
import pinImg from "../assets/images/drawing_pin.png";

export const UsersBirth = ({ users }) => {
  return (
    <div className="birth-container">
      <img src={pinImg} alt="Drawing pin"></img>
      <h2>Employees birthday</h2>
      <BirthBlock users={users} />
    </div>
  );
};
