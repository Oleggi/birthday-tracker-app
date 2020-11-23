import React from 'react';
import { format } from "date-fns";

export const UserBirth = ({ filteredUsers }) => {
    return (
      <div className='birth-item'>
        {filteredUsers.map((u) => {
          const date = format(new Date(u.dob), "dd MMMM, yyyy");
          return (
            <li key={u.id}>
              <span>{u.lastName}</span>
              <span>{u.firstName}</span>-<span className='date'>{date}</span>
            </li>
          );
        })}
      </div>
    );
  };
  