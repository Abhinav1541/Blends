import React from "react";

const sizes = {
  textxs: "text-[20px] font-normal not-italic",
  texts: "text-[90px] font-normal not-italic md:text-[48px]",
  textmd: "text-[190px] font-normal md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-a700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

