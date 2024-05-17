"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { campaignData } from "../helperSeedData";
import { Button, DateRange, Img, Text, SelectBox } from "../../components";
import WireframeCampaigns1OneUserprofile from "../components-main/WireframeCampaigns1OneUserprofile";
import Header1 from "../../components/Header1";
import "../../styles/tailwind.css";

export const CampaignPageView = () => {
  const [selected, setSelected] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [showGraph, setShowGraph] = useState(false);

  const getGraph = () => {
    setShowGraph(true);
  };

  useEffect(() => {
    setShowGraph(false);
    const chosenMetric = campaignData.find(
      (metric) => metric.label === selected,
    );
    setSelectedDetails(chosenMetric);
  }, [selected, selectedDetails]);

  return (
    <>
      <Header1 className="sm:flex flex-col-reverse gap-3 pb-3" />
      <DateRange />

      <select
        className="bg-white-A700 mt-3 p-4 rounded-[8px] appearance-none flex flex-row justify-between"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option>Select a Metric</option>
        {campaignData.map((option) => (
          <option
            key={option.value}
            value={option.label}
            className="border-black-900 border-solid border-x-2 flex flex-row justify-between w-full"
          >
            {option.label}
          </option>
        ))}
      </select>
      {selectedDetails ? (
        <div
          className="sm:flex flex-row justify-between items-center rounded-[8px] p-2 bg-green-200 mt-3 h-[51px]"
          key={selectedDetails.image}
        >
          <div
            className="flex w-[35px] h-[35px] rounded-[22px] justify-center items-center"
            style={{ backgroundColor: selectedDetails.iconBgColor }}
          >
            <Img src={selectedDetails.image} width={25} height={25} />
          </div>
          <div>{selectedDetails.value}</div>

          <div className="sm:flex justify-between items-center gap-3">
            <Img
              src="img_vector_2.svg"
              width={10}
              height={10}
              className="bg-white-A700 h-[25px] w-[25px] rounded-[22px] p-1"
            />
            <span className="text-red-500_01">{`${selectedDetails.percentage}%`}</span>
            <span className="text-black-900">&nbsp;this month</span>
          </div>
        </div>
      ) : null}
      {selectedDetails && (
        <button
          onClick={() => getGraph()}
          className="flex gap-[15px] bg-[#FF3B2E] text-white-A700 rounded-[6px] mt-3 h-[51px] justify-center items-center"
        >
          View Graph
        </button>
      )}
      {showGraph && (
        <>
          <div className="sm:flex aspect-square w-full bg-white-A700 p-3 rounded-[8px] mt-3">
            <Img
              src="img_vector_yellow_900_139x1408.svg"
              width={1408}
              height={350}
            />
          </div>
          <button
            onClick={() => setShowGraph(false)}
            className="flex gap-[15px] bg-[#FF3B2E] text-white-A700 rounded-[6px] mt-3 h-[51px] justify-center items-center"
          >
            Clear Graph
          </button>
        </>
      )}
    </>
  );
};

// <div className="sm:flex flex-wrap gap-[5px] mt-3">
//   {campaignData.map((d, index) => (
//     <WireframeCampaigns1OneUserprofile
//       {...d}
//       key={"userprofile" + index}
//       className="px-2.5 pt-2.5"
//       campData={d}
//     />
//   ))}
// </div>
