"use client";
import React from "react";
import { campaignData } from "../helperSeedData";
import { Button, DateRange, Img, Text } from "../../components";
import Header1 from "../../components/Header1";
import "../../styles/tailwind.css";

export const CampaignPageView = () => {
  console.log(campaignData, "Campaign Data");
  return (
    <>
      <Header1 className="sm:flex flex-col-reverse gap-3 pb-3" />
      <DateRange />
    </>
  );
};
