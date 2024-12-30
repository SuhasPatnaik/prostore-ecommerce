import Image from "next/image";
import loader from "./assets/loader.gif";
import { resolve } from "path";

const delay = new Promise((ms) => setTimeout(resolve, ms));

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Image src={loader} height={100} width={100} alt="Loading gif" />
    </div>
  );
};

export default Loading;
