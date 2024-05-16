import React from "react";
import { Text, Img, Button } from "./..";

export default function WireframeCampaigns1OneUserprofile({
  image,
  percentage,
  commission,
  amount,
  // ...props
}) {
  console.log(image, "Image");

  return (
    // <div
    //   {...props}
    //   className={`${props.className} sm:flex items-center pb-3 border-black-900 border-[0.5px] border-solid bg-indigo-50 rounded-[20px] active:bg-white-A700`}
    // >
    <div className="sm:flex items-center pb-3 border-black-900 border-[0.5px] border-solid bg-indigo-50 rounded-[20px] active:bg-white-A700">
      <Button size="md" className="w-[40px] rounded-[22px] bg-black-900">
        <Img src={image} width={45} height={45} />
      </Button>
      <div className="flex flex-col items-start gap-0.5">
        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
          {commission}
        </Text>
        <Text size="xxl" as="p" className="sm:!text-5">
          {amount}
        </Text>
        <div className="flex items-center">
          <Img
            src={image}
            width={3}
            height={5}
            alt="image"
            className="h-[5px] self-start"
          />
          <Text size="xs" as="p" className="!text-[6.93px] !text-red-500_01">
            <span className="text-red-500_01">{`${percentage}%`}</span>
            <span className="text-black-900">&nbsp;this month</span>
          </Text>
        </div>
      </div>
    </div>
  );
}
