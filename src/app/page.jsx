"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Chart from "react-apexcharts";
import { Button, Img, Text } from "./components-main";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const data = [
  {
    sundayText: "Su",
    mondayText: "Mo",
    tuesdayText: "Tu",
    wednesdayText: "We",
    thursdayText: "Th",
    fridayText: "Fr",
    saturdayText: "Sa",
  },
  {
    sundayText: "28",
    mondayText: "29",
    tuesdayText: "30",
    wednesdayText: "1",
    thursdayText: "2",
    fridayText: "3",
    saturdayText: "4",
  },
  {
    sundayText: "5",
    mondayText: "6",
    tuesdayText: "7",
    wednesdayText: "8",
    thursdayText: "9",
    fridayText: "10",
    saturdayText: "11",
  },
  {
    sundayText: "12",
    mondayText: "13",
    tuesdayText: "14",
    wednesdayText: "15",
    thursdayText: "16",
    fridayText: "17",
    saturdayText: "18",
  },
  {
    sundayText: "19",
    mondayText: "20",
    tuesdayText: "21",
    wednesdayText: "22",
    thursdayText: "23",
    fridayText: "24",
    saturdayText: "25",
  },
  {
    sundayText: "26",
    mondayText: "27",
    tuesdayText: "28",
    wednesdayText: "29",
    thursdayText: "30",
    fridayText: "31",
    saturdayText: "1",
  },
];

const Home = () => {
  return (
    <Wrapper header={2}>
        <div className="flex flex-wrap gap-5 bg-gradient-red p-4 rounded-[20px] w-full">
        <div className="flex w-full" style={{ color: "white"}}>Welcome, John!</div>
          <div className="flex w-[38%] justify-center rounded-[20px] bg-white-A700 px-[27px] pb-8 pt-[27px] md:w-full sm:p-5">
            <div className="flex w-full flex-col items-start gap-[11px]">
              <Text size="5xl" as="p" className="!text-[22.82px] font-medium">
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
            <Text size="5xl" as="p" className="!text-[22.82px] font-medium">
              Partner Summary Trends
            </Text>
            <Chart
              options={{
                chart: {
                  // height: 300,
                  width: "100%",
                  type: "line",
                  aspectRatio: 1,
                  zoom: {
                    enabled: false,
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  width: [5, 7, 5],
                  curve: "straight",
                  dashArray: [0, 8, 5],
                },
                
                legend: {
                  // position:"right",
                  tooltipHoverFormatter: function (val, opts) {
                    return (
                      val +
                      " - <strong>" +
                      opts.w.globals.series[opts.seriesIndex][
                        opts.dataPointIndex
                      ] +
                      "</strong>"
                    );
                  },
              },
                markers: {
                  size: 0,
                  hover: {
                    sizeOffset: 6,
                  },
                },
                xaxis: {
                  categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan",
                    "08 Jan",
                    "09 Jan",
                    "10 Jan",
                    "11 Jan",
                    "12 Jan",
                  ],
                },
                tooltip: {
                  y: [
                    {
                      title: {
                        formatter: function (val) {
                          return val + " (mins)";
                        },
                      },
                    },
                    {
                      title: {
                        formatter: function (val) {
                          return val + " per session";
                        },
                      },
                    },
                    {
                      title: {
                        formatter: function (val) {
                          return val;
                        },
                      },
                    },
                  ],
                },
                grid: {
                  borderColor: "#f1f1f1",
                },
              }}
              series={[
                {
                  name: "John",
                  data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
                },
                {
                  name: "Mike",
                  data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
                },
                {
                  name: "Jess",
                  data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
                },
              ]}
              type="line"
              height={200}
              // width={}
              />
          </div>
        </div>          
    </Wrapper>
  );
};
export default Home;
