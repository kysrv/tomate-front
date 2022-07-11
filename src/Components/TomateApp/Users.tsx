import { useAppSelector } from "Features/Store";
import { UsersAction } from "Features/Users";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usersService } from "Services/userService";
import UserCard from "./UserCard";

const Users = ({}) => {
  const users = useAppSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await usersService.getAllUsers();

      if (!users) return;

      dispatch(UsersAction.load(users));
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col overflow-auto gap-2 rounded-lg w-96 h-full overflow-auto">
      {users.map(({ id, username, tasks, totalTime }) => (
        <UserCard
          key={id}
          id={id}
          username={username}
          tasks={tasks}
          totalTime={totalTime}
        />
      ))}
    </div>
  );
};

export default Users;
