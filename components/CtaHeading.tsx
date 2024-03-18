"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CtaHeadingProps } from "../lib/types";
import Button from "./ui/Button";
import { useMediaQuery } from "usehooks-ts";
import { Loader } from "lucide-react";

export default function CtaHeading({ data }: { data: CtaHeadingProps }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="flex-[1.55] space-y-6 lg:space-y-0">
      {isLoading ? (
        <div className="w-full h-[410px] lg:h-[375px] bg-grayishBlue flex justify-center items-center">
          <Loader size={48} className="animate-spin-slow" />
        </div>
      ) : (
        <Image
          src={matches ? data.image.desktop : data.image.mobile}
          alt={data.image.alt}
          width={1460}
          height={600}
          className="w-full h-auto object-cover"
        />
      )}

      <div className="lg:pt-4 space-y-4 lg:flex lg:justify-between lg:items-start lg:gap-4">
        <h1 className="max-w-[80%] lg:max-w-full text-4xl lg:text-6xl font-extrabold lg:w-1/2 lg:pr-2 lg:pt-2">
          {data.title}
        </h1>

        <div className="lg:w-1/2 xl:px-6 flex flex-col justify-between gap-5 lg:gap-14 xl:gap-5">
          <p className="text-darkGrayishBlue leading-relaxed">
            {data.description}
          </p>
          <div>
            <Button
              href={data.button.link}
              className="w-max block uppercase tracking-[0.3em] text-sm font-bold"
            >
              {data.button.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
