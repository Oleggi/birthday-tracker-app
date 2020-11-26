import React, { useReducer } from "react";
import axios from "axios";
import { UsersContext } from "./usersContext";
import { usersReducer } from "./usersReducer";
import {
  FETCH_USERS,
  GET_FROM_LOCAL_STORAGE,
  HIDE_PRELOADER,
  SET_IS_CHECKED,
  SHOW_PRELOADER,
} from "./types";
import { setToLocalStorage } from "../Utils/localStHelper";

export const UsersState = ({ children }) => {
  const initialState = {
    users: [],
    checkedUsers: [],
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

  const getDataFromLocalStorage = () => {
    dispatch({ type: GET_FROM_LOCAL_STORAGE });
  };

  const setIsUserChecked = (userId) => {
    dispatch({ type: SET_IS_CHECKED, payload: state.users, userId });
    setToLocalStorage(userId);
  };

  return (
    <UsersContext.Provider
      value={{
        fetchUsers,
        getDataFromLocalStorage,
        users: state.users,
        loading: state.loading,
        setIsUserChecked,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
