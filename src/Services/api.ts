import axios from "axios";
import { toast } from "react-toastify";

const isFormData = (data: any) => {
  try {
    return data["append"] != undefined;
  } catch (e) {
    return false;
  }
};

const api = axios.create({
  baseURL:
    document.location.hostname == "localhost"
      ? "http://localhost:1337"
      : "https://api.tomate.kysrv.xyz",
  transformRequest: [
    (data, headers: any) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers["token"] = token;
      }
      if (isFormData(data)) {
        headers["Content-Type"] = "multipart/form-data";
      } else {
        headers["Content-Type"] = "application/json";
      }
      return isFormData(data) ? data : JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data, headers) => {
      try {
        data = JSON.parse(data);

        if (data.error) {
          // bruh
          toast.error(data.error);
          return null;
        }

        return data;
      } catch {
        return data;
      }
    },
  ],
});

export default api;
