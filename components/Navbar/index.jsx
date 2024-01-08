"use client";
import React, { useState } from "react";
import Logo from "./images/logo.svg";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { LINKS } from "./constant";
import Button from "../Button";
import clsx from "clsx";
function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full h-16">
      <div className="w-full h-full flex items-center gap-[78px] px-8  ">
        <div className="md:hidden">
          <Hamburger
            size={20}
            color="#FCB72B"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>

        <Link className="" href={"/"}>
          <Logo />
        </Link>
      </div>

      {/* Mobile Bar */}
      <div
        className={clsx(
          "fixed top-16 bottom-0 left-0  right-0 z-10  text-light-grey flex md:hidden "
        )}
      >
        <div
          className={clsx(
            "h-full flex flex-col  bg-[#333A44] overflow-hidden transition-all ",
            { "w-[75%] py-6 px-8": isOpen },
            { "w-0": !isOpen }
          )}
        >
          <nav className="flex flex-col gap-6 mt-10">
            {LINKS.map((link) => (
              <Link className="link" href={link.path} key={link.id}>
                {link.title}
              </Link>
            ))}
          </nav>

          <Button className="mt-auto" title="Get Scootin" type="button " />
        </div>
        {/* Overlay */}
        <div
          className={clsx("bg-black opacity-50  ", { "flex-1 ": isOpen })}
        ></div>
      </div>
    </header>
  );
}

export default Navbar;
