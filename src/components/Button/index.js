import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
  square: "rounded-[0px]",
};
const variants = {
  outline: {
    green_600: "border-green-600 border-[1.5px] border-solid text-white-a700",
    white_A700: "border-white-a700 border-[3px] border-solid text-white-a700",
  },
};
const sizes = {
  xs: "h-[30px] px-1.5 text-[13px]",
  md: "h-[128px] px-[34px] text-[50px]",
  sm: "h-[74px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "sm",
  color = "green_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["green_600", "white_A700"]),
};

export { Button };

