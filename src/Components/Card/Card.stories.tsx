import Card from "./Card";
import "../../index.css";

export default {
  title: "Card",
  component: Card
};

export const main = (args: any) => <Card {...args}></Card>;

main.args = {
  // name :"Krishna sharma",
  // description: "I am a react trainee at devslane",
};
