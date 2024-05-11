"use client";
import React from "react";
import { Img, Text, Button } from "../../components";
import Header1 from "../../components/Header1";
import Sidebar4 from "../../components/Sidebar4";
import WireframeCampaigns1OneUserprofile from "../../components/WireframeCampaigns1OneUserprofile";

const data = [
  { commission: "Commission", amount: "$4,000.00", image: "img_vector_red_500_01.svg" },
  { commission: "Brand Referral Bonus", amount: "$4,000.00", image: "img_vector_5x3.svg" },
  { commission: "Clicks", amount: "$4,000.00", image: "img_vector_1.svg" },
  { commission: "Detail Page Views", amount: "$4,000.00", image: "img_vector_yellow_900_5x3.svg" },
  { commission: "Add to Carts", amount: "$4,000.00", image: "img_vector_2.svg" },
  { commission: "Conversions", amount: "$4,000.00", image: "img_vector_1.svg" },
];

export default function WireframeCampaigns1OnePage() {
  return (
    <div className="w-full">
      <div className="bg-indigo-50 pr-[43px] md:pr-5">
        <div className="flex items-start gap-[38px] md:flex-col">
          <Sidebar4 />
          <div className="flex flex-1 flex-col gap-[33px] md:self-stretch md:p-5">
            <Header1 />
            <div className="flex h-[494px] flex-col items-center gap-[93px] bg-[url(/images/img_group_white_a700_494x1493.svg)] bg-cover bg-no-repeat pb-[104px] pl-[11px] pt-[11px] md:h-auto md:gap-[69px] md:pb-5 sm:gap-[46px]">
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <div className="flex items-center gap-1.5">
                  <Button size="md" className="w-[45px] rounded-[22px]">
                    <Img src="img_settings_white_a700_1.svg" width={45} height={45} />
                  </Button>
                  <div className="flex flex-col items-start gap-0.5">
                    <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                      Sales
                    </Text>
                    <Text size="8xl" as="p" className="!text-[20.21px]">
                      $4,000.00
                    </Text>
                    <div className="flex items-center">
                      <Img
                        src="img_vector_yellow_900_5x3.svg"
                        width={3}
                        height={5}
                        alt="vector_eleven"
                        className="h-[5px] self-start"
                      />
                      <Text size="xs" as="p" className="!text-[6.93px] !text-yellow-900">
                        <span className="text-yellow-900">10%</span>
                        <span className="text-black-900">this month</span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 gap-[26px] md:flex-col md:self-stretch">
                  {data.map((d, index) => (
                    <WireframeCampaigns1OneUserprofile {...d} key={"userprofile" + index} className="px-2.5 pt-2.5" />
                  ))}
                </div>
              </div>
              <div className="flex w-[95%] flex-col items-start gap-[57px] md:w-full sm:gap-7">
                <Text size="lg" as="p">
                  Trends
                </Text>
                <Img
                  src="img_vector_yellow_900_139x1408.svg"
                  width={1408}
                  height={139}
                  alt="vector_thirteen"
                  className="h-[139px] w-full md:h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="self-stretch rounded-[20px] bg-white-A700 px-[21px] pb-1.5 pt-[21px] sm:px-5 sm:pt-5">
                <div className="flex flex-col gap-[9px]">
                  <div className="pb-60 pt-[13px] md:pb-5">
                    <div className="relative mt-[-253px] flex justify-between gap-5 pl-[35px] pr-[11px] sm:flex-col sm:pl-5">
                      <div className="flex items-center gap-0.5 self-end">
                        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                          Campaigns
                        </Text>
                        <Img
                          src="img_inbox.svg"
                          width={7}
                          height={7}
                          alt="inbox"
                          className="h-[7px] w-[7px] self-start"
                        />
                      </div>
                      <div className="flex items-center gap-[3px] self-end">
                        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                          Click-throughs
                        </Text>
                        <Img
                          src="img_inbox.svg"
                          width={7}
                          height={7}
                          alt="inbox"
                          className="h-[7px] w-[7px] self-start"
                        />
                      </div>
                      <div className="flex items-center gap-0.5 self-start">
                        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                          Total DPV
                        </Text>
                        <Img
                          src="img_inbox.svg"
                          width={7}
                          height={7}
                          alt="inbox"
                          className="h-[7px] w-[7px] self-end"
                        />
                      </div>
                      <div className="flex items-center gap-[3px] self-start">
                        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                          Total ATC
                        </Text>
                        <Img
                          src="img_inbox.svg"
                          width={7}
                          height={7}
                          alt="inbox"
                          className="h-[7px] w-[7px] self-end"
                        />
                      </div>
                      <div className="flex items-center gap-[3px] self-start">
                        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                          Total Purchases
                        </Text>
                        <Img
                          src="img_inbox.svg"
                          width={7}
                          height={7}
                          alt="inbox"
                          className="h-[7px] w-[7px] self-end"
                        />
                      </div>
                      <div className="flex items-center gap-[3px] self-start">
                        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                          Total Product Sales
                        </Text>
                        <Img
                          src="img_inbox.svg"
                          width={7}
                          height={7}
                          alt="inbox_eleven"
                          className="h-[7px] w-[7px] self-end"
                        />
                      </div>
                      <div className="flex items-center gap-[3px] self-start">
                        <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                          Brand Referral Bonus
                        </Text>
                        <Img
                          src="img_inbox.svg"
                          width={7}
                          height={7}
                          alt="inbox_thirteen"
                          className="h-[7px] w-[7px] self-end"
                        />
                      </div>
                    </div>
                    <div className="relative z-[2] pt-4">
                      <div className="flex flex-col gap-3.5">
                        <div className="flex items-center justify-between gap-5 md:flex-col">
                          <div className="flex w-[9%] flex-col items-center md:w-full">
                            <div className="flex h-[14px] items-center justify-between gap-5 self-stretch bg-[url(/images/img_group_white_a700_33x228.svg)] bg-cover bg-no-repeat pl-[9px] pr-1.5 md:h-auto">
                              <Text size="s" as="p" className="!text-[9.35px] !text-indigo-300">
                                Toocan.io - test
                              </Text>
                              <Img src="img_edit.svg" width={6} height={6} alt="edit" className="h-[6px] w-[6px]" />
                            </div>
                            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                              577676329572225084
                            </Text>
                            <div className="mt-[29px] flex h-[14px] items-start justify-evenly gap-[9px] self-stretch bg-[url(/images/img_group_white_a700_33x228.svg)] bg-cover bg-no-repeat md:h-auto">
                              <Text size="s" as="p" className="!text-[9.35px] !text-indigo-300">
                                Orca FlipFlops Gold...
                              </Text>
                              <Img src="img_edit.svg" width={6} height={6} alt="edit" className="h-[6px] w-[6px]" />
                            </div>
                            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                              578034740989730968
                            </Text>
                            <div className="mt-[31px] flex h-[14px] items-start justify-between gap-5 self-stretch bg-[url(/images/img_group_white_a700_33x228.svg)] bg-cover bg-no-repeat pl-[9px] pr-1.5 md:h-auto">
                              <Text size="s" as="p" className="!text-[9.35px] !text-indigo-300">
                                -
                              </Text>
                              <Img src="img_edit.svg" width={6} height={6} alt="edit" className="h-[6px] w-[6px]" />
                            </div>
                            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                              579291650882655194
                            </Text>
                            <div className="mt-8 flex h-[14px] items-start justify-between gap-5 self-stretch bg-[url(/images/img_group_white_a700_33x228.svg)] bg-cover bg-no-repeat pl-[9px] pr-1.5 md:h-auto">
                              <Text size="s" as="p" className="!text-[9.35px] !text-indigo-300">
                                -
                              </Text>
                              <Img src="img_edit.svg" width={6} height={6} alt="edit" className="h-[6px] w-[6px]" />
                            </div>
                            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                              579872499654352104
                            </Text>
                          </div>
                          <Img
                            src="img_group_black_900_1.svg"
                            width={1099}
                            height={177}
                            alt="image"
                            className="h-[177px] w-[78%] md:w-full"
                          />
                        </div>
                        <div className="h-px bg-blue_gray-100" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <Text size="s" as="p" className="self-start !text-[9.35px] !text-blue_gray-100">
                      Showing 1 of 5 entries
                    </Text>
                    <div className="flex w-[10%] items-center justify-center">
                      <Img
                        src="img_arrow_left_blue_gray_100.svg"
                        width={13}
                        height={13}
                        alt="arrowleft"
                        className="h-[13px] w-[13px] self-start"
                      />
                      <div className="ml-1.5 flex h-[13px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                        <Text size="s" as="p" className="!text-[9.35px]">
                          1
                        </Text>
                      </div>
                      <div className="ml-1.5 flex h-[13px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                        <Text size="s" as="p" className="!text-[9.35px]">
                          2
                        </Text>
                      </div>
                      <div className="ml-1.5 flex h-[13px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                        <Text size="s" as="p" className="!text-[9.35px]">
                          3
                        </Text>
                      </div>
                      <Text size="s" as="p" className="ml-[9px] self-end !text-[9.35px]">
                        ...
                      </Text>
                      <Text
                        size="s"
                        as="p"
                        className="ml-[9px] flex h-[13px] w-[13px] items-center justify-center bg-blue_gray-100 text-center !text-[9.35px]"
                      >
                        5
                      </Text>
                      <Img
                        src="img_clock_blue_gray_100_1.svg"
                        width={13}
                        height={13}
                        alt="clock"
                        className="ml-1.5 h-[13px] w-[13px] self-start"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="img_cursor.svg"
                width={30}
                height={30}
                alt="cursor"
                className="relative mr-[127px] mt-[-13px] h-[30px] w-[30px] md:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
