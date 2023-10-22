"use client";

import React from "react";
import LogoNav from "./header/LogoNav/LogoNav";

import LoginButtons from "./header/LoginButtons";
import LocationButton from "./header/LocationButton";
import AsideNav from "./header/AsideNav/AsideNav";
import Modal from "./Modal/Modal";
import Burger from "./header/Burger/Burger";
import Logo from "./header/Logo";

type Props = {};

export const headStyle = {
  nav: "flex flex-row p-2 justify-between",
  options: "hidden md:flex flex-row items-center",

  additionalLinkText: "no-underline text-sm font-bold",
  additionalLinkBlock:
    "flex flex-row items-center text-gray-900 hover:text-green-600 m-0 mr-4",
  additionalLinkIcon: "h-4 w-4 mr-2",
  additionalLinkWrapper: "mr-4 flex flex-row items-center",
};

export default function Header({ }: Props) {
  const [ sideBarIsOpen, setSideBarIsOpen ] = React.useState(false);

  return (
    <header>
      <nav className="main-nav">
        <div className=" flex justify-between h-full">
          <div className='flex'>
            <Logo />
            <LogoNav />
          </div>
          {/* big nav links */}
          <div className={`${headStyle.options} float-right`}>
            <LocationButton />
            <LoginButtons />
          </div>

          <div className="grid place-items-center md:hidden">
            <Burger isOpen={sideBarIsOpen} setIsOpen={setSideBarIsOpen} />
          </div>
        </div>
      </nav>
      <Modal isOpen={sideBarIsOpen}>
        <AsideNav isOpen={sideBarIsOpen} setIsOpen={setSideBarIsOpen} />
      </Modal>
    </header>
  );
}
