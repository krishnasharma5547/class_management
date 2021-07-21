import InputElement from "./InputElement"
import { FiUser, FiLock } from "react-icons/fi";

const icon = {FiLock, FiUser}
export default {
    title:"Input Element",
    component: InputElement,
    Icon: {
      options: Object.keys(icon),
      mapping: icon,
      control: {
        type: "select",
        
      },
}
}


export const main = (args: any) => <InputElement {...args}></InputElement>;

main.args ={
    className:"border-b border-gray-500",
    placeholder:"Enter Your Name"
}