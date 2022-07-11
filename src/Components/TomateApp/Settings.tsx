import { useAppSelector } from "Features/Store";
import { Input, Vertical, Horizontal, Button } from "KysanUI";

const Settings = ({}) => {
  const profile = useAppSelector((store) => store.account);

  return (
    <div className="flex flex-col gap-4">
      <div className="gap-2 flex flex-col bg-gray-200 rounded-lg w-min p-10">
        <label className="text-gray-500">Id</label>
        <Input
          value={profile.id}
          placeholder="Enter your id"
          onChange={() => {}}
          s="w-64 text-center h-10"
        ></Input>
        <label className="text-gray-500">Username</label>
        <Input
          value={profile.username}
          placeholder="Enter your username"
          onChange={() => {}}
          s="w-64 text-center h-10"
        ></Input>

        <Button
          onClick={() => alert("not yet implemented sorry")}
          s="mt-4 font-thin text-white bg-green-500 w-full "
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Settings;
