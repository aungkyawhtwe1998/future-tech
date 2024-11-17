"use client";
import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import Typography from "../common/Typography";
import Button from "../common/Button";

type Blog = {
  id: string | number;
  author: {
    name: string;
    position: string;
    image: string;
  };
  date: string;
  title: string;
  excerpt: string;
  likes: string;
  comments: number;
  share: number;
};

type BlogTabs = {
  label: string;
  id: number;
  blogs: Blog[];
};

interface BlogTabProps {
  data: BlogTabs[];
}

const BlogTab: React.FC<BlogTabProps> = ({ data }) => {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabClick = (id: number) => setActiveTab(id);

  // Get the active tab data
  const activeTabData = data.find((tab) => tab.id === activeTab);

  // Render the blogs or a message if no blogs are found
  const renderBlogs = () => {
    if (activeTabData && activeTabData?.blogs?.length > 0) {
      return activeTabData.blogs.map((item) => (
        <tr key={item.id} className="border-b-2 last-of-type:border-b-0 border-dark_15">
          {/* Author Section */}
          <td className="py-10 align-top pr-5 2xl:pr-[50px]">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={item.author.image}
                  width={80}
                  height={80}
                  alt={item.author.name}
                  className="aspect-[80/80] bg-dark_15 rounded-full max-w-[80px] max-h-[80px] w-full h-full object-cover bg-center"
                />
              </div>
              <div>
                <Typography variant="title" className="text-nowrap">
                  {item.author.name}
                </Typography>
                <Typography
                  variant="body-1"
                  className="text-grey_50 text-nowrap"
                >
                  {item.author.position}
                </Typography>
              </div>
            </div>
          </td>

          {/* Item Content */}
          <td className="py-10 px-5 2xl:px-[50px]">
            <div className="space-y-[30px]">
              <Typography variant="title" className="text-grey_50">
                {item.date}
              </Typography>
              <div className="space-y-[10px]">
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body-1" className="text-grey_50">
                  {item.excerpt}
                </Typography>
              </div>
              <div className="flex gap-5">
                {/* Likes */}
                <div className="flex items-center min-w-[100px] gap-1 px-4 py-2 bg-dark_10 border-2 border-dark_15 rounded-full">
                  <Image
                    alt="like"
                    src={"/icons/like.svg"}
                    width={24}
                    height={24}
                    className="aspect-[24/24] w-full h-full max-w-[24px] object-contain bg-center"
                  />
                  <Typography variant="body-1" className="text-grey_60">
                    {item.likes}
                  </Typography>
                </div>
                {/* Comments */}
                <div className="flex items-center min-w-[100px] gap-1 px-4 py-2 bg-dark_10 border-2 border-dark_15 rounded-full">
                  <Image
                    alt="comment"
                    src={"/icons/comment.svg"}
                    width={24}
                    height={24}
                    className="aspect-[24/24] flex-shrink-0 w-full h-full max-w-[24px] object-contain bg-center"
                  />
                  <Typography variant="body-1" className="text-grey_60">
                    {item.comments}
                  </Typography>
                </div>
                {/* Shares */}
                <div className="flex items-center min-w-[100px] gap-1 px-4 py-2 bg-dark_10 border-2 border-dark_15 rounded-full">
                  <Image
                    alt="share"
                    src={"/icons/share.svg"}
                    width={24}
                    height={24}
                    className="aspect-[24/24] w-full h-full max-w-[24px] object-contain bg-center"
                  />
                  <Typography variant="body-1" className="text-grey_60">
                    {item.share}
                  </Typography>
                </div>
              </div>
            </div>
          </td>

          {/* View Button */}
          <td className="py-10 ps-5 2xl:ps-[50px]">
            <Button href="#" variant="primary" showIcon>
              View Blog
            </Button>
          </td>
        </tr>
      ));
    }

    return (
      <tr>
        <td colSpan={3}>
          <Typography
            variant="title"
            className="text-grey_60 w-full text-center py-10"
          >
            No blog found!
          </Typography>
        </td>
      </tr>
    );
    
  }

  return (
    <section>
      {/* Tab Buttons */}
      <div className="">
        <Container variant="container-md">
          <div className="flex gap-5 items-center pt-5 2xl:pt-[50px] pb-5 overflow-x-scroll">
            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`block text-xl min-w-[150px] max-w-[250px] text-ellipsis overflow-hidden 2xl:min-w-[249px] px-3 py-3 2xl:px-8 2xl:py-[30px] rounded-lg text-grey_50 hover:text-white ${
                  activeTab === item.id ? "bg-dark_10" : ""
                } focus:bg-dark_10 focus:text-white border-2 border-dark_15 hover:border-dark_20 transition-all ease-in-out duration-500`}
              >
                <Typography
                  variant="body-1"
                  className="leading-7 text-center truncate"
                >
                  {item.label}
                </Typography>
              </button>
            ))}
          </div>

          <div className="space-y-8 py-5 2xl:py-20 overflow-x-auto">
            <table>
              <tbody>{renderBlogs()}</tbody>
            </table>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default BlogTab;
