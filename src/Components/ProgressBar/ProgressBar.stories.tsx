import ProgressBar from "./ProgressBar";
import "../../index.css";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
    // Icon: {
    //   options: Object.keys(icon),
    //   mapping: icon,
    //   control: {
    //     type: "select",
    //   },
    // },
  },
};

export const main = (args: any) => <ProgressBar {...args}></ProgressBar>;

main.args = {
  progressPercentage:"80",
};
