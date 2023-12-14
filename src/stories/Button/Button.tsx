import "./button.css";


export type ButtonProps = {
  button: {
    text: string;
    size?: 'small' | 'medium' | 'large';
    primary?: boolean;
    onClick?: () => void;
  };
};

const Button = ({ button: { text, size, primary = false, onClick } }: ButtonProps) => {

  const mode = primary ? 'button--primary' : 'button--secondary';

  return <button onClick={onClick} className={['button', `button--${size}`, mode].join(' ')}>{text}</button>;
};

export default Button;
