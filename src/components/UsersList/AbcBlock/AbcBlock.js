import React from "react";
import { AbcBlockUsers } from "./AbcBlockUsers";
import { alphabet } from '../../../constants/alphabet';
import style from '../usersList.module.css';


export const AbcBlock = ({ users }) => {
const ABC = alphabet.toUpperCase().split("");
  return (
    <>
      {ABC.map((letter, index) => {
         //Filtering out users that aren't equal to certain letter in ABC.
        const filteredUsers = users.filter((u) => u.lastName[0] === letter);  
        return (
          <div className={style.abc_block} key={index}>
            <h1>{letter}</h1>
            {filteredUsers.length > 0 ?  <AbcBlockUsers filteredUsers={filteredUsers}/> : <div>--------</div>}
          </div>
        );
      })}
    </>
  );
};
