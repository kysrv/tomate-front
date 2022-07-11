import { useAppSelector } from "Features/Store";
import moment from "moment";

const InfoBox = (props: any) => {
  return (
    <div className="text-4xl">
      <div
        className="w-32 h-32 flex items-center justify-center bg-gray-100"
        style={{ borderRadius: "20px" }}
      >
        <span>{props.children}</span>
      </div>
    </div>
  );
};

const TaskCard = ({ index, name, timestamp, duration }: any) => {
  const totalTime = moment.duration(duration).asHours();
  const moneyWon = round(totalTime * 10);
  const hoursWorked = round(totalTime);
  return (
    <div className="bg-gray-100 rounded flex flex-row h-16 items-center px-4 gap-6">
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

const round = (number: number) => {
  return Math.round(number * 100) / 100;
};

const Dashboard = ({}) => {
  const account = useAppSelector((store) => store.account);

  let totalWorkedTime = account.tasks.reduce((p, n) => p + n.duration, 0);

  const totalTime = moment.duration(totalWorkedTime);
  return (
    <>
      <div className="flex flex-col h-full w-full overflow-auto">
        <div className="flex gap-10 mb-10 h-96">
          <InfoBox name="Worked Time">{round(totalTime.asHours())}h</InfoBox>
          <InfoBox name="Money Won">{round(totalTime.asHours() * 10)}€</InfoBox>
        </div>
        <h2 className="text-3xl mb-4">Recent Tasks</h2>
        <div className=" h-full w-96 bg-blue-300 flex-nowrap overflow-auto object-fit">
          <div className="fflex flex-col-reverse h-full w-full">
            {account.tasks.map((task, i) => (
              <TaskCard key={i} index={i} {...task} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
