"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { Button, Img, Text } from "./components-main";
import { ChartComponent, DateRange } from "@/components";
import { SelectBox } from "@/components";
import { dropDownOptions } from "./products";
import Header1 from "@/components/Header1";
import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import { hpDateData } from "./helperSeedData";

const Home = () => {
  return (
    <Wrapper>
      <Header1 className="sm:flex flex-col-reverse gap-3" />
      <Tabs className="w-full sm:mt-3">
        <TabList className="xl:hidden">
          <Tab>Welcome, John!</Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-wrap gap-5 bg-gradient-red p-4 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] xl:rounded-[20px]">
            <div className="flex w-[38%] justify-center rounded-[20px] bg-white-A700 px-[27px] pb-8 pt-[27px] md:w-full sm:p-5">
              <div className="flex w-full flex-col items-start gap-[11px]">
                <Text
                  size="5xl"
                  as="p"
                  className="!text-[22.82px] font-medium sm:!text-[20px]"
                >
                  Partner Summary Snapshot
                </Text>
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <div className="flex w-[50%] flex-col gap-4">
                    <div className="flex  items-start gap-[15px] md:w-full">
                      <div className="h-[16px] w-[16px] rounded-lg bg-[#FF3B2E]" />
                      <Text size="3xl" as="p">
                        # Partners
                      </Text>
                    </div>
                    <div className="flex  items-start gap-[15px] md:w-full">
                      <div className="h-[16px] w-[16px] rounded-lg bg-yellow-900" />
                      <Text size="3xl" as="p">
                        Lifetime Sales
                      </Text>
                    </div>
                    <div className="flex items-start gap-[15px]">
                      <div className="h-[16px] w-[16px] rounded-lg bg-light_green-100" />
                      <Text size="3xl" as="p">
                        Lifetime Referral Bonus
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Text
                      size="4xl"
                      as="p"
                      className="h-[25px] w-[26px] !font-medium"
                    >
                      24
                    </Text>
                    <Text size="4xl" as="p" className="!font-medium">
                      $12,252
                    </Text>
                    <Text size="4xl" as="p" className="!font-medium">
                      $1,225
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[3px] rounded-[20px] bg-white-A700 px-[41px] pb-[35px] pt-[27px] md:self-stretch md:px-5 sm:p-5 overflow-auto">
              <Text
                size="5xl"
                as="p"
                className="!text-[22.82px] font-medium sm:!text-[20px]"
              >
                Partner Summary Trends
              </Text>

              {/*Chart Component */}

              <ChartComponent />
            </div>
          </div>
        </TabPanel>
      </Tabs>

      {/* Date Range Div */}
      <div className="sm:flex flex-col-reverse gap-3 mt-3">
        <DateRange />
        <SelectBox
          placeholder={"Brand/Products"}
          options={dropDownOptions}
          className="flex items-center bg-white-A700 rounded-[8px] !h-[51px]"
        />
      </div>
    </Wrapper>
  );
};
export default Home;
