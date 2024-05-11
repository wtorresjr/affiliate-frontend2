"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import { Heading, Img, Text } from "../../components";
import Header from "../../components/Header";

export default function WireframeBrandAssetsOnePage() {
  return (
    <Wrapper>
      <Heading
        size="s"
        as="h1"
        className="mt-[54px] !text-[40.71px] !text-black-900"
      >
        Asset Library
      </Heading>
      <div className="mt-[21px] flex flex-col items-start self-stretch">
        <div className="h-[2px] self-stretch bg-gray-100" />
        <div className="mt-1.5 flex items-center gap-[13px] self-end cursor-pointer">
          <Text size="6xl" as="p">
            Download All
          </Text>
          <Img
            src="img_download.svg"
            width={13}
            height={13}
            alt="download"
            className="h-[13px] w-[13px]"
          />
        </div>
        <div className="ml-[121px] mt-[7px] flex w-[32%] gap-[69px] md:ml-0 md:w-full md:flex-row sm:flex-col">
          <div className="flex w-[40%] flex-col items-start gap-[23px] sm:w-full">
            <div className="flex h-[147px] items-center justify-center self-stretch bg-[url(/images/img_group_555.svg)] cursor-pointer hover:bg-[url(/images/img_group_554.svg)] bg-cover bg-no-repeat px-[46px] pb-[26px] pt-[46px] md:h-auto md:px-5 md:pt-5 sm:p-5">
              <Img
                src="img_user.svg"
                width={49}
                height={73}
                alt="userimage"
                className="h-[73px] w-[59%]"
              />
            </div>
            <Text size="lg" as="p" className="ml-3.5 md:ml-0">
              Brand Images
            </Text>
          </div>
          <div className="flex flex-1 flex-col items-start gap-[22px]">
            <div className="ml-2 self-stretch md:ml-0">
              <div className="flex items-center">
                <div className="flex h-[147px] flex-1 items-center justify-center bg-[url(/images/img_group_555.svg)] cursor-pointer hover:bg-[url(/images/img_group_554.svg)] bg-cover bg-no-repeat px-[46px] pb-[26px] pt-[46px] md:h-auto md:px-5 md:pt-5 sm:p-5">
                  <Img
                    src="img_user.svg"
                    width={49}
                    height={73}
                    alt="user"
                    className="h-[73px] w-[59%]"
                  />
                </div>
              </div>
            </div>
            <Text size="lg" as="p">
              Brand Documents
            </Text>
          </div>
        </div>
        <Heading
          size="s"
          as="h2"
          className="mt-[59px] !text-[40.71px] !text-black-900"
        >
          Upload
        </Heading>
        <div className="mt-5 h-[2px] self-stretch bg-gray-100" />
      </div>
      <div className="ml-[121px] mt-[65px] flex w-[32%] items-start justify-between gap-5 md:ml-0 md:w-full">
        <div className="flex w-[41%] flex-col items-start gap-[17px]">
          <Text size="lg" as="p" className="ml-3.5 md:ml-0">
            Brand Images
          </Text>
          <div className="flex flex-col items-start gap-[22px] self-stretch">
            <div className="flex flex-col items-center justify-center self-stretch rounded-[20px] bg-white-A700 hover:bg-[#FB7E10] cursor-pointer px-14 py-[66px] md:p-5">
              <Img
                src="img_plus.svg"
                width={46}
                height={46}
                alt="plus"
                className="h-[46px] w-[46px]"
              />
            </div>
            <div className="ml-4 flex flex-col items-start gap-[3px] md:ml-0">
              <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                Examples:
              </Text>
              <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                Logo Files
              </Text>
              <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                Branding Graphics
              </Text>
              <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
                Color Swatches
              </Text>
            </div>
          </div>
        </div>
        <div className="flex w-[43%] flex-col items-center gap-5">
          <Text size="lg" as="p" className="self-start">
            Brand Documents
          </Text>
          <div className="flex flex-col items-center justify-center self-stretch rounded-[20px] bg-white-A700 hover:bg-[#FB7E10] cursor-pointer px-14 py-[66px] md:p-5">
            <Img
              src="img_plus.svg"
              width={46}
              height={46}
              alt="plus"
              className="h-[46px] w-[46px]"
            />
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
              Examples:
            </Text>
            <Text size="s" as="p" className="!text-[9.35px] !text-gray-500">
              Brand Guide PDF or Word Doc
            </Text>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
