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


export default InfoBox