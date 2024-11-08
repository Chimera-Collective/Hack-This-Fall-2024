import UserInput from "./userinput";
import OutputResponse from "./outputresponse";

const MainApp = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto p-4">
          <UserInput />
          <OutputResponse />
    </div>
  );
};

export default MainApp;