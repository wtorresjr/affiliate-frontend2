import React from "react";
import { Heading, Img, Text } from "./";
import Header from "./Header";
import Header1 from "./Header1";
import Sidebar1 from "./Sidebar1";

export default function Wrapper({ children, header }) {
  return (
    <>
      <div className="flex items-start">
        <Sidebar1 className="flex flex-col"/>
        <div className="sm:flex flex-col p-2">
          {header === 1 && <Header />}
          {header === 2 && <Header1 className="sm:bg-black-900" />}
          {children}
        </div>
      </div>
    </>
  );
}
