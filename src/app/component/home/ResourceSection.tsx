import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import Typography from "../common/Typography";
import Button from "../common/Button";
import { FadeIn, SlideUp, ZoomIn } from "../common/Motion";

type Resource = {
  title: string;
  description: string;
  logo: string;
  downloadTitle: string;
  downloadUrl: string;
  downloadCounts: string;
  users: { id: number; image: string }[];
  topicTitle: string;
  topicDescription: string;
  bannerSrc: string;
  total: {
    label: string;
    count: string;
  };
  averageAuthorExpertise: string;
};

export interface ResourceSectionProps {
  data: Resource;
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ data }) => {
  const {
    title,
    description,
    logo,
    downloadUrl,
    downloadTitle,
    downloadCounts,
    topicTitle,
    topicDescription,
    bannerSrc,
    users,
    total,
    averageAuthorExpertise,
  } = data;
  return (
    <section className="border-b-2 peer-last:border-b-0 border-dark_15">
      <Container variant="container-md">
        <div className="flex flex-col gap-5 lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/3 md:pr-5 2xl:pr-20 py-10">
            <ZoomIn>
              <Image
                src={logo}
                width={80}
                height={80}
                className="aspect-[80/80] w-full h-full max-w-[80px] bg-center object-contain"
                alt={title}
              />
            </ZoomIn>
            <SlideUp>
              <div className="my-[50px]">
                <Typography variant="h2" className="tracking-tight mb-4">
                  {title}
                </Typography>
                <Typography variant="body-1" className="text-grey_50">
                  {description}
                </Typography>
              </div>
            </SlideUp>
            <Button
              variant="primary"
              href={downloadUrl}
              showIcon
              className="w-full flex items-center justify-center"
            >
              {downloadTitle}
            </Button>
            <div className="mt-10 2xl:mt-[60px] bg-dark_10 border-2 border-dark_15 rounded-[12px] flex flex-row md:flex-col xl:flex-row items-center justify-between p-5 gap-5 2xl:gap-[50px] 2xl:p-[30px]">
              <div>
                <Typography
                  variant="body-1"
                  className="text-grey_50 text-nowrap mb-1"
                >
                  Downloaded By
                </Typography>
                <Typography variant="h4" className="text-nowrap">
                  {downloadCounts} + Users
                </Typography>
              </div>
              <div className="inline-block bg-dark_08 flex-shrink-0 p-3 2xl:p-5 rounded-[12px] relative">
                <div className="flex items-start">
                  {users.map((people, index) => (
                    <div
                      key={people.id}
                      className={`relative ${index > 0 ? "-ml-3" : ""}`} // Apply left margin for overlap
                    >
                      <Image
                        src={people.image}
                        width={50}
                        height={50}
                        alt={`people profile ${people.image}`}
                        className="aspect-[50/50] bg-dark_15 border-2 border-dark_40 rounded-full max-w-[50px] w-full h-full object-cover bg-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-[30px] lg:w-2/3 border-l-2 border-dark_15 ps-8 py-10 2xl:ps-20 2xl:py-20">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">
              <Typography variant="h4" className="text-nowrap flex-shrink-0">
                {topicTitle}
              </Typography>
              <Typography variant="body-1" className="text-grey_50">
                {topicDescription}
              </Typography>
            </div>
            <FadeIn>
              <Image
                src={bannerSrc}
                alt="banner"
                width={917}
                height={332}
                className="aspect-[917/332] rounded-[12px] w-full h-full bg-center object-cover"
              />
            </FadeIn>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="p-5 2xl:p-10 flex-shrink-0 bg-dark_10 border-2 border-dark_15 rounded-[10px]">
                <Typography variant="h4">{total.label}</Typography>
                <Typography variant="body-1" className="text-grey_50 mt-5">
                  {total.count}
                </Typography>
              </div>
              <div className="p-5 2xl:p-10 flex flex-col md:flex-row gap-5 w-full justify-between items-start md:items-center bg-dark_10 border-2 border-dark_15 rounded-[10px]">
                <div>
                  <Typography variant="h4">Download Formats</Typography>
                  <Typography variant="body-1" className="text-grey_50 mt-5">
                    PDF format for access.
                  </Typography>
                </div>
                <button className="flex items-center gap-[10px] border border-dark_15 bg-dark_08 rounded-[10px] px-8 py-[18px]">
                  <Typography variant="body-1" className="text-grey_60">
                    Preview
                  </Typography>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M21.6029 11.3275C21.8585 11.6491 22 12.0668 22 12.5C22 12.9332 21.8585 13.351 21.6029 13.6725C19.9845 15.65 16.3005 19.5 12 19.5C7.69952 19.5 4.01559 15.65 2.39712 13.6725C2.1415 13.351 2 12.9332 2 12.5C2 12.0668 2.1415 11.6491 2.39712 11.3275C4.01559 9.35 7.69952 5.5 12 5.5C16.3005 5.5 19.9845 9.35 21.6029 11.3275Z"
                      stroke="#FFD11A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0005 15.6109C13.7031 15.6109 15.0833 14.2181 15.0833 12.4999C15.0833 10.7817 13.7031 9.38879 12.0005 9.38879C10.2979 9.38879 8.91772 10.7817 8.91772 12.4999C8.91772 14.2181 10.2979 15.6109 12.0005 15.6109Z"
                      stroke="#FFD11A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-5 2xl:p-10 bg-dark_10 border-2 border-dark_15 rounded-[10px]">
              <Typography variant="h4">Average Author Expertise</Typography>
              <Typography variant="body-1" className="text-grey_50 mt-5">
                {averageAuthorExpertise}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResourceSection;
