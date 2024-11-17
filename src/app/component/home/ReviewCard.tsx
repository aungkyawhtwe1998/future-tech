import Image from "next/image";
import React from "react";
import Typography from "../common/Typography";
import { FadeIn, ZoomIn } from "../common/Motion";
type User = {
  name: string;
  location: string;
  image: string;
};

type Review = {
  id: number;
  user: User;
  message: string;
};

export interface ReviewCardProps {
  data: Review;
  className?: string;
}
const ReviewCard: React.FC<ReviewCardProps> = ({ data, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-5 xl:py-20 ${
        className ?? ""
      }`}
    >
      <FadeIn>
        <div className="flex gap-4 items-center mb-6">
          <div>
            <Image
              src={data.user.image}
              width={80}
              height={80}
              alt={data.user.name}
              className="aspect-[80/80] bg-dark_15 rounded-full max-w-[80px] max-h-[80px] w-full h-full object-cover bg-center"
            />
          </div>
          <div>
            <Typography variant="title">{data.user.name}</Typography>
            <Typography variant="body-1" className="text-grey_50">
              {data.user.location}
            </Typography>
          </div>
        </div>
      </FadeIn>
      <ZoomIn>
        <div className="relative w-full mt-5 flex flex-col justify-center items-center">
          <div className="absolute -top-5  flex bg-dark_08 border-2 border-dark_15 rounded-full px-4 py-2 gap-[7px]">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.94134 1.9429C8.71403 0.62493 10.6193 0.624932 11.392 1.9429L13.1179 4.88664C13.3999 5.36761 13.8698 5.70904 14.4144 5.8286L17.7473 6.5603C19.2396 6.8879 19.8284 8.69996 18.8137 9.8421L16.5473 12.3931C16.177 12.8099 15.9975 13.3624 16.0521 13.9173L16.3862 17.3132C16.5357 18.8337 14.9943 19.9536 13.5945 19.3415L10.468 17.9744C9.95713 17.751 9.37625 17.751 8.86541 17.9744L5.73889 19.3415C4.33909 19.9536 2.79766 18.8337 2.94722 17.3132L3.28128 13.9173C3.33586 13.3624 3.15635 12.8099 2.78606 12.3931L0.519709 9.8421C-0.494977 8.69995 0.0937984 6.8879 1.58603 6.5603L4.91901 5.8286C5.46358 5.70904 5.93352 5.36761 6.2155 4.88664L7.94134 1.9429Z"
                    fill="#FFCE22"
                  />
                </svg>
              </div>
            ))}
          </div>
          <div className=" top-5 w-full -z-[5] flex bg-dark_10 border-2 pt-[50px] p-[30px] border-dark_15 rounded-[12px]">
            <Typography variant="body-1" className="text-center">
              {data.message}
            </Typography>
          </div>
        </div>
      </ZoomIn>
    </div>
  );
};

export default ReviewCard;
