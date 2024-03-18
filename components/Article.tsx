"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ListArticleProps } from "../lib/types";
import { Loader } from "lucide-react";

export default function Article({
  data,
  className,
}: {
  data: ListArticleProps;
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <article className={`flex gap-6 ${className}`}>
      {isLoading ? (
        <div className="w-[100px] h-[128px] lg:h-[160px] lg:w-[125px] bg-grayishBlue flex justify-center items-center">
          <Loader size={24} className="animate-spin-slow" />
        </div>
      ) : (
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width={200}
          height={254}
          className="w-[100px] h-auto lg:h-auto lg:w-[125px]"
        />
      )}

      <a className="flex-1 space-y-2 group">
        <span className="text-grayishBlue font-bold text-4xl">0{data.id}</span>
        <h1 className="text-lg font-extrabold transition-colors group-hover:text-softRed">
          {data.title}
        </h1>
        <p className="text-darkGrayishBlue">{data.excerpt}</p>
      </a>
    </article>
  );
}
