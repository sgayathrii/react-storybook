import "./button.css";

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type ButtonProps = {
  button: {
    text: string;
    size?: ButtonSize;
  };
};

const Button = ({ button: { text, size } }: ButtonProps) => {
  return <button className="button">{text}</button>;
};

export default Button;
