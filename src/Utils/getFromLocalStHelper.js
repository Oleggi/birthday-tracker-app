import store from "store";

export const getFromLocalStHelper = (users) => {
  const activeUsersId = store.get("activeUsers") || [];
  if (activeUsersId.length < 0) return users;
  return users.map((u) => {
    return activeUsersId.includes(u.id) ? { ...u, isChecked: true } : u;
  });
};
