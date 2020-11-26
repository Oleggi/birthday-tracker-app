import React from "react";
import { AbcBlock } from "./AbcBlock/AbcBlock";
import style from './usersList.module.css'

export const UsersList = ({ users }) => {
  return (
    <div className={style.abc_container}>
      <div className={style.users_list_title}>Employees</div>
      <AbcBlock users={users} />
    </div>
  );
};
