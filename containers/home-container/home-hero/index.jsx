import React from "react";
import Image from "next/image";
import { HERO_INFO } from "./constant";
import Button from "@/components/Button";

function HomeHero() {
  return (
    <section className="w-full h-[650px]">
      <div className="relative w-full h-full ">
        <Image
          src={HERO_INFO.images.mobile}
          alt="hero image"
          placeholder="blur"
          fill
          className="z-10"
        />
        <div className="flex flex-col text-center items-center justify-center gap-6 px-8 z-20 text-white  absolute h-full">
          <h1 className="heading-m">{HERO_INFO.title}</h1>
          <p className="text">{HERO_INFO.content}</p>
          <Button className="mt-2.5" title={HERO_INFO.buttonInfo} />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
