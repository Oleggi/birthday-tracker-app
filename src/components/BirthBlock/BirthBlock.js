import React from "react";
import { getMonth } from "date-fns";
import { UserBirth } from "./UserBirth";

export const BirthBlock = ({ users }) => {
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const checkedUsers = users.filter((u) => u.isChecked);
  return (
    <>
      {months.map((m, index) => {
        const filteredUsers = checkedUsers.filter(
          (u) => months.indexOf(m) === getMonth(new Date(u.dob))
        );
        return (
          <div key={index} className='birth-block'>
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

