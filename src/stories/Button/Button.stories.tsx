import Button from "./Button";

export default {
  component: Button,
  title: "button",
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    button: {
      text: "Submit",
      size: "medium",
      primary: true,
    },
  },
};

export const Secondary = {
  args: {
    button: {
      text: "Reset",
      size: "small",
    },
  },
};
