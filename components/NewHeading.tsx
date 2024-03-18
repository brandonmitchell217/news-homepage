import React from "react";
import { NewHeadingProps } from "../lib/types";

export default function NewHeading({ data }: { data: NewHeadingProps }) {
  return (
    <div className="px-6 pt-6 flex-[0.5] bg-veryDarkBlue text-offWhite">
      <h2 className="text-softOrange text-[40px] lg:text-[32px] xl:text-[40px]">
        {data.title}
      </h2>
      <ul className="flex flex-col">
        {data.items.map((item, index) => (
          <li
            key={index}
            className={`py-8 space-y-2 ${
              index % 2 &&
              "border-b-darkGrayishBlue border-t-darkGrayishBlue border-t-[1px] border-b-[1px]"
            }`}
          >
            <a className="group">
              <h3 className="text-lg lg:text-base xl:text-lg transition-colors group-hover:text-softOrange">
                {item.title}
              </h3>
              <p className="text-sm text-offWhite/60">{item.excerpt}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
