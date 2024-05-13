import React from "react";
import { Heading, Img, Text } from "./";
import Header from "./Header";
import Header1 from "./Header1";
import Sidebar1 from "./Sidebar1";

export default function Wrapper({ children, header = 1 }) {
  return (
    <>
      <div className="flex items-start md:flex-col">
        <Sidebar1 />
        <div className="flex flex-1 flex-col items-start pt-20 p-5 md:self-stretch">
          {header === 1 && <Header />}
          {header === 2 && <Header1 />}
          {children}
        </div>
      </div>
    </>
  );
}
