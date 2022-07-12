import { useAppSelector } from "Features/Store";
import moment from "moment";
import Utils from "Services/Utils";
import InfoBox from "./InfoBox";
import TaskCard from "./TaskCard";

const Dashboard = ({}) => {
  const account = useAppSelector((store) => store.account);

  let totalWorkedTime = account.tasks.reduce((p, n) => p + n.duration, 0);

  const totalTime = moment.duration(totalWorkedTime);
  return (
    <>
      <div className="flex flex-col h-full w-full overflow-auto">
        <div className="flex gap-10 mb-10 h-96">
          <InfoBox name="Worked Time">
            {Utils.round(totalTime.asHours())}h
          </InfoBox>
          <InfoBox name="Money Won">
            {Utils.round(totalTime.asHours() * 10)}€
          </InfoBox>
        </div>
        <h2 className="text-3xl mb-4">Recent Tasks</h2>
        <div className="h-full w-96 p-4 flex-nowrap overflow-auto object-fit">
          <div className="flex flex-col-reverse h-full w-full overflow-auto gap-1">
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
