import React from "react";
import Image from "next/image";
import { HERO_INFO } from "./constant";
import Button from "@/components/Button";

function HomeHero() {
  return (
    <section className="w-full h-[650px] relative  ">
      <div className="relative w-full h-full    ">
        <Image
          src={HERO_INFO.images.mobile}
          alt="hero image"
          placeholder="blur"
          fill
          className="md:hidden -z-10"
        />
        <Image
          src={HERO_INFO.images.tablet}
          alt="hero image"
          placeholder="blur"
          fill
          className="hidden md:block lg:hidden -z-10 "
        />
        <Image
          src={HERO_INFO.images.desktop}
          alt="hero image"
          placeholder="blur"
          fill
          className="hidden lg:block -z-10"
        />
      </div>
      <div className="flex flex-col text-center items-center justify-center gap-6 px-8 pb-10 md:px-[97px]  text-white   h-full bg-right-arrow bg-no-repeat bg-left-bottom absolute inset-0  ">
        <h1 className="heading-m md:heading-xl md:max-w-[15ch]">
          {HERO_INFO.title}
        </h1>
        <p className="text">{HERO_INFO.content}</p>
        <Button className="mt-2.5" title={HERO_INFO.buttonInfo} />
      </div>
    </section>
  );
}

export default HomeHero;
