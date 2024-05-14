import { CloseSVG } from "@/assets/images";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Input } from "../../app/components-main/Input";
import { Button, Img, Text } from "./..";

export default function Header1({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  
  const pathname = usePathname();
  return (
    <header
      {...props}
      className={`${props.className} flex pb-2 pr-4 flex-row gap-[22px] bg-bodygray-212 w-3/5 justify-between rounded-bl-[20px]`}>
      <div className=" flex gap-[22px] flex-grow">
        <Input
          name="Search Field"
          placeholder={`Search`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          suffix={
            <div className="flex items-center justify-center flex-grow">
              {searchBarValue?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue("")}
                  height={29}
                  width={29}
                />
              ) : (
                <Img
                  src="img_rewind.svg"
                  width={29}
                  height={29}
                  alt="rewind"
                  className="h-[29px] w-[29px] cursor-pointer"
                />
              )}
            </div>
          }
          className="flex flex-grow !h-[51px] rounded-lg items-center justify-center gap-[35px] bg-white-A700 pl-[26px] pr-[18px] text-lg text-blue_gray-100 sm:pl-5"
        />

        <Button
          size="lg"
          // shape="square"
          leftIcon={
            <Img
              src="img_plus_white_a700.svg"
              width={23}
              height={23}
              alt="plus"
              className="h-[23px] w-[23px]"
            />
          }
          className="flex grow-0 min-w-[236px] gap-[15px] sm:px-5 bg-[#FF3B2E] text-white-A700 rounded-[6px]"
        ><span className="lg:inline md:inline sm:hidden">Add New Affiliate</span>
        </Button>
      </div>
      <div className="flex justify-end items-center gap-[19px] md:w-full">
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
    </header>
  );
}
