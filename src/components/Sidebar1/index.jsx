import Link from "next/link";
import React from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Img } from "./..";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  // function collapseSidebar() {
  //    setCollapsed(!collapsed)
  // }

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
            padding: "14px 14px 14px 21px",
            color: "#ffffff",
            fontWeight: 400,
            fontSize: "18px",
            gap: "17px",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "14px",
            [`&:hover, &.ps-active`]: {
              background:
                "linear-gradient(90deg, #ff3b2e,#fa372c,#d31d20,#bb0c19,#b30717)",
            },
          },
        }}
        className="w-full self-stretch"
      >
        <div className="flex h-[75vh] flex-col gap-3 justify-between">
          <div className="relative ">
            <div className="absolute  m-auto w-full">
              <div className="flex flex-col gap-3">
                <Link href="/">
                  <MenuItem
                    icon={
                      <Img
                        src="home.svg"
                        width={24}
                        height={19}
                        alt="brand folder icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Dashboard
                  </MenuItem>
                </Link>
                <Link href="/assets">
                  <MenuItem
                    icon={
                      <Img
                        src="img_folder.svg"
                        width={24}
                        height={19}
                        alt="brand folder icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Brand Assets
                  </MenuItem>
                </Link>
                <Link href="/campaigns">
                  <MenuItem
                    icon={
                      <Img
                        src="img_vector_white_a700.svg"
                        width={24}
                        height={19}
                        alt="campaigns icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Campaigns
                  </MenuItem>
                </Link>
                <Link href="/affiliates">
                  <MenuItem
                    icon={
                      <Img
                        src="affiliate.svg"
                        width={24}
                        height={19}
                        alt="affiliates icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Affiliates
                  </MenuItem>
                </Link>
                <Link href="/integrations">
                  <MenuItem
                    icon={
                      <Img
                        src="img_vector_white_a700_12x10.svg"
                        width={24}
                        height={19}
                        alt="integrations icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Integrations
                  </MenuItem>
                </Link>
                <Link href="/billing">
                  <MenuItem
                    icon={
                      <Img
                        src="Vector (4).svg"
                        width={24}
                        height={19}
                        alt="integrations icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Billing & Payment
                  </MenuItem>
                </Link>
                <Link href="/knowledge">
                  <MenuItem
                    icon={
                      <Img
                        src="img_vector_white_a700_15x13.svg"
                        width={24}
                        height={19}
                        alt="knowledge icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Knowledge Base
                  </MenuItem>
                </Link>
                <Link href="/products">
                  <MenuItem
                    icon={
                      <Img
                        src="img_vector_white_a700_10x20.svg"
                        width={24}
                        height={19}
                        alt="products icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                    // suffix={
                    //   <div className="flex flex-col justify-center">
                    //     <Img
                    //       src="img_arrow_right_white_a700.svg"
                    //       width={9}
                    //       height={16}
                    //       alt="arrow image"
                    //       className="h-[16px]"
                    //     />
                    //   </div>
                    // }
                  >
                    Products
                  </MenuItem>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="flex w-full">
            <Link href="/settings" className="w-full">
              <MenuItem
                icon={
                  <Img
                    src="img_search.svg"
                    width={25}
                    height={25}
                    alt="search icon"
                    className="h-[25px] w-[25px]"
                  />
                }
              >
                Settings
              </MenuItem>
            </Link>
          </div> */}
        </div>
      </Menu>
    </Sidebar>
  );
}
