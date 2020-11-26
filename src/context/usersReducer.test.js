import { usersReducer } from "./usersReducer";
import * as types from "./types";

const initialState = {
  users: [
    { name: "User1", id: 5, isChecked: false },
    { name: "User2", id: 10, isChecked: false },
  ],
  checkedUsers: [],
  loading: false,
};

it("SHOW_PRELOADER", () => {
  const action = {
    type: types.SHOW_PRELOADER,
  };
  expect(usersReducer(initialState, action)).toEqual({
    ...initialState,
    loading: true,
  });
});

it("HIDE_PRELOADER", () => {
  const action = {
    type: types.HIDE_PRELOADER,
  };
  expect(usersReducer(initialState, action)).toEqual({
    ...initialState,
    loading: false,
  });
});

it("SET_IS_CHECKED", () => {
  const action = {
    type: types.SET_IS_CHECKED,
    payload: initialState.users,
    userId: 5,
  };
  expect(usersReducer(initialState, action)).toEqual({
    ...initialState,
    users: initialState.users.map((u) =>
      u.id === action.userId ? { ...u, isChecked: true } : u
    ),
  });
});

it('FETCH_USERS', () => {
    const action = {
      type: types.FETCH_USERS,
      payload: [
        { name: "U1", id: 5, isChecked: false },
        { name: "U2", id: 10, isChecked: false },
      ],
    };
    expect(usersReducer(initialState, action)).toEqual({
      ...initialState,
        loading: false,
        users: action.payload
    });
  });
