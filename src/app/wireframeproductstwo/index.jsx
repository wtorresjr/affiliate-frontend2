"use client";
import React from "react";
import { CloseSVG } from "../../assets/images";
import { Text, Img, SelectBox, Input, Button } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import Sidebar3 from "../../components/Sidebar3";
import { createColumnHelper } from "@tanstack/react-table";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table2Data = [
  { product: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv", price: "$109.97", commission: "20%" },
  { product: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv", price: "$319.99", commission: "20%" },
];

export default function WireframeProductsTwoPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[8%] flex-col gap-[11px] md:w-full">
              <Img src="img_user_indigo_50.svg" width={54} height={56} alt="user" className="h-[56px]" />
              <Img src="img_user_indigo_50.svg" width={54} height={56} alt="user" className="h-[56px]" />
              <Img src="img_user_indigo_50.svg" width={54} height={56} alt="user" className="h-[56px]" />
            </div>
            <div className="flex flex-col items-start">
              <Text size="8xl" as="p" className="!text-indigo-300 underline">
                {info?.getValue?.()}
              </Text>
              <Text size="3xl" as="p">
                B07XGMQ734 - SILV LLC
              </Text>
              <Text size="8xl" as="p" className="mt-[19px] !text-indigo-300 underline">
                ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv
              </Text>
              <Text size="3xl" as="p">
                B07XGMQ734 - SILV LLC
              </Text>
              <Text size="8xl" as="p" className="mt-5 !text-indigo-300 underline">
                ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv
              </Text>
              <Text size="3xl" as="p">
                B07XGMQ734 - SILV LLC
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="py-px pl-[35px] sm:pl-5">
            Product
          </Text>
        ),
        meta: { width: "993px" },
      }),
      table2ColumnHelper.accessor("price", {
        cell: (info) => (
          <div className="ml-[168px] flex flex-col items-center gap-[42px] md:ml-0">
            <Text size="8xl" as="p">
              {info?.getValue?.()}
            </Text>
            <Text size="8xl" as="p">
              $319.99
            </Text>
            <Text size="8xl" as="p">
              $109.97
            </Text>
          </div>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="p-px">
            Price
          </Text>
        ),
        meta: { width: "231px" },
      }),
      table2ColumnHelper.accessor("commission", {
        cell: (info) => (
          <div className="flex flex-col items-center gap-[42px]">
            <Text size="8xl" as="p">
              {info?.getValue?.()}
            </Text>
            <Text size="8xl" as="p">
              20%
            </Text>
            <Text size="8xl" as="p">
              20%
            </Text>
          </div>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="p-px">
            Commission
          </Text>
        ),
        meta: { width: "228px" },
      }),
    ];
  }, []);

  return (
    <div className="w-full">
      <div className="bg-indigo-50 pr-[42px] md:pr-5">
        <div className="flex items-start gap-[38px] md:flex-col">
          <Sidebar3 />
          <div className="flex flex-1 flex-col items-end gap-[52px] md:self-stretch md:p-5 sm:gap-[26px]">
            <div className="flex w-[18%] items-center gap-[19px] md:w-full">
              <Button shape="round" className="w-[51px] shadow-sm">
                <Img src="img_vector.svg" width={51} height={51} />
              </Button>
              <Text size="6xl" as="p">
                Mike Wazowski
              </Text>
              <Img src="img_lock.svg" width={51} height={51} alt="lock" className="h-[51px] w-[51px]" />
            </div>
            <div className="relative h-[815px] self-stretch">
              <div className="absolute bottom-[-0.42px] left-0 right-0 m-auto w-full rounded-bl-[22px] rounded-br-[22px] rounded-tl-[23px] rounded-tr-[23px] bg-white-A700 px-[19px] pb-3.5 pt-[29px] sm:pt-5">
                <div className="flex flex-col gap-[5px]">
                  <div className="relative h-[622px] md:h-auto">
                    <ReactTable
                      size="md"
                      bodyProps={{ className: "" }}
                      headerProps={{ className: "flex-wrap" }}
                      rowDataProps={{ className: "md:flex-col" }}
                      className="w-full"
                      columns={table2Columns}
                      data={table2Data}
                    />
                    <Img
                      src="img_group_white_a700_601x10.svg"
                      width={10}
                      height={601}
                      alt="image"
                      className="absolute bottom-0 left-[22.25px] top-0 my-auto h-[601px] w-[10px]"
                    />
                  </div>
                  <div className="flex w-[97%] flex-col gap-[18px] md:w-full">
                    <div className="h-px bg-blue_gray-100" />
                    <div className="flex items-center justify-between gap-5">
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
                          src="img_clock_blue_gray_100.svg"
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
              <div className="absolute right-[17%] top-[0.03px] m-auto flex w-[34%] justify-end gap-[27px] md:relative md:flex-col">
                <Input
                  size="md"
                  shape="square"
                  name="search"
                  placeholder={`Search`}
                  value={searchBarValue1}
                  onChange={(e) => setSearchBarValue1(e)}
                  suffix={
                    <div className="flex h-[22px] w-[22px] items-center justify-center">
                      {searchBarValue1?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue1("")} height={22} width={22} />
                      ) : (
                        <Img
                          src="img_rewind_gray_500.svg"
                          width={22}
                          height={22}
                          alt="rewind"
                          className="h-[22px] w-[22px] cursor-pointer"
                        />
                      )}
                    </div>
                  }
                  className="flex-grow gap-[35px]"
                />
                <SelectBox
                  size="md"
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
                        <Img src="img_filter.svg" width={19} height={18} alt="filter" className="h-[18px] w-[19px]" />
                        <span>{e.label}</span>
                      </div>
                    </>
                  )}
                  name="filters"
                  placeholder={`Filters`}
                  options={dropDownOptions}
                  className="w-[39%] md:w-full sm:px-5"
                />
              </div>
              <div className="absolute right-[0.63px] top-[0.03px] m-auto h-[313px] w-[15%] bg-[url(/images/img_group_white_a700_313x228.svg)] bg-cover bg-no-repeat px-3 pb-6 pt-[15px] sm:pb-5">
                <Img
                  src="img_vector_light_green_100.svg"
                  width={204}
                  height={33}
                  alt="vector_thirteen"
                  className="absolute left-0 right-0 top-[15%] m-auto h-[33px] w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center">
                  <div className="flex flex-col gap-4">
                    <Img src="img_share.svg" width={18} height={19} alt="share" className="h-[19px]" />
                    <Img src="img_share.svg" width={18} height={19} alt="share" className="h-[19px]" />
                    <Img src="img_share.svg" width={18} height={19} alt="share" className="h-[19px]" />
                    <Img src="img_share.svg" width={18} height={19} alt="share" className="h-[19px]" />
                    <Img src="img_share.svg" width={18} height={19} alt="share" className="h-[19px]" />
                    <Img src="img_share.svg" width={18} height={19} alt="share_eleven" className="h-[19px]" />
                    <Img src="img_share.svg" width={18} height={19} alt="share_thirteen" className="h-[19px]" />
                    <Img src="img_share.svg" width={18} height={19} alt="share_fifteen" className="h-[19px]" />
                  </div>
                  <div className="ml-2 flex flex-col items-start gap-[13px]">
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Commission
                    </Text>
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Commission
                    </Text>
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Title
                    </Text>
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Title
                    </Text>
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Newest
                    </Text>
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Newest
                    </Text>
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Price
                    </Text>
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Price
                    </Text>
                  </div>
                  <Img
                    src="img_arrowdown_black_900.svg"
                    width={10}
                    height={5}
                    alt="arrowdown"
                    className="ml-[43px] mt-[7px] h-[5px] self-start"
                  />
                </div>
              </div>
              <div className="absolute left-[0.00px] top-[0.00px] m-auto h-[175px] w-[23%] bg-[url(/images/img_group_white_a700_313x228.svg)] bg-cover bg-no-repeat px-6 pb-[17px] pt-3.5 sm:px-5">
                <Img
                  src="img_vector_light_green_100.svg"
                  width={294}
                  height={33}
                  alt="vector_fifteen"
                  className="absolute bottom-[28%] left-0 right-0 m-auto h-[33px] w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[88%] flex-col items-start">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Text size="5xl" as="p" className="!text-[17.99px]">
                      Actions
                    </Text>
                    <Img
                      src="img_arrowdown.svg"
                      width={16}
                      height={8}
                      alt="arrowdown"
                      className="mb-[5px] h-[8px] self-end"
                    />
                  </div>
                  <Text size="5xl" as="p" className="mt-[27px] !text-[17.99px]">
                    Update Standard Commission
                  </Text>
                  <Text size="5xl" as="p" className="mt-3 !text-[17.99px]">
                    Set Private Commission
                  </Text>
                  <Text size="5xl" as="p" className="mt-3.5 !text-[17.99px] !text-red-500_01">
                    Clear Selection
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
