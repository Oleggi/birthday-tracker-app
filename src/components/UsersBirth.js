import React from "react";
import { BirthBlock } from './BirthBlock/BirthBlock'

export const UsersBirth = ({users}) => {
  return(
    <div className='birth-container'>
      <h2>Employees birthday</h2>
       <BirthBlock users={users}/>
    </div>
  ) 
};






