import React from "react";
import { Text, Img, Button } from "./..";

export default function WireframeCampaigns1OneUserprofile({
  image,
  percentage,
  commission,
  amount,
  iconBgColor,
  // ...props
}) {
  return (
    // <div
    //   {...props}
    //   className={`${props.className} sm:flex items-center pb-3 border-black-900 border-[0.5px] border-solid bg-indigo-50 rounded-[20px] active:bg-white-A700`}
    // >
    <div className="sm:flex flex-row items-center pb-1 pt-1 border-black-900 border-[0.5px] border-solid bg-indigo-50 rounded-[20px] active:bg-white-A700 pl-2 pr-2">
      <div className="sm:flex flex-row">
        <Button
          size="md"
          className="w-[40px] h-[40px] rounded-[22px]"
          style={{ backgroundColor: iconBgColor }}
        >
          <Img src={image} width={45} height={45} />
        </Button>
      </div>

      <div className="sm:pl-2 pr-2 w-1/2 align-top">
      <Text size="s" as="p" className="sm:w-full !text-[14px] !text-gray-500 text-right">
      {commission}
      </Text>
      </div>
      <div className="sm:flex items-center right-8">
      <Text size="xxl" as="p" className="sm:!text-lg pr-2">
      {amount}
      </Text>
        <Img
          src={"img_vector_5x3.svg"}
          width={3}
          height={5}
          alt="image"
          className="h-[5px] self-start"
        />
        <Text size="s" as="p" className="sm:!text-xs !text-red-500_01 text-right">
        <span className="text-red-500_01">{`${percentage}%`}</span>
        <span className="text-black-900">&nbsp;this month</span>
      </Text>
      </div> 
    </div>
  );
}


      // <div className="flex flex-row">
      //   {commission}
      //   {amount}
      // </div>
      // <div className="flex flex-row w-full">
      //   <Img
      //     src={"img_vector_5x3.svg"}
      //     width={3}
      //     height={5}
      //     alt="image"
      //     className="h-[5px] self-start"
      //   />
      //   {/* <Text size="s" as="p" className="!text-xs !text-red-500_01"> */}
      //   <span className="text-red-500_01">{`${percentage}%`}</span>
      //   <span className="text-black-900">&nbsp;this month</span>
      // </div>