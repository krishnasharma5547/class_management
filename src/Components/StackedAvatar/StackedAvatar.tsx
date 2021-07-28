import React from "react";
interface props {
  userCount: number;
  List_of_images?: Array<string>;
}
const AvatarArray: React.FC<props> = ({ List_of_images, userCount }) => {
  "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg";
  return <>Hello</>;
};

AvatarArray.defaultProps = {};

export default React.memo(AvatarArray);
