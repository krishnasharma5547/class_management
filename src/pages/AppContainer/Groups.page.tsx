import Sidebar from "../../Components/Sidebar/Sidebar";
import TopBar from "../../Components/TopBar";
import BrandImage from "../../images/logo.svg";
// import Card from "../../Components/Card/Card";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { fetchGroupById, fetchGroups } from "../../Components/Api/Group";
import { ImSpinner9 } from "react-icons/im";
import Button from "../../Components/Button/Button";
import { useDispatch } from "react-redux";
import {
  // GROUP_FETCH,
  // GROUP_SEARCHING,
  useAppSelector,
} from "../../Store";
import {
  fetchCard,
  // fetchCard,
  // fetchFromId,
  // fetchFromId,
  groupFetchAction,
  // groupQueryAction,
  groupSerchingAction,
  groupShowHide,
} from "../../actions/group.actions";
import {
  // fetchCardIdSelector,
  // fetchGroupByIdSelector,
  groupCardShowSelector,
  groupIsSerchingSelector,
  groupQuerySelector,
  groupSelector,
} from "../../selectors/groups.selectors";
import { Group } from "../../Models/Group";
import { Link } from "react-router-dom";
// import FullCardShowPage from "./FullCardShow.page";
import { fetchGroup } from "../../middlewares/groups.middleware";

interface props {}
const Groups: React.FC<props> = () => {
  let link = "/groups";
  // const [query, setQuery] = useState("");
  // const [group, setGroup] = useState<any>([]);
  // const [changes, setChanges] = useState("");
  const dispatch = useDispatch();
  const query = useAppSelector(groupQuerySelector);
  const isSearching = useAppSelector(groupIsSerchingSelector);
  const isCardShow = useAppSelector(groupCardShowSelector);
  // const cardId = useAppSelector(fetchCardIdSelector) as number;
  // const card = useAppSelector(fetchGroupByIdSelector);
  // const group = useAppSelector((state) => {
  //   const groupIds = state.groups.queryMap[state.groups.query] || [];
  //   const group = groupIds.map((id) => state.groups.byId[id]);
  //   console.log("........",group)
  //   return group;
  // });

  const [cardId, setCardId] = useState(0);

  const group = useAppSelector(groupSelector);
  console.log(group);
  useEffect(() => {
    isCardShow &&
      fetchGroups({ status: "all-groups" }).then((groups) => {
        groups && dispatch(groupFetchAction(query, groups));
        // dispatch(groupSerchingAction(false));
      }); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    cardId !== 0 &&
      fetchGroupById({ id: cardId }).then((group) => {
        dispatch(groupSerchingAction(false));
        dispatch(fetchCard(group!));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardId]);

  // let changes =""
  // const handleChange = (e: any) => {
  //   setChanges(e.target.value);
  //   // console.log("data card ", isCardShow);
  //   isCardShow && click();
  // };
  // const click = () => {
  //   if (changes !== "") {
  //     dispatch(groupSerchingAction(true));
  //     dispatch(groupQueryAction(changes));
  //   } else {
  //     // dispatch(groupSerchingAction(true))
  //     dispatch(groupQueryAction(changes));
  //   }
  // };
  // let value;
  const handleGroups = () => {
    // setShowGroups(!showGroups);
    dispatch(groupShowHide(!isCardShow));
    // console.log("data card group", isCardShow);
    // click();
  };
  // const OpenGroup = (cardId: number) => {
  //   dispatch(groupSerchingAction(true));
  //   setCardId(cardId);
  //   <Link to="/groups/:id">
  //     <FullCardShowPage />
  //   </Link>;
  //   // group.forEach((child: Group) => {
  //   //   if (child.id === cardId) {
  //   //     dispatch(fetchCard(child));
  //   dispatch(groupSerchingAction(false));
  //   //     return 0;
  //   //   }
  //   //   return 0;
  //   // });
  //   // dispatch(fetchFromId(cardId));
  //   console.log("id Saved", cardId);
  // };

  const handleNext = () => {};

  const handlePrevios = () => {};
  return (
    <>
      <TopBar img={BrandImage} brandName={"CodeYogi"} />
      <div className="flex mt-12 pb-24">
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
              onChange={(e) => {
                isCardShow &&
                  fetchGroup({ query: e.target.value, status: "all-groups" });
              }}
              // onChange={(e) => dispatch(groupQueryAction(e.target.value))}
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
          <div className="flex">
            <div className="px-8 w-1/3">
              {isCardShow && group[0] && (
                <div className="">
                  <table className="table-auto text-justify border-2 border-black mt-8 w-full">
                    <thead>
                      <tr>
                        <th className="border-2 border-green-800 py-2 px-4">
                          Name
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.map((g: Group) => (
                        <tr className="border-2 border-green-800 cursor-pointer hover:bg-green-200">
                          <Link to={link + "/:" + g.id}>
                            <td
                              className=" border-green-800 py-1 px-4"
                              onClick={() => {
                                // OpenGroup(g.id);
                              }}
                            >
                              {g.name}
                            </td>
                          </Link>
                        </tr>
                      ))}
                      {!isSearching && group.length === 0 && "No data Found"}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            {/* <div className="mt-8">
              {card! && (
                <Card
                  description={card.description}
                  name={card.name}
                  creator={card.creator}
                  state={card.state}
                  group_image_url={
                    card.group_image_url
                      ? card.group_image_url
                      : "https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"
                  }
                />
              )}
            </div> */}

            <div className="bg-profileBottomBar rounded-t-md md:left-64 h-16 fixed bottom-0 items-center flex justify-between px-4 right-4">
              <Button
                type="reset"
                theme={"secondary"}
                className={"shadow-xl bg-blue-700 hover:bg-blue-800"}
                onClick={handlePrevios}
              >
                Previous
              </Button>
              <Button
                type="submit"
                theme={"outline"}
                className={
                  "bg-green-600 shadow-xl hover:bg-green-700 text-white w-20"
                }
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </div>
          {/* <div className="flex md:flex-row flex-col flex-wrap  py-4 px-4">
            {isCardShow &&
              group[1] &&
              group.map((child, index: number) => (
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default React.memo(Groups);
