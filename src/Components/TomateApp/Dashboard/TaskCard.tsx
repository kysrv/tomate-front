import moment from "moment";
import Utils from "Services/Utils";

const TaskCard = ({ index, name, timestamp, duration }: any) => {
  const totalTime = moment.duration(duration).asHours();
  const moneyWon = Utils.round(totalTime * 10);
  const hoursWorked = Utils.round(totalTime);
  return (
    <div className="bg-gray-100 rounded flex flex-row w-full items-center px-4 gap-6">
      <div className="text-xl font-bold">#{index + 1}</div>
      <div className="flex flex-col">
        <div className="text-sm font-medium truncate text-black">{name}</div>
        <div className="text-sm text-gray-500 truncate text-gray-600 ">
          {hoursWorked}h
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="text-green-400 font-bold">+{moneyWon} €</div>
    </div>
  );
};

export default TaskCard;
