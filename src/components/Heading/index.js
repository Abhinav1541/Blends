import React from "react";

const sizes = {
  headingxs: "text-[70px] font-extrabold md:text-[48px]",
  headings: "text-[140px] font-extrabold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-a700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

