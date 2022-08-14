import moment from "moment";

const UserCard = ({
  username,
  id,
  tasks,
  totalTime,
  profilePictureUrl,
}: any) => {
  totalTime = Math.round(moment.duration(totalTime).asHours() * 100) / 100;

  return (
    <div className="bg-gray-100 rounded flex flex-row h-16 items-center px-4 gap-6">
      <img
        className="rounded-full h-8 w-8 object-cover"
        src={profilePictureUrl}
      ></img>
      <div className="flex flex-col">
        <div className="text-sm font-medium truncate text-black">
          {username}
        </div>
        <div className="text-sm text-gray-500 truncate text-gray-600 ">
          {tasks.length} tasks completed
        </div>
      </div>
      <div className="flex-grow"></div>
      <div>{totalTime} h</div>
    </div>
  );
};

export default UserCard;
