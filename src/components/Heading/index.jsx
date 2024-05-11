import React from "react";

const sizes = {
  s: "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  md: "text-[49px] font-bold md:text-[45px] sm:text-[39px]",
  xs: "text-[21px] font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-yellow-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
