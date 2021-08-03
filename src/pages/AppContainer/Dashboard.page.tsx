import Sidebar from "../../Components/Sidebar/Sidebar";
import TopBar from "../../Components/TopBar";
import BrandImage from "../../images/logo.svg";
import Card from "../../Components/Card/Card";
import { BsSearch } from "react-icons/bs";
import React,{ useState,useEffect } from "react";
import { fetchGroups } from "../../Components/Api/Group";
import { ImSpinner9 } from "react-icons/im";
import Button from "../../Components/Button/Button";
import { useDispatch } from "react-redux";
import {
  GROUP_QUERY,
  GROUP_FETCH,
  GROUP_SHOW_HIDE,
  GROUP_SEARCHING,
  useAppSelector,
} from "../../Store";
// import { Group } from "../../Models/Group";
// import { GroupResponse } from "../../Models/GroupResponse";
interface props {}

const Dashboard: React.FC<props> = () => {
  // const [query, setQuery] = useState("");
  // const [group, setGroup] = useState<any>([]);
  const [changes, setChanges] = useState("");
  const dispatch = useDispatch();
  const query = useAppSelector((state) => state.groupQuery);
  const isSearching = useAppSelector((state) => state.isSearching);
  const isCardShow = useAppSelector((state) => state.isCardShow);

  const group = useAppSelector((state) => {
    const groupIds = state.groupQueryMap[state.groupQuery] || [];
    const group = groupIds.map((id) => state.groups[id]);
    return group;
  });
  useEffect(() => {
    isCardShow &&
      fetchGroups({ status: "all-groups", query }).then((groups) => {
        dispatch({ type: GROUP_SEARCHING, payload: false });
        return dispatch({
          type: GROUP_FETCH,
          payload: { groups: groups, query: query },
        });
      }); // eslint-disable-next-line
  }, [query, isCardShow]);
  // let changes =""
  const handleChange = (e: any) => {
    setChanges(e.target.value);
    // changes = e.target.value
    console.log("data card ", isCardShow);
    isCardShow && click();
  };
  const click = () => {
    if (changes !== "") {
      dispatch({ type: GROUP_SEARCHING, payload: true });
      dispatch({ type: GROUP_QUERY, payload: changes });
    } else {
      dispatch({ type: GROUP_QUERY, payload: "" });
    }
  };
  let value;
  const handleGroups = () => {
    if (isCardShow === true) {
      value = false;
    } else {
      value = true;
    }
    console.log("handleChange");
    // setShowGroups(!showGroups);
    dispatch({type: GROUP_SHOW_HIDE, payload:value})
    console.log("data card group", isCardShow);
    // click();
  };

  return (
    <>
      <TopBar img={BrandImage} brandName={"CRACO"} />
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
              {isSearching && (
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
              onClick={handleGroups}
            >
              {isCardShow ? "Hide Data" : "Fetch Groups"}
            </Button>
          </div>
          <div className="flex md:flex-row flex-col flex-wrap  py-4 px-4">
            {isCardShow &&
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
