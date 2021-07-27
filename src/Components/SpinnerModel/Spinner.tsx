import React from "react";
import { ImSpinner4 } from "react-icons/im";
interface props{
    message:string
}
const Spinner: React.FC<props> = ({message}) =>{
return (
  <>
    <div className="bg-gray-200 shadow-xl py-8 mx-auto px-8 w-1/2 h-96 text-center">
      <h1 className="text-2xl font-mono ">{message}</h1>
      <div className="text-center">
        <ImSpinner4 className="w-24 h-24  my-auto animate-spin text-center mx-auto mt-8" />
      </div>
    </div>
  </>
);
}

export default React.memo(Spinner);