"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import {
  Heading,
  Img,
  Text,
  DownloadComponent,
  UploadComponent,
} from "../../components";
import Header from "../../components/Header";

export default function WireframeBrandAssetsOnePage() {
  return (
    <Wrapper>
      {/*Download divs - components*/}
      <Header />
      <Heading
        size="s"
        as="h2"
        className="!text-xxl !text-black-900 sm:flex justify-center p-8 xs:!text-xl"
      >
        Asset Library
      </Heading>

      <div className="mt-[21px] flex flex-col w-full">
        {/* Line */}
        <div className="h-[2px] bg-gray-100 sm:flex"></div>
        <div className="cursor-pointer sm:flex justify-center items-center gap-4 pt-4 pb-4">
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
      </div>

      <div className="sm:flex flex-row flex-wrap justify-center">
        <DownloadComponent itemTitle={"Brand Images"} />
        <DownloadComponent itemTitle={"Brand Documents"} />
        <DownloadComponent itemTitle={"Brand Videos"} />
      </div>

      {/*Upload divs - components*/}
      <Heading
        size="s"
        as="h2"
        className="!text-xxl !text-black-900 sm:flex justify-center p-8 xs:!text-xl"
      >
        Upload
      </Heading>

      {/* Line */}

      <div className="sm:flex w-full bg-gray-100 h-[2px]"></div>
      <div className="sm:flex flex-row flex-wrap justify-center">
        <UploadComponent itemTitle={"Brand Images"} />
        <UploadComponent itemTitle={"Brand Documents"} />
        <UploadComponent itemTitle={"Brand Videos"} />
      </div>
    </Wrapper>
  );
}
