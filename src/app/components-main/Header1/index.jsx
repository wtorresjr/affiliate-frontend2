import React from "react";
import { Img, Text, Button } from "./..";
import Link from "next/link";

export default function Header1({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex md:flex-col items-center gap-[22px]`}>
      <div className="mx-auto flex w-full max-w-[1199px] flex-1 items-center justify-between md:self-stretch">
        <div className="flex w-[50%] flex-col items-start md:w-full">
          <div className="relative z-[1] flex h-[51px] items-center justify-center self-stretch bg-[url(/images/img_group_white_a700.svg)] bg-cover bg-no-repeat px-2.5 pb-2 pt-2.5 md:h-auto">
          </div>
          <div className="relative mt-[-51px] flex w-[44%] justify-center rounded-[11px] bg-white-A700 px-[13px] pb-3.5 pt-[13px] md:w-full">
            <div className="flex w-full items-center justify-between gap-5">
              <Text size="7xl" as="p" className="!text-[19.04px]">
                Brand 1 Product a
              </Text>
              <Img src="img_arrowdown.svg" width={16} height={8} alt="arrowdown" className="mb-1.5 h-[8px] self-end" />
            </div>
          </div>
        </div>
        <Button
          size="lg"
          shape="square"
          leftIcon={
            <Img src="img_plus_white_a700.svg" width={23} height={23} alt="plus" className="h-[23px] w-[23px]" />
          }
          className="min-w-[236px] gap-[15px] sm:px-5"
        >
          Add New Affiliate
        </Button>
      </div>
      <div className="flex w-[18%] items-center gap-[19px] md:w-full">
        <Link href="#">
          <Button shape="round" className="w-[51px] shadow-sm">
            <Img src="img_vector.svg" width={51} height={51} />
          </Button>
        </Link>
        <Text size="6xl" as="p">
          Mike Wazowski
        </Text>
        <Img src="img_lock.svg" width={51} height={51} alt="lock" className="h-[51px] w-[51px]" />
      </div>
    </header>
  );
}
