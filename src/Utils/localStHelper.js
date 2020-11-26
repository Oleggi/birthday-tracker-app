import store from "store";

export const setToLocalStorage = (userId) => {
  const initialStore = store.get("activeUsers") || [];
  const isMacthed = initialStore.includes(userId);
  const activeUsers = initialStore.filter((id) => id !== userId);

  isMacthed
    ? store.set("activeUsers", activeUsers)
    : store.set("activeUsers", [...initialStore, userId]);
};
