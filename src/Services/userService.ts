import api from "./api";

const getAllUsers = async () => {
  const { data: users } = await api.get("/users/all");

  return users;
};

export const usersService = { getAllUsers };
