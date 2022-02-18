import React, { FC } from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.css";
import { ButtonSizes, ButtonVariant } from "./enums";

const cx = classNames.bind(styles);

export interface ButtonProps {
  variant: ButtonVariant;
  size?: ButtonSizes;
  children: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  handleClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.Primary,
  size = ButtonSizes.Medium,
  type = "button",
  handleClick,
  children,
}) => {
  return (
    <button
      className={cx("button", {
        buttonPrimary: variant === ButtonVariant.Primary,
        buttonSecondary: variant === ButtonVariant.Secondary,
        buttonTertiary: variant === ButtonVariant.Tertiary,
        buttonSmall: size === ButtonSizes.Small,
        buttonMedium: size === ButtonSizes.Medium,
        buttonLarge: size === ButtonSizes.Large,
      })}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
