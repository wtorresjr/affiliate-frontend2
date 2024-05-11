import React from "react";
import { Button, Text, Input, SelectBox, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function WireframeProductsThree({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[805px]">
      <div className="flex w-full flex-col items-center gap-[21px] rounded-[19px] bg-white-A700 px-[13px] pb-[29px] pt-[13px] sm:pb-5">
        <Img src="img_close.svg" width={10} height={10} alt="close" className="h-[10px] w-[10px] self-end" />
        <div className="flex w-[96%] flex-col items-start md:w-full">
          <Text size="lg" as="p">
            Set Private Commission for 1 Product
          </Text>
          <Text size="3xl" as="p" className="mt-[9px] !text-gray-500">
            A private commission allows you to set a different commission for a specific Creator.
          </Text>
          <div className="mt-[19px] h-px w-full self-stretch bg-blue_gray-100" />
          <Text size="3xl" as="p" className="mt-[18px]">
            Creator
          </Text>
          <Input
            shape="square"
            name="close_two"
            placeholder={`Select a creator`}
            suffix={
              <div className="flex h-[10px] w-[10px] items-center justify-center">
                <Img src="img_close.svg" width={10} height={10} alt="close" className="h-[10px] w-[10px]" />
              </div>
            }
            className="mt-1.5 gap-[35px] self-stretch border-[0.5px] border-solid border-black-900"
          />
          <div className="mt-[18px] flex items-center self-stretch md:flex-col">
            <div className="flex w-[25%] flex-col items-start gap-1.5 md:w-full">
              <Text size="3xl" as="p">
                Affiliate Commission
              </Text>
              <SelectBox size="sm" shape="square" name="dropdown" options={dropDownOptions} className="self-stretch" />
            </div>
            <Text size="2xl" as="p" className="mb-1.5 ml-[18px] self-end !text-[14.62px] md:ml-0">
              +
            </Text>
            <div className="ml-[18px] flex w-[14%] flex-col gap-1.5 md:ml-0 md:w-full">
              <Text size="3xl" as="p">
                Levanta Fees
              </Text>
              <Input
                shape="square"
                name="value_one"
                placeholder={`3.5`}
                className="border-[0.5px] border-solid border-black-900 sm:pr-5"
              />
            </div>
            <Text size="2xl" as="p" className="mb-1.5 ml-[22px] self-end !text-[14.62px] md:ml-0">
              =
            </Text>
            <div className="ml-6 flex w-[58%] flex-col items-start gap-1.5 md:ml-0 md:w-full">
              <Text size="3xl" as="p">
                Total
              </Text>
              <Input
                shape="square"
                name="language"
                placeholder={`%`}
                className="self-stretch border-[0.5px] border-solid border-black-900 sm:px-5"
              />
            </div>
          </div>
          <Text size="s" as="p" className="mt-[11px] self-end !text-[9.8px] !text-gray-500">
            *You will get - 10% of this commission back from the Amazon Brand Referral Bonus
          </Text>
        </div>
        <Button size="xs" shape="square" className="min-w-[80px] sm:px-5">
          Save
        </Button>
      </div>
    </ModalProvider>
  );
}
