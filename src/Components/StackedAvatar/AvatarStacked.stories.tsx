import StackedAvatar from "./StackedAvatar";

export default {
  title: "StackedAvatar",
  component: StackedAvatar,
};

export const main = (args: any) => <StackedAvatar {...args}></StackedAvatar>;

main.args = {
  List_of_images :""
};
