import React from "react";
import { AbcBlock } from "./AbcBlock/AbcBlock";

export const UsersList = ({ users, onAddBirthday }) => {
  return (
    <div className="abc-container">
      <div className="users-list-title">Employees</div>
      <AbcBlock users={users} />
    </div>
  );
};
