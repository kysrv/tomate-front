import { useAppSelector } from "Features/Store";
import { UsersAction } from "Features/Users";
import React, { useEffect } from "react";
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
      {users.map(({ id, username, tasks, totalTime }, key) => (
        <React.Fragment key={key}>
          <UserCard
            key={id}
            id={id}
            username={username}
            tasks={tasks}
            totalTime={totalTime}
            profilePictureUrl={`https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Users;
