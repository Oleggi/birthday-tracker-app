import {FETCH_USERS, SHOW_PRELOADER, HIDE_PRELOADER, SET_IS_CHECKED } from "./types";

const handlers = {
    [SHOW_PRELOADER]: state => ({...state, loading: true}),
    [HIDE_PRELOADER]: state => ({...state, loading: false}),
    [FETCH_USERS]: (state, {payload}) => ({...state, users: payload}),
    [SET_IS_CHECKED]: (state, {payload, userId}) => ({...state, users: payload.map(user => {
        if (user.id === userId) {
            return {...user, isChecked: !user.isChecked}
        } 
        return user;
    })}),
    DEFAULT: state => state
};

export const usersReducer = (state, action) => {
 const handle = handlers[action.type] || handlers.DEFAULT;
 return handle(state, action);   
};