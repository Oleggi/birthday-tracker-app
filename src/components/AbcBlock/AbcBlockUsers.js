import React, { useContext, useState } from "react";
import { UsersContext } from "../../context/usersContext";

export const AbcBlockUsers = ({ filteredUsers }) => {
  //Returns array of User components created from previously filtered users.
  const mappedUsers = filteredUsers.map((u) => {
    return <User key={u.id} lastName={u.lastName} firstName={u.firstName} id={u.id} />;
  });
  return <>{mappedUsers}</>; 
};

const User = ({ lastName, firstName, id }) => {
  const [isChecked, setIsChecked] = useState(false);
  const {setIsUserChecked} = useContext(UsersContext);
  const onCheckedHandle = () => {
    setIsChecked(!isChecked)
    setIsUserChecked(id);
  }
  return (
    <div className='abc-user'>
      <span>{lastName}</span>
      <span>{firstName}</span>
      <div className='space'></div>
      <input
        checked={isChecked}
        onChange={() => onCheckedHandle()}
        type="checkbox"
      />
    </div>
  );
};
