import React from "react";
import { Img } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar11({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <Sidebar
      {...props}
      width="346px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 83 } }}
      className={`${props.className} flex flex-col h-screen pt-[79px] pl-[23px] pr-[21px] gap-[83px] top-0 md:gap-[62px] md:pt-5 md:p-5 sm:gap-[41px] sm:px-5 bg-black-900 shadow-xs !sticky overflow-auto md:hidden`}
    >
      <Img
        src="img_sidebar_logo.png"
        width={230}
        height={63}
        alt="sidebar logo"
        className="h-[63px] w-[230px] object-contain"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: "13px 13px 13px 62px",
            color: "#ffffff",
            fontWeight: 400,
            fontSize: "18px",
            gap: "25px",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "14px",
            [`&:hover, &.ps-active`]: { background: "linear-gradient(90deg, #ff3b2e,#fa372c,#d31d20,#bb0c19,#b30717)" },
          },
        }}
        className="w-full self-stretch"
      >
        <div className="flex flex-col gap-3">
          <div className="relative h-[1060px]">
            <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full">
              <MenuItem>Dashboard</MenuItem>
            </div>
            <div className="absolute right-[15.27px] top-[12%] m-auto flex flex-col justify-center pb-[60px] pt-[368px] md:py-5">
              <Img
                src="img_arrow_right_white_a700.svg"
                width={9}
                height={16}
                alt="products arrow image"
                className="h-[16px]"
              />
            </div>
            <div className="absolute bottom-[0.49px] left-0 right-0 m-auto w-full">
              <div className="flex flex-col gap-3">
                <MenuItem>Brand Assets</MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="img_vector_white_a700.svg"
                      width={10}
                      height={15}
                      alt="campaigns image"
                      className="h-[15px] w-[10px]"
                    />
                  }
                >
                  Campaigns
                </MenuItem>
                <div className="relative h-[111px]">
                  <MenuItem
                    icon={
                      <Img
                        src="img_settings.svg"
                        width={25}
                        height={25}
                        alt="affiliates image"
                        className="h-[25px] w-[25px]"
                      />
                    }
                  />
                  <MenuItem
                    icon={
                      <Img
                        src="img_settings.svg"
                        width={25}
                        height={25}
                        alt="affiliates image"
                        className="h-[25px] w-[25px]"
                      />
                    }
                  >
                    Affiliates
                  </MenuItem>
                </div>
                <MenuItem
                  icon={
                    <Img
                      src="img_vector_white_a700_12x10.svg"
                      width={10}
                      height={12}
                      alt="integrations image"
                      className="h-[12px] w-[10px]"
                    />
                  }
                >
                  Integrations
                </MenuItem>
                <MenuItem>Billing & Payment</MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="img_vector_white_a700_15x13.svg"
                      width={13}
                      height={15}
                      alt="knowledge image"
                      className="h-[15px] w-[13px]"
                    />
                  }
                >
                  Knowledge Base
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="img_vector_white_a700_10x20.svg"
                      width={20}
                      height={10}
                      alt="products image"
                      className="h-[10px] w-[20px]"
                    />
                  }
                  suffix={
                    <div className="flex flex-col justify-center pb-[597px] md:pb-5">
                      <Img
                        src="img_arrow_right_white_a700.svg"
                        width={9}
                        height={16}
                        alt="products arrow image"
                        className="h-[16px]"
                      />
                    </div>
                  }
                >
                  Products
                </MenuItem>
              </div>
            </div>
          </div>
          <div className="flex">
            <MenuItem
              icon={
                <Img src="img_search.svg" width={25} height={25} alt="search image" className="h-[25px] w-[25px]" />
              }
            >
              Settings
            </MenuItem>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}
