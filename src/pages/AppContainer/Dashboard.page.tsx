import Sidebar from "../../Components/Sidebar/Sidebar";
import TopBar from "../../Components/TopBar";
import BrandImage from "../../images/logo.svg";
import Card from "../../Components/Card/Card";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { fetchGroups } from "../../Components/Api/Group";
import { ImSpinner9 } from "react-icons/im";
import Button from "../../Components/Button/Button";
interface props {

}

const Dashboard: React.FC<props> = () => {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<any>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [changes, setChanges] = useState("");
  const [showGroups, setShowGroups] = useState(false);
  // const [type, setType] = useState(false)

  // eslint-disable-next-line no-lone-blocks
  useEffect(() => {
    showGroups &&
      fetchGroups({ status: "all-groups", query: query })
        .then((response: any) => {
          console.log(response);
          setGroup(response);
          setIsSubmitting(false);
        })
        .catch((error: any) => {
          console.log(error);
        });
  }, [query, showGroups]);

  const handleChange = (e: any) => {
    setChanges(e.target.value);
    showGroups &&  click();
  };
  const click = () => {
    if (changes !== "") {
      setIsSubmitting(true);
      setQuery(changes);
    } else {
      setQuery(changes);
    }
  };

  const showHideGroups = () => {
    setShowGroups(!showGroups);
    }

  return (
    <>
      <TopBar img={BrandImage} brandName={"CRACO"}/>
      <div className="flex mt-12">
        <Sidebar />
        <div className="flex flex-col  text-center py-2 px-4 w-full md:ml-60">
          <div className="bg-white shadow p-2 flex mx-auto w-96">
            <span className="w-auto flex justify-end items-center text-gray-500 p-2">
              <BsSearch />
            </span>
            <input
              className="rounded p-2 w-full bg-gray-300"
              type="text"
              placeholder="Search"
              onChange={handleChange}
              // onClick ={}
            />

            <div className="w-10 ml-4">
              {isSubmitting && (
                <ImSpinner9 className=" w-7 h-7 mt-2 animate-spin mx-2"></ImSpinner9>
              )}
            </div>

            {/* <Button
              type="submit"
              theme="secondary"
              onClick={click}
              className="mx-2"
            >
              Search
            </Button> */}
          </div>

          <div>
            <Button
              type="submit"
              theme="primary"
              className="my-4"
              onClick={showHideGroups}
            >
              {showGroups ? "Hide Data" : "Fetch Groups"}
            </Button>
          </div>
          <div className="flex md:flex-row flex-col flex-wrap  py-4 px-4">
            {showGroups &&
              group &&
              group.map((child: any, index: number) => (
                <Card
                  key={index}
                  description={child.description}
                  name={child.name}
                  creator={child.creator}
                  state={child.state}
                  group_image_url={
                    child.group_image_url
                      ? child.group_image_url
                      : "https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(Dashboard);
