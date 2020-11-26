import {
  FETCH_USERS,
  SHOW_PRELOADER,
  HIDE_PRELOADER,
  SET_IS_CHECKED,
  GET_FROM_LOCAL_STORAGE,
} from "./types";
import { mappedUsersHelper } from "../Utils/mappedUsersHelper";
import { getFromLocalStHelper } from "../Utils/getFromLocalStHelper";

const handlers = {
  [SHOW_PRELOADER]: (state) => ({ ...state, loading: true }),
  [HIDE_PRELOADER]: (state) => ({ ...state, loading: false }),
  [FETCH_USERS]: (state, { payload }) => ({ ...state, users: payload }),
  [SET_IS_CHECKED]: (state, { payload, userId }) => ({
    ...state,
    users: mappedUsersHelper(payload, userId),
  }),
  [GET_FROM_LOCAL_STORAGE]: (state) => ({
    ...state,
    users: getFromLocalStHelper(state.users),
  }),
  DEFAULT: (state) => state,
};

export const usersReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
