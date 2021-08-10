import React from "react";
import { User } from "../../Models/User";
import { State } from "../../Models/Group";
import img from "../../images/developer.jpg";

interface Props {
  name?: string;
  creator?: User;
  description?: string;
  group_image_url?: string;
  state?: State;
  index?: number;
}

export const handleError = (e:any) => {
    e.target.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSJ73ZlCoLJpdPHMAw-eTFnMrF1Mn1Ieaqvbu_BF9iSO4XWoX9LabOH5NEkugkZ1hUYs&usqp=CAU"
} 
const Card: React.FC<Props> = ({
  name,
  creator,
  description,
  group_image_url,
  index,
}) => {
  return (
    <>
      <div className="flex  max-w-lg  w-96 h-auto border-2 mr-4 mb-4 rounded-md  flex-shrink-0 overflow-hidden">
        <div className="flex">
          <div className="flex flex-shrink-0 items-center justify-center w-2/5  min-w-max max-w-max rounded-md bg-red-300 h-full p-4 ">
            {group_image_url ? (
              <img
                className="rounded-full h-24 w-24 object-cover object-center"
                src={group_image_url}
                alt={""}
                onError ={handleError}
                width="24"
                height="24"
              />
            ) : (
              <img className="rounded-full h-24 w-24" src={img} alt={""} />
            )}
          </div>
          <div className=" rounded-md  px-4 py-2">
            <h1 className="text-2xl font-semibold text-center mb-1 text-blue-600 border-b-2 border-gray-500">
              {name}
            </h1>
            <span className="">{description}</span>

            <div className="mt-4 ">
              <div className="font-medium text-center ">Creator Details : </div>
              <hr />
              <div>
                <span>
                  Name: {creator?.first_name + " " + creator?.last_name}{" "}
                </span>
                <span className="block">email: {creator?.email} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  // name: "krishna sharma",
  // description: "I am a react tranee at devsLane",
  // creator: {
  //   id: 1,
  //   first_name: "kk",
  //   last_name: "sharma",
  //   roles: "staff",
  //   middle_name: "",
  //   profile_pic_url: "",
  // },
};
export default Card;
