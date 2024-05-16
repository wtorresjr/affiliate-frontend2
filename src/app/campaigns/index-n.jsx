"use client";
import React from "react";
import { campaignData } from "../helperSeedData";
import { Button, DateRange, Img, Text } from "../../components";
import WireframeCampaigns1OneUserprofile from "../components-main/WireframeCampaigns1OneUserprofile";
import Header1 from "../../components/Header1";
import "../../styles/tailwind.css";

export const CampaignPageView = () => {
  return (
    <>
      <Header1 className="sm:flex flex-col-reverse gap-3 pb-3" />
      <DateRange />

      <div className="sm:flex flex-col flex-wrap gap-[5px] mt-3">
        {campaignData.map((d, index) => (
          <WireframeCampaigns1OneUserprofile
            {...d}
            key={"userprofile" + index}
            className="px-2.5 pt-2.5"
            campData={d}
          />
        ))}
      </div>
    </>
  );
};
