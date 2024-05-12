"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { Button, Heading, Img, Text, TextArea } from "../../components";
import Sidebar11 from "../../components/Sidebar11";
import WireframeAffiliatesTwoSalessummary from "../../components/WireframeAffiliatesTwoSalessummary";

export default function WireframeAffiliatesTwoPage() {
  return (
    <Wrapper>
      <div className="flex gap-[37px] md:flex-col ">
        <div className="flex w-[22%] flex-col items-center gap-[219px] rounded-[21px] bg-white-A700 px-[49px] pb-[54px] pt-[51px] md:w-full md:gap-[164px] md:p-5 sm:gap-[109px]">
          <div className="flex flex-col items-center gap-[25px] self-stretch">
            <Img
              src="img_group_black_900.svg"
              width={206}
              height={206}
              alt="image"
              className="h-[206px] w-[206px]"
            />
            <Heading
              size="s"
              as="h1"
              className="!text-[40.71px] !text-black-900"
            >
              Mike Wazowski
            </Heading>
            <div className="flex w-[68%] flex-col md:w-full">
              <div className="flex justify-between gap-5">
                <Img
                  src="img_facebook.svg"
                  width={33}
                  height={33}
                  alt="facebook"
                  className="h-[33px] w-[33px]"
                />
                <Img
                  src="img_info.svg"
                  width={33}
                  height={33}
                  alt="info"
                  className="h-[33px] w-[33px]"
                />
                <Img
                  src="img_vector_gray_500.svg"
                  width={33}
                  height={33}
                  alt="vector"
                  className="h-[33px] w-[33px]"
                />
                <Button size="sm" shape="square" className="w-[33px]">
                  <Img src="img_group_gray_500.svg" width={33} height={33} />
                </Button>
              </div>
              <Img
                src="img_cursor.svg"
                width={30}
                height={30}
                alt="cursor"
                className="relative ml-[23px] mt-[-15px] h-[30px] w-[30px] md:ml-0"
              />
            </div>
            <div className="flex">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-6">
                  <Img
                    src="img_call_gray_500.svg"
                    width={20}
                    height={20}
                    alt="call"
                    className="h-[20px] w-[20px]"
                  />
                  <Img
                    src="img_lock_gray_500.svg"
                    width={21}
                    height={16}
                    alt="lock"
                    className="h-[16px] w-full"
                  />
                  <Img
                    src="img_globe.svg"
                    width={21}
                    height={20}
                    alt="globe"
                    className="h-[20px] w-full md:h-auto"
                  />
                </div>
                <div className="flex flex-col items-start gap-[17px]">
                  <Text
                    size="8xl"
                    as="p"
                    className="!text-[20.38px] !text-gray-500"
                  >
                    (205) 555-201
                  </Text>
                  <Text
                    size="8xl"
                    as="p"
                    className="!text-[20.38px] !text-gray-500"
                  >
                    mike@yahoo.com
                  </Text>
                  <Text
                    size="8xl"
                    as="p"
                    className="!text-[20.38px] !text-gray-500"
                  >
                    mikewazowski.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[21px] rounded-[20px] bg-indigo-50 px-[21px] pb-[23px] pt-[21px] sm:p-5">
            <Button shape="round" className="w-[53px] !rounded-[26px]">
              <Img src="img_television_white_a700.svg" width={53} height={53} />
            </Button>
            <div className="flex flex-col items-start">
              <Text size="10xl" as="p" className="!text-[24.16px]">
                Partnership
              </Text>
              <Text size="10xl" as="p" className="!text-[24.16px]">
                Agreement
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-end gap-[53px] md:self-stretch md:p-5 sm:gap-[26px]">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex gap-[35px] self-stretch md:flex-col">
              {[...Array(3)].map((d, index) => (
                <WireframeAffiliatesTwoSalessummary
                  key={"salessummary" + index}
                  className="gap-[5px] md:p-5"
                />
              ))}
            </div>
            <div className="mt-[34px] self-stretch">
              <div className="flex flex-col gap-4">
                <div className="flex w-[72%] flex-wrap justify-between gap-5 md:w-full">
                  <Text size="9xl" as="p" className="!text-[22.82px]">
                    Promoted Brands
                  </Text>
                  <Text size="9xl" as="p" className="!text-[22.82px]">
                    Promoted Products
                  </Text>
                </div>
                <div className="flex gap-[37px] md:flex-col">
                  <div className="w-full rounded-bl-[19px] rounded-br-[18px] rounded-tl-[19px] rounded-tr-[19px] bg-white-A700 pb-[22px] pl-[43px] pr-7 pt-[47px] md:pl-5 md:pt-5 sm:p-5">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-[18px] self-start sm:flex-col">
                        <div className="flex flex-col items-start gap-7">
                          <Text size="3xl" as="p">
                            1. ORCA
                          </Text>
                          <Text size="3xl" as="p">
                            2. Natural Glo
                          </Text>
                          <Text size="3xl" as="p">
                            3. Hideaway Murphy Beds
                          </Text>
                        </div>
                        <div className="flex items-start">
                          <div className="flex flex-col gap-[21px]">
                            <div className="flex h-[25px] items-center bg-[url(/images/img_group_yellow_900.svg)] bg-cover bg-no-repeat md:h-auto">
                              <Text
                                size="3xl"
                                as="p"
                                className="!text-white-A700"
                              >
                                Campaign Ad Group Link
                              </Text>
                            </div>
                            <div className="flex h-[25px] items-center bg-[url(/images/img_group_white_a700_25x214.svg)] bg-cover bg-no-repeat md:h-auto">
                              <Text
                                size="3xl"
                                as="p"
                                className="!text-yellow-900"
                              >
                                Campaign Ad Group Link
                              </Text>
                            </div>
                            <div className="flex h-[25px] items-center bg-[url(/images/img_group_white_a700_25x214.svg)] bg-cover bg-no-repeat md:h-auto">
                              <Text
                                size="3xl"
                                as="p"
                                className="!text-yellow-900"
                              >
                                Campaign Ad Group Link
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="img_cursor.svg"
                            width={30}
                            height={29}
                            alt="cursor"
                            className="relative ml-[-15px] mt-1.5 h-[29px] w-[30px]"
                          />
                        </div>
                      </div>
                      <div className="mt-2.5 h-px bg-indigo-50" />
                      <div className="mt-[70px] flex items-center justify-between gap-5">
                        <Text
                          as="p"
                          className="self-start !text-[13.69px] !text-blue_gray-100"
                        >
                          Showing 1 of 5 entries
                        </Text>
                        <div className="flex w-[39%] items-center justify-center self-end">
                          <div className="flex flex-1 flex-col items-center self-start bg-blue_gray-100 p-1">
                            <Img
                              src="img_vector_black_900.svg"
                              width={3}
                              height={6}
                              alt="vector_fifteen"
                              className="h-[6px]"
                            />
                          </div>
                          <Text
                            size="md"
                            as="p"
                            className="ml-2 flex h-[16px] w-[16px] items-center justify-center bg-green-200 text-center !text-[11.06px]"
                          >
                            1
                          </Text>
                          <Text
                            size="md"
                            as="p"
                            className="ml-2 flex h-[16px] w-[16px] items-center justify-center bg-blue_gray-100 text-center !text-[11.06px]"
                          >
                            2
                          </Text>
                          <Text
                            size="md"
                            as="p"
                            className="ml-2 flex h-[16px] w-[16px] items-center justify-center bg-blue_gray-100 text-center !text-[11.06px]"
                          >
                            3
                          </Text>
                          <Text
                            size="md"
                            as="p"
                            className="ml-[11px] self-end !text-[11.06px]"
                          >
                            ...
                          </Text>
                          <Text
                            size="md"
                            as="p"
                            className="ml-[11px] flex h-[16px] w-[16px] items-center justify-center bg-blue_gray-100 text-center !text-[11.06px]"
                          >
                            5
                          </Text>
                          <div className="ml-2 flex flex-1 flex-col items-center self-start bg-blue_gray-100 p-1">
                            <Img
                              src="img_vector_black_900.svg"
                              width={3}
                              height={6}
                              alt="vector"
                              className="h-[6px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[23px] rounded-bl-[19px] rounded-br-[18px] rounded-tl-[19px] rounded-tr-[19px] bg-white-A700 px-[43px] pb-[22px] pt-[47px] md:px-5 md:pt-5 sm:p-5">
                    <div className="flex flex-col gap-[0.5px]">
                      <div className="flex flex-1 flex-col items-start">
                        <div className="flex self-end pb-[13px]">
                          <div className="flex h-[25px] items-center bg-[url(/images/img_group_black_900_25x214.svg)] bg-cover bg-no-repeat md:h-auto">
                            <Text
                              size="3xl"
                              as="p"
                              className="!text-yellow-900"
                            >
                              Campaign Ad Group Link
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="img_group_black_900_150x119.svg"
                          width={119}
                          height={150}
                          alt="campaignadimage"
                          className="relative mt-[-31px] h-[150px] w-[29%]"
                        />
                      </div>
                      <div className="h-px w-[418px] bg-indigo-50" />
                      <div className="flex flex-1 items-start justify-between gap-5">
                        <div className="mt-10 flex h-[25px] items-center bg-[url(/images/img_group_white_a700_25x214.svg)] bg-cover bg-no-repeat md:h-auto">
                          <Text size="3xl" as="p" className="!text-yellow-900">
                            Campaign Ad Group Link
                          </Text>
                        </div>
                      </div>
                      <div className="h-px w-[418px] bg-indigo-50" />
                      <div className="relative h-[170px] flex-1 md:h-auto md:w-full md:flex-none">
                        <div className="flex w-full flex-col items-start">
                          <Img
                            src="img_group_black_900_150x119.svg"
                            width={119}
                            height={150}
                            alt="image"
                            className="relative z-[1] h-[150px] w-[29%]"
                          />
                          <div className="relative mt-[-28px] flex self-end pb-[11px] pt-2.5">
                            <div className="flex h-[25px] items-center bg-[url(/images/img_group_white_a700_25x214.svg)] bg-cover bg-no-repeat md:h-auto">
                              <Text
                                size="3xl"
                                as="p"
                                className="!text-yellow-900"
                              >
                                Campaign Ad Group Link
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[34%] right-[-0.29px] m-auto flex h-[25px] items-center bg-[url(/images/img_group_white_a700_25x214.svg)] bg-cover bg-no-repeat md:h-auto">
                          <Text size="3xl" as="p" className="!text-yellow-900">
                            Campaign Ad Group Link
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <Text
                        as="p"
                        className="self-start !text-[13.69px] !text-blue_gray-100"
                      >
                        Showing 1 of 5 entries
                      </Text>
                      <div className="flex w-[39%] items-center justify-center self-end">
                        <Img
                          src="img_arrow_left.svg"
                          width={16}
                          height={16}
                          alt="arrowleft"
                          className="h-[16px] w-[16px] self-start"
                        />
                        <div className="ml-2 flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                          <Text size="md" as="p" className="!text-[11.06px]">
                            1
                          </Text>
                        </div>
                        <div className="ml-2 flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                          <Text size="md" as="p" className="!text-[11.06px]">
                            2
                          </Text>
                        </div>
                        <Text
                          size="md"
                          as="p"
                          className="ml-2 flex h-[16px] w-[16px] items-center justify-center bg-blue_gray-100 text-center !text-[11.06px]"
                        >
                          3
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="ml-[11px] self-end !text-[11.06px]"
                        >
                          ...
                        </Text>
                        <div className="ml-[11px] flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                          <Text size="md" as="p" className="!text-[11.06px]">
                            5
                          </Text>
                        </div>
                        <Img
                          src="img_clock_blue_gray_100.svg"
                          width={16}
                          height={16}
                          alt="clock"
                          className="ml-2 h-[16px] w-[16px] self-start"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text size="9xl" as="p" className="mt-[31px] !text-[22.82px]">
              <span className="text-black-900">Notes&nbsp;</span>
              <span className="text-[15px] text-gray-500">
                (Internal Use Only)
              </span>
            </Text>
            <TextArea
              shape="round"
              name="group545"
              placeholder={`in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, `}
              className="mt-4 self-stretch text-gray-500 sm:p-5"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
