import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import Typography from "../common/Typography";
import { SlideUp, ZoomIn } from "../common/Motion";

type ArticleSectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  articles: { title: string; description: string }[];
};

const ArticleSection: React.FC<ArticleSectionProps> = ({
  title,
  description,
  imageSrc,
  articles,
}) => {
  return (
    <section className="border-b-2 peer-last:border-b-0 border-dark_15">
      <Container variant="container-md">
        <div className="flex flex-col gap-5 lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/3 pr-20 py-10">
            <ZoomIn>
              {" "}
              <Image
                src={imageSrc}
                width={80}
                height={80}
                className="aspect-[80/80] w-full h-full max-w-[80px] bg-center object-contain"
                alt={title}
              />
            </ZoomIn>
            <SlideUp>
              <div className="mt-[50px]">
                <Typography variant="h2" className="tracking-tight mb-4">
                  {title}
                </Typography>
                <Typography variant="body-1" className="text-grey_50">
                  {description}
                </Typography>
              </div>
            </SlideUp>
          </div>
          <div className="w-full lg:w-2/3 border-l-2 border-dark_15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] ps-5 lg:ps-10 xl:ps-20 py-10 xl:py-20 pr-0 pe-0">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="p-10 bg-dark_10 border-2 border-dark_15 rounded-[10px]"
                >
                  <Typography variant="h4">{article.title}</Typography>
                  <Typography variant="body-1" className="text-grey_50 mt-5">
                    {article.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ArticleSection;
