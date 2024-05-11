import React from "react";
import { Text, Img, Button } from "./..";

export default function WireframeCampaigns1OneUserprofile({
  commission = "Commission",
  amount = "$4,000.00",
  image = "img_vector_red_500_01.svg",
  percentage,
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center pb-3 gap-[5px] border-black-900 border-[0.5px] border-solid bg-indigo-50 rounded-[20px]`}
    >
      <Button size="md" className="w-[45px] rounded-[22px]">
        <Img src="img_contrast.svg" width={45} height={45} />
      </Button>
      <div className="flex flex-col items-start gap-0.5">
        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
          {commission}
        </Text>
        <Text size="8xl" as="p" className="!text-[20.21px]">
          {amount}
        </Text>
        <div className="flex items-center">
          <Img src={image} width={3} height={5} alt="image" className="h-[5px] self-start" />
          <Text size="xs" as="p" className="!text-[6.93px] !text-red-500_01">
            <span className="text-red-500_01">10%</span>
            <span className="text-black-900">&nbsp;this month</span>
          </Text>
        </div>
      </div>
    </div>
  );
}
