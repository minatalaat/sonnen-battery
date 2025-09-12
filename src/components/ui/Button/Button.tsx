import type React from "react";
import { StyledButton } from "./Button.styles";
import type { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children }) => {
    return (<StyledButton>{children}</StyledButton>)
}

export default Button