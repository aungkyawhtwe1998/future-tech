"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Container from "./common/Container";
import Link from "next/link";
import Image from "next/image";
import Typography from "./common/Typography";

const MENUS = [
  { href: "/", label: "Home" },
  { href: "/#news", label: "News" },
  { href: "/#podcasts", label: "Podcasts" },
  { href: "/#resources", label: "Resources" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowHeader(false); // Hide header on scroll down
    } else {
      setShowHeader(true); // Show header on scroll up
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Set the header height as a CSS variable
    const headerElement = headerRef.current;
    if (headerElement) {
      const headerHeight = headerElement.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 bg-dark_10 border-b-2 border-dark_15 transition-transform duration-300 ${
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="p-5 bg-dark_08 hidden xl:block">
        <Link href="/">
          <Typography
            variant="body-1"
            className="text-dark_40 text-center flex justify-center gap-5 items-center"
          >
            Subscribe to our Newsletter For New & latest Blogs and Resources
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75 4.25L20 4.25C20.1989 4.25 20.3897 4.32902 20.5303 4.46967C20.671 4.61032 20.75 4.80109 20.75 5V16.25C20.75 16.6642 20.4142 17 20 17C19.5858 17 19.25 16.6642 19.25 16.25V6.81066L5.53033 20.5303C5.23744 20.8232 4.76256 20.8232 4.46967 20.5303C4.17678 20.2374 4.17678 19.7626 4.46967 19.4697L18.1893 5.75L8.75 5.75C8.33579 5.75 8 5.41421 8 5C8 4.58579 8.33579 4.25 8.75 4.25Z"
                fill="#FFD11A"
              />
            </svg>
          </Typography>
        </Link>
      </div>
      <div className="bg-dark_10 border-y-2 border-dark_15 w-full">
        <Container variant="container-md">
          <div className="py-3 lg:py-5 2xl:py-8 flex justify-between items-center">
            <Link href="/">
              <Image
                src="/Logo.svg"
                width={178}
                height={50}
                alt="Logo"
                className="aspect-[178/50] w-full h-full max-w-[178px] bg-center object-cover"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex gap-5 2xl:gap-10">
                {MENUS.map((link) => (
                  <li
                    key={link.href}
                    className="block text-xl px-4 py-2 rounded-lg text-grey_50 hover:text-white focus:bg-dark_20 focus:text-white border-2 border-dark_10 hover:border-dark_20"
                  >
                    <Link href={link.href}>
                      <Typography variant="body-1" className="leading-7">
                        {link.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="hidden lg:block bg-yellow px-3 py-2 2xl:px-5 2xl:py-[14px] leading-7 text-dark_08 rounded-[10px]"
              aria-label="Contact Us"
            >
              Contact Us
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden text-white text-2xl"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full bg-dark_10 z-40 transform transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ height: "100vh" }}
      >
        <button className="absolute right-5 top-5" onClick={() => setMenuOpen((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col justify-center items-center h-full">
          <ul className="flex flex-col gap-6 text-center">
            {MENUS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-2xl text-white hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
