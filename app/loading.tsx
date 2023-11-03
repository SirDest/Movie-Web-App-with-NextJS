import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-fit py-6 items-center font-[40px] place-content-center flex flex-col justify-center">
      <FadeLoader className="bg-white m-auto" />
      <p className="mt-8">
        Loading... If it takes time, check internet connection.
      </p>
    </div>
  );
};

export default Loading;
