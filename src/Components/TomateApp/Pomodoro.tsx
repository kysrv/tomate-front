import { AccountActions } from "Features/Account";
import { useAppDispatch } from "Features/Store";
import { Input, Vertical, Horizontal, Button } from "KysanUI";
import { useState } from "react";
import { toast } from "react-toastify";
import { taskService } from "Services/taskService";

const Pomodoro = ({}) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(20);

  const dispatch = useAppDispatch();

  const sumbitTask = async () => {
    const task = await taskService.submitTask(
      name,
      Date.now(),
      duration * 1000 * 60
    );

    dispatch(
      AccountActions.setTaskDone({
        id: task._id,
        name,
        duration: duration,
        timestamp: task.timestamp,
      })
    );
    setName("");
    setDuration(20);
    toast.success("task successfully submited");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label>Task Name</label>
        <Input
          value={name}
          onChange={(value) => setName(value)}
          s="w-64 text-center"
          placeholder="describe what you will be doing there"
        ></Input>
      </div>
      <div className="flex flex-col">
        <label>Task Duration (min)</label>
        <Input
          value={duration}
          onChange={(value) => setDuration(value)}
          type="number"
          s="w-64 text-center"
        ></Input>
      </div>
      <Button onClick={() => sumbitTask()} s="p-2 text-white">
        Submit
      </Button>
    </div>
  );
};

export default Pomodoro;
