import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import BrandImage from "../../images/logo.svg";
import { fetchCard, groupSerchingAction } from "../../actions/group.actions";
import { fetchGroupById } from "../../Components/Api/Group";
import Card from "../../Components/Card/Card";
import TopBar from "../../Components/TopBar";
// import { Group } from "../../Models/Group";
import {
  fetchGroupByIdSelector,
  groupIsSerchingSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../Store";
import Sidebar from "../../Components/Sidebar/Sidebar";
interface props {}
const FullCardShow: React.FC<props> = () => {
  // const location = useLocation();
  // var path = location.pathname;
  // var id = path.substr(path.lastIndexOf("/") + 2);
  const groupId = useParams<{groupId:string}>().groupId;
  console.log(groupId);
  // const [data, setdata] = useState<Group>();
  const dispatch = useDispatch();
  const isSearching = useAppSelector(groupIsSerchingSelector);
  // const id = useAppSelector(fetchCardIdSelector);
  const cardData = useAppSelector(fetchGroupByIdSelector);
  useEffect(() => {
    dispatch(groupSerchingAction(true));
    // id !== 0 &&
    fetchGroupById({ id: parseInt(groupId) }).then((group) => {
      dispatch(fetchCard(group!));
      dispatch(groupSerchingAction(false));
      // setdata(group);
    }); //eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <div className="bg-gray-300 px-4 py-4 border-2 border-black"> */}
      <TopBar img={BrandImage} brandName={"CodeYogi"} />
      <div className="flex mt-12 pb-24">
        <Sidebar />
        <div className="flex flex-col  text-center py-2 px-4 w-full md:ml-60">
          <div className="flex justify-center items-center w-full">
            {cardData ? (
              <Card
                description={cardData?.description}
                name={cardData?.name}
                creator={cardData?.creator}
                state={cardData?.state}
                group_image_url={
                  cardData?.group_image_url
                    ? cardData?.group_image_url
                    : "https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"
                }
              />
            ) : (
              !isSearching && <div>"Id Not Found"</div>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default React.memo(FullCardShow);
