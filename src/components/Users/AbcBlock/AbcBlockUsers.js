import React, { useContext } from "react";
import { UsersContext } from "../../../context/usersContext";
import style from '../usersList.module.css'

export const AbcBlockUsers = ({ filteredUsers }) => {
  //Returns array of User components created from previously filtered users.
  const mappedUsers = filteredUsers.map((u) => {
    return (
      <User
        isChecked={u.isChecked}
        key={u.id}
        lastName={u.lastName}
        firstName={u.firstName}
        id={u.id}
      />
    );
  });
  return <>{mappedUsers}</>;
};

const User = ({ isChecked, lastName, firstName, id }) => {
  const { setIsUserChecked } = useContext(UsersContext);
  const onCheckedHandle = () => {
    setIsUserChecked(id);
  };
  return (
    <div className={style.abc_user}>
      <span>{lastName}</span>
      <span>{firstName}</span>
      <div className={style.space}></div>
      <input
        checked={isChecked}
        onChange={() => onCheckedHandle()}
        type="checkbox"
      />
    </div>
  );
};
