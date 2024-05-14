"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import { Heading, Img, Text, DownloadComponent, UploadComponent } from "../../components";
import Header from "../../components/Header";

export default function WireframeBrandAssetsOnePage() {
  return (
    <Wrapper>
      {/*Download divs - components*/}
      <Heading
        size="s"
        as="h2"
        className="mt-[59px] !text-[40.71px] !text-black-900"
        >
          Asset Library
            </Heading>

            <div className="mt-[21px] flex flex-col items-start w-full">
            <div className="h-[2px] bg-gray-100 w-full" />
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
      </div>
      <div className="flex flex-row pl-32 flex-wrap">
      <DownloadComponent itemTitle={"Brand Images"} />
      <DownloadComponent itemTitle={"Brand Documents"} />
      <DownloadComponent itemTitle={"Brand Videos"} />
      </div>

      {/*Upload divs - components*/}
      <Heading
        size="s"
        as="h2"
        className="mt-[59px] !text-[40.71px] !text-black-900"
        >
          Upload
      </Heading>
            <div className="mt-[21px] flex flex-col items-start w-full">
            <div className="h-[2px] bg-gray-100 w-full" />
            <div className="mt-1.5 flex items-center gap-[13px] self-end cursor-pointer">
          </div>    
      </div>
      <div className="flex flex-row pl-32 flex-wrap">
      <UploadComponent itemTitle={"Brand Images"} />
      <UploadComponent itemTitle={"Brand Documents"} />
      <UploadComponent itemTitle={"Brand Videos"} />
      </div>
    </Wrapper>
  );
}
