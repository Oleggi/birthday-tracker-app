export const mappedUsersHelper = (users, userId) => {
  return users.map((user) => {
    if (user.id === userId) {
      return { ...user, isChecked: !user.isChecked };
    }
    return user;
  });
};
