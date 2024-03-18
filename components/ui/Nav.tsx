"use client";

import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Logo from "../../public/assets/images/logo.svg";
import MenuIcon from "../../public/assets/images/icon-menu.svg";
import MenuCloseIcon from "../../public/assets/images/icon-menu-close.svg";
import { fakeClick } from "../../lib/util";

type NavMenuProps = {
  label: string;
  link: string;
};

const NavMenuItems: NavMenuProps[] = [
  { label: "Home", link: "/" },
  { label: "New", link: "/new" },
  { label: "Popular", link: "/popular" },
  { label: "Trending", link: "/trending" },
  { label: "Categories", link: "/categories" },
];

export default function Nav() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleClickOutside);
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setShowMenu(false);
      }
    });

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setShowMenu(false);
    }
  };

  const mobileClick = (e: React.MouseEvent, label: string) => {
    if (label === "home") {
      setShowMenu(false);
    } else {
      fakeClick(e);
      setShowMenu(false);
    }
  };

  const NavLink = ({ item }: { item: NavMenuProps }) => {
    return (
      <li>
        <Link
          href={item.link}
          className="hover:text-softRed"
          onClick={(e) => mobileClick(e, item.label.toLowerCase())}
        >
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <nav className="py-6 lg:pt-16">
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <Logo className="scale-[0.8] md:scale-100" />
        </Link>

        <button
          type="button"
          onClick={() => setShowMenu(true)}
          className="lg:hidden"
        >
          <MenuIcon />
        </button>

        {/* Mobile NavMenu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black/50 flex justify-end transition-all ${
            showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`absolute top-0 right-0 w-3/4 sm:w-1/2 h-full bg-offWhite p-6 flex flex-col items-end gap-24 transition-transform ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
            ref={menuRef}
          >
            <button type="button" onClick={() => setShowMenu(false)}>
              <MenuCloseIcon />
            </button>
            <ul className="w-full flex flex-col gap-6 text-lg">
              {NavMenuItems.map((item: NavMenuProps) => (
                <NavLink key={item.label} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop NavMenu */}
        <ul className="hidden lg:flex items-center space-x-8 text-smP text-darkGrayishBlue">
          {NavMenuItems.map((item: NavMenuProps) => (
            <NavLink key={item.label} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
