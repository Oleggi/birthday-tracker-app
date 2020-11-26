import React, { useContext, useEffect } from "react";
import { UsersBirth } from "../components/UsersBirth/UsersBirth";
import { UsersList } from "../components/UsersList/UsersList";
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
          <UsersList users={users} />
          <UsersBirth users={users} />
        </>
      )}
    </div>
  );
};
