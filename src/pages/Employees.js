import React, { useContext, useEffect } from "react";
import { Birthdays } from "../components/Birthdays/Birthdays";
import { Users } from "../components/Users/Users";
import { UsersContext } from "../context/usersContext";
import { Preloader } from "../components/common/Preloader";

export const Employees = () => {
  const { fetchUsers, getDataFromLocalStorage, users, loading } = useContext(
    UsersContext
  );

  useEffect(() => {
    fetchUsers().then(() => {
      getDataFromLocalStorage();
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Users users={users} />
          <Birthdays users={users} />
        </>
      )}
    </div>
  );
};
