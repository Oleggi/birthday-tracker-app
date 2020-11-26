import React from "react";
import { BirthBlock } from "./BirthBlock/BirthBlock";
import pinImg from "../../assets/images/drawing_pin.png";
import style from './usersBirth.module.css'

export const Birthdays = ({ users }) => {
  return (
    <div className={style.birth_container}>
      <img src={pinImg} alt="Drawing pin"></img>
      <h2>Employees birthday</h2>
      <BirthBlock users={users} />
    </div>
  );
};
