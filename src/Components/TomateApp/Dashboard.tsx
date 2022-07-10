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

const Dashboard = ({}) => {
  const account = useAppSelector((store) => store.account);

  let totalWorkedTime = account.tasks.reduce((p, n) => p + n.duration, 0);
  const totalTime = moment.duration(totalWorkedTime);
  return (
    <div className="w-full h-full flex flex-col gap-10 overflow-auto">
      <div className="flex gap-10">
        <InfoBox name="Worked Time">
          {totalTime.asHours()}h {totalTime.seconds()}s
        </InfoBox>
        <InfoBox name="Money Won">
          {totalTime.asHours() * 10 +
            Math.round((totalTime.seconds() * 10) / 60)}
          €
        </InfoBox>
      </div>
      <div>
        <h2 className="text-4xl text-bold">Recent Tasks</h2>
        <div className="overflow-auto">
          {account.tasks.map((task, i) => (
            <div>
              <h3>Task n°{i + 1}</h3>
              <div key={i}>Contenu{task.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
