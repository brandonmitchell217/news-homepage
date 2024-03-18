"use client";
import Link from "next/link";
import React from "react";
import { fakeClick } from "../../lib/util";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Button({
  children,
  href,
  className = "",
}: ButtonProps) {
  const classList = `bg-softRed text-offWhite py-3.5 px-8 hover:bg-veryDarkBlue transition-colors duration-300 ${className}`;

  if (!href)
    return (
      <button type="button" onClick={(e) => fakeClick(e)} className={classList}>
        {children}
      </button>
    );

  return (
    <Link href={href} onClick={(e) => fakeClick(e)} className={classList}>
      {children}
    </Link>
  );
}
