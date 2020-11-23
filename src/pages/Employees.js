import React, { useContext, useEffect } from "react";
import { UsersBirth } from "../components/UsersBirth";
import { UsersList } from "../components/UsersList";
import { UsersContext } from "../context/usersContext";
import { Preloader } from "../components/Preloader";

export const Employees = () => {
  const { fetchUsers, users, loading } = useContext(UsersContext);

  useEffect(() => {
    fetchUsers();
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
