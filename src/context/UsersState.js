import React, { useReducer } from "react";
import axios from "axios";
import { UsersContext } from "./usersContext";
import { usersReducer } from "./usersReducer";
import {
  FETCH_USERS,
  HIDE_PRELOADER,
  SET_IS_CHECKED,
  SHOW_PRELOADER,
} from "./types";

export const UsersState = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(usersReducer, initialState);

  const showPreloader = () => dispatch({ type: SHOW_PRELOADER });
  const hidePreloader = () => dispatch({ type: HIDE_PRELOADER });

  const fetchUsers = async () => {
    showPreloader();
    const res = await axios.get(
      "https://yalantis-react-school-api.yalantis.com/api/task0/users"
    );
    hidePreloader();
    const payload = res.data.map((user) => {
      return {
        ...user,
        isChecked: false,
      };
    });
    dispatch({ type: FETCH_USERS, payload });
  };

  const setIsUserChecked = (userId) => {
    dispatch({ type: SET_IS_CHECKED, payload: state.users, userId });
  };

  return (
    <UsersContext.Provider
      value={{
        fetchUsers,
        users: state.users,
        birthdays: state.birthdays,
        loading: state.loading,
        setIsUserChecked,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
