"use client";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "container-md" | "container-sm";
}

const Container: React.FC<ContainerProps> = ({
  children,
  variant,
  className = "",
}) => {
  const containerClass = `container ${
    variant ? variant : ""
  } ${className} mx-auto max-w-[1920px]`;

  return <div className={containerClass}>{children}</div>;
};

export default Container;
