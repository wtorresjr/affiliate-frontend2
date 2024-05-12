import React from "react";
import { Heading, Img, Text } from "./";
import Header from "./Header";
import Header1 from "./Header1";
import Sidebar1 from "./Sidebar1";

export default function Wrapper({ children, header = 1 }) {
  return (
    <>
      <div className="flex items-start gap-[37px] md:flex-col">
        <Sidebar1 />
        <div className="flex flex-1 flex-col items-start md:self-stretch md:p-5 pb-10">
          {header === 1 && <Header />}
          {header === 2 && <Header1 />}
          {children}
        </div>
      </div>
    </>
  );
}
