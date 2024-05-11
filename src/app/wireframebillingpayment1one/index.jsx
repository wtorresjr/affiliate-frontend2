"use client";
import React from "react";
import { Img, Text, SelectBox, Heading, Button } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import Sidebar2 from "../../components/Sidebar2";
import { createColumnHelper } from "@tanstack/react-table";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table1Data = [
  {
    month: "December 2023",
    brand: "Grills & Gadgets",
    timeZone: "$12,858.53",
    duedate: "February 1, 2024",
    status: "Unpaid",
  },
  { month: "November 2023", brand: "Grills & Gadgets", timeZone: "$0.00", duedate: "January 1, 2024", status: "Paid" },
  {
    month: "August 2023",
    brand: "Grills & Gadgets",
    timeZone: "$5,453.98",
    duedate: "October 2, 2023",
    status: "Paid",
  },
];

export default function WireframeBillingPayment1OnePage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("month", {
        cell: (info) => (
          <Text as="p" className="!text-[13.69px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-2.5 pt-px !text-[13.69px] !text-gray-500">
            Month
          </Text>
        ),
        meta: { width: "251px" },
      }),
      table1ColumnHelper.accessor("brand", {
        cell: (info) => (
          <Text as="p" className="!text-[13.69px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 pt-px !text-[13.69px] !text-gray-500">
            Brand
          </Text>
        ),
        meta: { width: "311px" },
      }),
      table1ColumnHelper.accessor("timeZone", {
        cell: (info) => (
          <Text as="p" className="!text-[13.69px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 !text-[13.69px] !text-gray-500">
            Total Cost
          </Text>
        ),
        meta: { width: "231px" },
      }),
      table1ColumnHelper.accessor("duedate", {
        cell: (info) => (
          <Text as="p" className="!text-[13.69px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 pt-px !text-[13.69px] !text-gray-500">
            Due Date
          </Text>
        ),
        meta: { width: "232px" },
      }),
      table1ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex justify-between gap-5">
            <div className="flex h-[25px] w-[38%] items-center justify-center bg-[url(/images/img_group_red_500_01.svg)] bg-cover bg-no-repeat md:h-auto">
              <Text size="3xl" as="p" className="!text-white-A700">
                {info?.getValue?.()}
              </Text>
            </div>
            <div className="flex h-[25px] w-[38%] items-center justify-center bg-[url(/images/img_group_white_a700_25x214.svg)] bg-cover bg-no-repeat pb-1 md:h-auto">
              <Text size="3xl" as="p">
                View Invoice
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 !text-[13.69px] !text-gray-500">
            Status
          </Text>
        ),
        meta: { width: "381px" },
      }),
    ];
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-start gap-[38px] bg-indigo-50 pr-[42px] md:flex-col md:pr-5">
        <Sidebar2 />
        <div className="flex flex-1 flex-col items-end gap-[43px] md:self-stretch">
          <div className="flex w-[18%] items-center gap-[19px] md:w-full md:p-5">
            <Button shape="round" className="w-[51px] shadow-sm">
              <Img src="img_vector.svg" width={51} height={51} />
            </Button>
            <Text size="6xl" as="p">
              Mike Wazowski
            </Text>
            <Img src="img_lock.svg" width={51} height={51} alt="lock" className="h-[51px] w-[51px]" />
          </div>
          <div className="self-stretch">
            <div className="flex flex-col gap-[22px]">
              <div className="flex w-[88%] flex-wrap justify-between gap-5 md:w-full md:p-5">
                <Text size="9xl" as="p" className="self-start !text-[22.82px]">
                  Current Balance
                </Text>
                <Text size="9xl" as="p" className="self-start !text-[22.82px]">
                  Previous Balance
                </Text>
                <Text size="9xl" as="p" className="self-start !text-[22.82px]">
                  Return Credit
                </Text>
                <Text size="9xl" as="p" className="self-end !text-[22.82px]">
                  Payment Method
                </Text>
              </div>
              <div className="flex gap-[22px] md:flex-col">
                <div className="flex rounded-[20px] bg-white-A700 px-[53px] pb-[60px] pt-[53px] md:p-5">
                  <Heading size="md" as="h1" className="!text-[49.23px] !text-red-500_01">
                    $25,000
                  </Heading>
                </div>
                <div className="flex rounded-[20px] bg-white-A700 px-[53px] pb-[60px] pt-[53px] md:p-5">
                  <Heading size="md" as="h2" className="!text-[49.23px] !text-green-200">
                    $14,000
                  </Heading>
                </div>
                <div className="flex w-full justify-center rounded-[20px] bg-white-A700 px-[51px] pb-[62px] pt-[51px] md:p-5">
                  <Heading size="md" as="h3" className="!text-[49.23px] !text-black-900">
                    $40
                  </Heading>
                </div>
                <div className="h-[173px] w-full rounded-[20px] bg-white-A700 md:p-5" />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-[20px] bg-white-A700 px-6 pb-3.5 pt-6 sm:px-5 sm:pt-5">
            <div>
              <div className="flex items-center justify-between gap-5 sm:flex-col">
                <Text size="8xl" as="p" className="self-start !text-[20.21px] !font-medium">
                  Commission Invoices
                </Text>
                <div className="flex w-[18%] items-center justify-center sm:w-full">
                  <Text size="lg" as="p" className="mb-[5px] self-end !text-[12.11px] !font-normal !text-black-900_01">
                    Auto-Billing
                  </Text>
                  <div className="ml-[7px] flex h-[18px] w-[15%] items-center justify-end bg-[url(/images/img_group_563.svg)] bg-cover bg-no-repeat p-0.5 md:h-auto">
                    <div className="h-[13px] w-[13px] rounded-md bg-black-900" />
                  </div>
                  <SelectBox
                    shape="square"
                    indicator={
                      <Img
                        src="img_arrowdown_black_900.svg"
                        width={10}
                        height={5}
                        alt="arrow_down"
                        className="h-[5px] w-[10px]"
                      />
                    }
                    getOptionLabel={(e) => (
                      <>
                        <div className="flex items-center">
                          <Img src="img_filter.svg" width={11} height={10} alt="filter" className="h-[10px] w-[11px]" />
                          <span>{e.label}</span>
                        </div>
                      </>
                    )}
                    name="filters"
                    placeholder={`Filters`}
                    options={dropDownOptions}
                    className="ml-3 flex-grow text-black-900_01 sm:px-5"
                  />
                </div>
              </div>
              <ReactTable
                size="sm"
                bodyProps={{ className: "" }}
                headerProps={{ className: "flex-wrap" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="mt-[22px]"
                columns={table1Columns}
                data={table1Data}
              />
              <div className="mt-[67px] h-px bg-blue_gray-100" />
              <div className="mt-[66px] h-px bg-blue_gray-100" />
              <div className="mt-[66px] h-px bg-blue_gray-100" />
              <div className="mt-3.5 flex items-center justify-between gap-5">
                <Text as="p" className="self-start !text-[13.69px] !text-blue_gray-100">
                  Showing 1 of 5 entries
                </Text>
                <div className="flex w-[11%] items-center justify-center self-end">
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
                  <div className="ml-2 flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                    <Text size="md" as="p" className="!text-[11.06px]">
                      3
                    </Text>
                  </div>
                  <Text size="md" as="p" className="ml-[11px] self-end !text-[11.06px]">
                    ...
                  </Text>
                  <div className="ml-[11px] flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                    <Text size="md" as="p" className="!text-[11.06px]">
                      5
                    </Text>
                  </div>
                  <Img
                    src="img_clock.svg"
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
    </div>
  );
}
