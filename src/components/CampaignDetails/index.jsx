import { SelectBox } from "@/app/components-main";
import { campaignDetails } from "@/app/helperSeedData";
import { useEffect, useState } from "react";
import { Text } from "@/app/components-main";

export const CampaignDetails = () => {
  const [showCampaigns, setShowCampaigns] = useState(false);

  useEffect(() => {
    console.log(campaignDetails);
  }, [showCampaigns]);

  return (
    <>
      <button
        onClick={() => setShowCampaigns(!showCampaigns)}
        className="flex gap-[15px] bg-black-900 text-white-A700 rounded-[6px] mt-3 h-[51px] justify-center items-center"
      >
        {showCampaigns ? "Hide Campaigns" : "View Campaigns"}
      </button>
      {showCampaigns && (
        <>
          {campaignDetails.map((campaign) => {
            return (
              <div
                key={campaign.id}
                className="flex flex-col w-full bg-white-A700 p-4 mt-3 rounded-[8px]"
              >
                <div className="bg-gray-100 rounded-[8px]">
                  Campaign:
                  <p>{campaign.label}</p>
                  <p>{campaign.id}</p>
                </div>
                <div className="flex flex-col gap-3 mt-3">
                  <p className="flex bg-black-900 text-white-A700 p-2 rounded-[8px] justify-between">
                    <div>Click Throughs:</div>
                    <div>{campaign.clickThrus}</div>
                  </p>
                  <p className="flex bg-black-900 text-white-A700 p-2 rounded-[8px] justify-between">
                    <div>Total DPV:</div>
                    <div>{campaign.totalDpv}</div>
                  </p>
                  <p className="flex bg-black-900 text-white-A700 p-2 rounded-[8px] justify-between">
                    <div>Total ATC:</div>
                    <div>{campaign.totalAtc}</div>
                  </p>
                  <p className="flex bg-black-900 text-white-A700 p-2 rounded-[8px] justify-between">
                    <div>Total Purchases:</div>
                    <div>{campaign.totalPurchases}</div>
                  </p>
                  <p className="flex bg-black-900 text-white-A700 p-2 rounded-[8px] justify-between">
                    <div>Total Sales:</div>
                    <div>{campaign.totalSales}</div>
                  </p>
                  <p className="flex bg-black-900 text-white-A700 p-2 rounded-[8px] justify-between">
                    <div>Brand Reference Bonus:</div>
                    <div>{campaign.brandRefBonus}</div>
                  </p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
