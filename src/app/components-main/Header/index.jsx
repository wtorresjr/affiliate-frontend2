import React from "react";
import { Img, Text, Button, SelectBox } from "./..";
import Link from "next/link";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col self-stretch justify-between items-center gap-5`}
    >
      <SelectBox
        size="md"
        shape="square"
        indicator={<Img src="img_arrowdown.svg" width={16} height={8} alt="arrow_down" className="h-[8px] w-[16px]" />}
        name="Brand Dropdown"
        placeholder={`Brand 1`}
        options={dropDownOptions}
        className="w-[18%] gap-px sm:w-full sm:px-5"
      />
      <div className="flex w-[18%] items-center justify-center gap-[19px] sm:w-full">
        <Link href="#">
          <Button shape="round" className="w-[51px] shadow-sm">
            <Img src="img_vector.svg" width={51} height={51} />
          </Button>
        </Link>
        <Text size="6xl" as="p">
          Mike Wazowski
        </Text>
        <Img src="img_lock.svg" width={51} height={51} alt="lock image" className="h-[51px] w-[51px]" />
      </div>
    </header>
  );
}
