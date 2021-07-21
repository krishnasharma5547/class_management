import Button from "./Button";
import '../../index.css'
import { HiLockClosed, HiLogin,HiClock } from "react-icons/hi";

const icon = { HiLockClosed, HiLogin, HiClock };
export default {
  title: "Button",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
    Icon: {
      options: Object.keys(icon),
      mapping: icon,
      control: {
        type: "select",
        
      },
    },
  },
};

export const main = (args: any) => <Button {...args}></Button>;

main.args = {
    children : "sign in",
};