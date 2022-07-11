import api from "./api";

const login = async (username: string, password: string) => {
  const { data } = await api.post("/login", {
    username,
    password,
  });

  return data.token;
};

const register = async (username: string, password: string) => {
  const { data } = await api.post("/register", {
    username,
    password,
  });

  return data.token;
};

const getUserProfile = async () => {
  const { data: userProfile } = await api.get("/profile");

  return userProfile;
};

export const accountService = {
  login,
  register,
  getUserProfile,
};
