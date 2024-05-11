import React from "react";
import { Text, Img, Heading } from "./..";

export default function WireframeAffiliatesTwoSalessummary({
  lifetimesaleste = "Lifetime Sales",
  salesamounttext = "$25,000",
  arrowimage = "img_arrow_right.svg",
  percentagetext,
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start pt-[42px] pb-[47px] px-[43px] bg-white-A700 rounded-[20px]`}
    >
      <Text size="9xl" as="p" className="!text-[22.78px] !font-normal !text-gray-500">
        {lifetimesaleste}
      </Text>
      <Heading size="md" as="h1" className="!text-[49.23px] !text-black-900">
        {salesamounttext}
      </Heading>
      <div className="flex items-center gap-[3px]">
        <Img src={arrowimage} width={8} height={14} alt="arrow icon" className="h-[14px]" />
        <Text size="4xl" as="p" className="!text-[16.87px] !text-yellow-900">
          <span className="text-yellow-900">10%</span>
          <span className="text-black-900">&nbsp;this month</span>
        </Text>
      </div>
    </div>
  );
}
