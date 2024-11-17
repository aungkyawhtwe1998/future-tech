import React from "react";
import Typography from "../common/Typography"; 
import Container from "../common/Container"; 
import Button from "../common/Button";
import { SlideUp } from "../common/Motion";

type SectionDividerProps = {
  badgeText: string;
  heading: string;
  buttonText: string;
  buttonHref: string;
};

const SectionDivider: React.FC<SectionDividerProps> = ({
  badgeText,
  heading,
  buttonText,
  buttonHref,
}) => {
  return (
    <section className="bg-dark_10 border-y-2 border-dark_15">
      <Container variant="container-md">
        <div className="py-[60px] 2xl:py-[120px] flex flex-col lg:flex-row gap-5 justify-between items-start lg:items-center">
          <div>
            <div className="inline-block bg-dark_20 p-[10px] rounded-[4px] mb-4">
              <Typography variant="title">{badgeText}</Typography>
            </div>
            <SlideUp>
              <Typography variant="h1">{heading}</Typography>
            </SlideUp>
          </div>
          {buttonText && (
            <Button href={buttonHref} showIcon>
              {buttonText}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default SectionDivider;
