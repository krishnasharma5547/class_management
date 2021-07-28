import Avatars from "./Avatars";

export default {
  title: "Avatars",
  component: Avatars,
};

export const main = (args: any) => <Avatars {...args}></Avatars>;

main.args = {
    size:"medium"
};
