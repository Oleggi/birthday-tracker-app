import React from "react";
import { format } from "date-fns";
import style from '../usersBirth.module.css';

export const UserBirth = ({ filteredUsers }) => {
  return (
    <div className={style.birth_item}>
      {filteredUsers.map((u) => {
        const date = format(new Date(u.dob), "dd MMMM, yyyy 'year'");
        return (
          <li key={u.id}>
            <span>{u.lastName}</span>
            <span>{u.firstName}</span>-<span className={style.date}>{date}</span>
          </li>
        );
      })}
    </div>
  );
};
