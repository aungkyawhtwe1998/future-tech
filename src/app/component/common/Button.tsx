import React from "react";
import Typography from "./Typography";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  showIcon?: boolean;
  disabled?: boolean;
  isLoading?: boolean; // Add isLoading prop
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  onClick,
  className,
  children,
  type = "button",
  showIcon = false,
  disabled = false,
  isLoading = false, // Default to false
}) => {
  // Determine the button style based on variant
  let buttonStyle = `transition-all  ${
    disabled ? "opacity-70" : "opacity-100"
  } font-bold text-grey_60  ease-in-out duration-300 group `;
  if (variant === "primary") {
    buttonStyle +=
      "w-atuo inline-flex gap-5 items-center py-[18px] px-8 rounded-[10px] *:fill-yellow border-2 border-dark_15 bg-dark_08 hover:bg-dark_10 hover:text-white";
  } else if (variant === "secondary") {
    buttonStyle +=
      "bg-yellow p-3 2xl:p-5 rounded-full *:fill-dark_08 hover:opacity-80 transform hover:scale-105";
  }

  return (
    <>
      {href ? (
        <Link href={href} passHref className={`${className} ${buttonStyle}`}>
          <div
            className={`flex text-nowrap justify-between items-center gap-5 text-center `}
          >
            {children && (
              <Typography
                variant="base"
                className="text-center text-nowrap font-bold"
              >
                {children}
              </Typography>
            )}
            {showIcon && (
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.25 4.25L19.5 4.25C19.6989 4.25 19.8897 4.32902 20.0303 4.46967C20.171 4.61032 20.25 4.80109 20.25 5V16.25C20.25 16.6642 19.9142 17 19.5 17C19.0858 17 18.75 16.6642 18.75 16.25V6.81066L5.03033 20.5303C4.73744 20.8232 4.26256 20.8232 3.96967 20.5303C3.67678 20.2374 3.67678 19.7626 3.96967 19.4697L17.6893 5.75L8.25 5.75C7.83579 5.75 7.5 5.41421 7.5 5C7.5 4.58579 7.83579 4.25 8.25 4.25Z"
                  />
                </svg>
              </div>
            )}
          </div>
        </Link>
      ) : (
        <button
          type={type}
          className={`${buttonStyle} ${className}`}
          onClick={onClick}
          disabled={disabled || isLoading} // Disable button when loading
        >
          <div
            className={`flex text-nowrap justify-center items-center gap-1 text-center`}
          >
            {isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 44 44"
                stroke="#FFFFFF"
                className="ios-spinner"
              >
                <g fill="none" fillRule="evenodd" strokeWidth="4">
                  <circle cx="22" cy="22" r="20" strokeOpacity="0.2" />
                  <path d="M36 22c0-7.732-6.268-14-14-14">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 22 22"
                      to="360 22 22"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </svg>
            )}
            {children && (
              <Typography variant="body-2" className="text-center font-bold">
                {children}
              </Typography>
            )}
            {showIcon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.25 4.25L19.5 4.25C19.6989 4.25 19.8897 4.32902 20.0303 4.46967C20.171 4.61032 20.25 4.80109 20.25 5V16.25C20.25 16.6642 19.9142 17 19.5 17C19.0858 17 18.75 16.6642 18.75 16.25V6.81066L5.03033 20.5303C4.73744 20.8232 4.26256 20.8232 3.96967 20.5303C3.67678 20.2374 3.67678 19.7626 3.96967 19.4697L17.6893 5.75L8.25 5.75C7.83579 5.75 7.5 5.41421 7.5 5C7.5 4.58579 7.83579 4.25 8.25 4.25Z"
                />
              </svg>
            )}
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
