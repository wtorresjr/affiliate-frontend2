import React from "react";
import { Img } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar3({ ...props }) {
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
            alignSelf: "start",
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
        rootStyles={{ ["&>ul"]: { gap: "266px" } }}
        className="flex w-full flex-col self-stretch"
      >
        <div className="flex flex-col gap-3">
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Brand Assets</MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_vector_white_a700.svg"
                width={10}
                height={15}
                alt="campaigns icon"
                className="h-[15px] w-[10px]"
              />
            }
          >
            Campaigns
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_vector_white_a700_3x3.svg"
                width={3}
                height={3}
                alt="affiliates icon"
                className="h-[3px] w-[3px]"
              />
            }
          >
            Affiliates
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_vector_white_a700_12x10.svg"
                width={10}
                height={12}
                alt="integrations icon"
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
                alt="knowledge icon"
                className="h-[15px] w-[13px]"
              />
            }
          >
            Knowledge Base
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_close_white_a700.svg"
                width={25}
                height={22}
                alt="products icon"
                className="h-[22px] w-[25px]"
              />
            }
          >
            Products
          </MenuItem>
        </div>
        <div className="flex">
          <MenuItem
            icon={<Img src="img_search.svg" width={25} height={25} alt="search icon" className="h-[25px] w-[25px]" />}
          >
            Settings
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
