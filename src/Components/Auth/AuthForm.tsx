import Brand from "./Brand";

const AuthForm = (props: any) => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center px-12 py-8">
      <Brand />
      <div className="flex grow"></div>
      <div
        className="flex flex-col rounded-md bg-white p-10 shadow-xl gap-10 w-full mx-32"
        style={{ width: "536px" }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default AuthForm;
