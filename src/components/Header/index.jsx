import Link from "next/link";
import React from "react";
import { Button, Img, SelectBox, Text } from "./..";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const dropDownOptions = [
  { label: "Brand 1", value: "option1" },
  { label: "Brand 2", value: "option2" },
  { label: "Brand 3", value: "option3" },
];

export default function Header({ ...props }) {
  const pathname = usePathname();

  return (
    <header {...props} className={`${props.className} sm:mt-3`}>
      <div className="sm:flex flex-col-reverse gap-[22px] w-full ">
        <SelectBox
          size="md"
          shape="square"
          indicator={
            <Img
              src="img_arrowdown.svg"
              width={16}
              height={8}
              alt="arrow_down"
              className="flex h-[8px] w-[16px]"
            />
          }
          name="Brand Dropdown"
          placeholder={`Brand 1`}
          options={dropDownOptions}
          className="sm:flex w-full bg-white-A700 !rounded-[8px]"
        />
        <div className="sm:flex flex-row justify-between items-center gap-[19px]">
          <Button shape="round" className="w-[51px] shadow-sm bg-white-A700">
            <Img src="img_vector.svg" width={51} height={51} />
          </Button>

          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            {"John Doe"}
            <UserButton
              afterSignOutUrl={`${
                typeof window !== "undefined" ? window.location.origin : ""
              }${pathname}`}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
