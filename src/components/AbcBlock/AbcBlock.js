import React from "react";
import { AbcBlockUsers } from "./AbcBlockUsers";

export const AbcBlock = ({ users }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  return (
    <>
      {alphabet.map((letter, index) => {
         //Filtering out users that aren't equal to certain letter in alphabet.
        const filteredUsers = users.filter((u) => u.lastName[0] === letter);  
        return (
          <div className='abc-block' key={index}>
            <h1>{letter}</h1>
            {filteredUsers.length > 0 ?  <AbcBlockUsers filteredUsers={filteredUsers}/> : <div>--------</div>}
          </div>
        );
      })}
    </>
  );
};
