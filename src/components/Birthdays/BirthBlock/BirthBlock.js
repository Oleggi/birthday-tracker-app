import React from "react";
import { getMonth } from "date-fns";
import { UserBirth } from "./UserBirth";
import { months } from "../../../constants/months";
import style from '../usersBirth.module.css';

export const BirthBlock = ({ users }) => {
  const checkedUsers = users.filter((u) => u.isChecked);
  if (checkedUsers.length === 0) {
    return <h3>No employees selected</h3>;
  }
  return (
    <>
      {months.map((m, index) => {
        const filteredUsers = checkedUsers.filter(
          (u) => months.indexOf(m) === getMonth(new Date(u.dob))
        );
        return (
          <div key={index} className={style.birth_block}>
            {filteredUsers.length > 0 ? (
              <>
                <h4>{m}</h4>
                <ul>
                  <UserBirth filteredUsers={filteredUsers} />
                </ul>
              </>
            ) : null}
          </div>
        );
      })}
    </>
  );
};
