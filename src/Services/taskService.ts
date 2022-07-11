import { stringify } from "querystring";
import api from "./api";

const submitTask = async (
  name: string,
  timestamp: number,
  duration: number
) => {
  const { data: validatedTask } = await api.post("/completeTask", {
    name,
    timestamp,
    duration,
    done: true,
  });

  return validatedTask;
};

export const taskService = { submitTask };
