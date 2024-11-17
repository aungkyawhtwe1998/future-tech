import Link from "next/link";
import React from "react";
import Typography from "./common/Typography";
import Container from "./common/Container";
import Button from "./common/Button";
import Image from "next/image";

// Menu data
const menus = [
  {
    title: "Home",
    items: [
      { href: "/", label: "Features", isNew: false },
      { href: "/", label: "Blogs", isNew: false },
      { href: "/", label: "Resources", isNew: true },
      { href: "/", label: "Testimonials", isNew: false },
      { href: "/", label: "Contact Us", isNew: false },
      { href: "/", label: "Newsletter", isNew: false },
    ],
  },
  {
    title: "News",
    items: [
      { href: "/", label: "Trending Stories", isNew: false },
      { href: "/", label: "Featured Videos", isNew: false },
      { href: "/", label: "Technology", isNew: false },
      { href: "/", label: "Health", isNew: false },
      { href: "/", label: "Politics", isNew: false },
      { href: "/", label: "Environment", isNew: false },
    ],
  },
  {
    title: "Blogs",
    items: [
      { href: "/", label: "Quantum Computing", isNew: false },
      { href: "/", label: "AI Ethics", isNew: false },
      { href: "/", label: "Space Exploration", isNew: true },
      { href: "/", label: "Biotechnology", isNew: false },
      { href: "/", label: "Renewable Energy", isNew: false },
      { href: "/", label: "Biohacking", isNew: false },
    ],
  },
  {
    title: "Podcasts",
    items: [
      { href: "/", label: "AI Revolution", isNew: false },
      { href: "/", label: "AI Revolution ", isNew: true },
      { href: "/", label: "TechTalk AI", isNew: false },
      { href: "/", label: "AI Conversations", isNew: false },
    ],
  },
  
];

const menuResouces = {
    title: "Resources",
    items: [
      { href: "/", label: "Whitepapers", isNew: false },
      { href: "/", label: "Ebooks", isNew: false },
      { href: "/", label: "Reports", isNew: false },
      { href: "/", label: "Research Papers", isNew: false },
    ],
  }

const Footer = () => {
  const renderMenu = (menu: { title: string; items: { href: string; label: string; isNew: boolean }[] }) => (
    <div key={menu.title}>
      <Typography variant="title" className="mb-5 2xl:mb-[36px] mt-5">
        {menu.title}
      </Typography>
      <ul className="space-y-6">
        {menu.items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <Typography variant="body-1" className="text-grey_50">
                {item.label}
                {item.isNew && (
                  <button className="m-4 p-[1px] rounded-[6px] to-[#ffd11967] via-dark_15 from-dark_15 bg-gradient-to-r">
                    <span className="block text-white px-4 py-2 font-semibold rounded-[6px] bg-dark_10">
                      New
                    </span>
                  </button>
                )}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer>
      <Container variant="container-md">
        <div className="grid grid-cols-2 py-10 2xl:py-20 md:grid-cols-4 gap-5 xl:grid-cols-5 border-b-2 border-dark_15">
          {menus.map(renderMenu)}
          <div>
            <Typography variant="title" className="mb-5 2xl:mb-[36px] mt-5">
              {menuResouces.title}
            </Typography>
            <ul className="space-y-6">
              {menuResouces.items.map((item, index) => (
                <li key={index}>
                  <Button
                    variant="primary"
                    className="w-auto"
                    showIcon
                    href={item.href}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <section>
        <Container variant="container-md">
          <div className="flex flex-col justify-center items-center lg:flex-row gap-5 lg:justify-between py-10">
            <div className="flex gap-5">
              <Link href={"/"}>
                <Typography variant="body-1" className="text-dark_40">
                  Terms & Conditions
                </Typography>
              </Link>
              <Link href={"/"} className="border-l-2 border-dark_15 ps-5">
                <Typography variant="body-1" className="text-dark_40">
                  Privacy Policy
                </Typography>
              </Link>
            </div>
            <div className="flex gap-5">
              <Link href={"https://www.x.com"}>
                <Image
                  src={"/icons/social-1.svg"}
                  width={24}
                  height={24}
                  alt="social"
                  className=""
                />
              </Link>

              <Link href={"https://www.medium.com"}>
                <Image
                  src={"/icons/social-3.svg"}
                  width={24}
                  height={24}
                  alt="social"
                  className=""
                />
              </Link>
              <Link href={"https://www.linkedin.com"}>
                <Image
                  src={"/icons/social-2.svg"}
                  width={24}
                  height={24}
                  alt="social"
                  className=""
                />
              </Link>
            </div>
            <Typography variant="body-1" className="text-dark_40">
              © 2024 FutureTech. All rights reserved.
            </Typography>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
