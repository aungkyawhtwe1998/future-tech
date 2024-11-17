/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { forwardRef, ElementType, HTMLProps, Ref } from "react";

// Define variant types
type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "title"
  | "body-1"
  | "body-2"
  | "base"
  | "heading70"
  | "heading40"
  | "calendar-day";

// Map variant types to corresponding HTML elements
const VariantToElementMap: Record<TypographyVariants, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  title: "p",
  "body-1": "p",
  "body-2": "p",
  "calendar-day": "p",
  heading70: "h1",
  heading40: "h2",
  base: "p",
};

// Utility type to get the appropriate element type based on the variant
type TypographyElementType<T extends TypographyVariants> =
  (typeof VariantToElementMap)[T];

// Define props with dynamic element type based on the variant
type TypographyProps<T extends TypographyVariants> = {
  variant: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<HTMLProps<TypographyElementType<T>>, "ref"> & {
    ref?: Ref<TypographyElementType<T>>;
  };

// Typography component with dynamic element type
const TypographyElement = <T extends TypographyVariants>(
  { variant, className = "", children, ...rest }: TypographyProps<T>,
  ref: Ref<TypographyElementType<T>>
) => {
  // Determine the HTML element based on the variant
  const Element = VariantToElementMap[variant] || "p"; // Default to 'p'

  // Apply the appropriate class for font size
  let fontSizeClass = "";
  switch (variant) {
    case "h1":
      fontSizeClass = "heading1";
      break;
    case "h2":
      fontSizeClass = "heading2";
      break;
    case "h3":
      fontSizeClass = "heading3";
      break;
    case "h4":
      fontSizeClass = "heading4";
      break;
    case "h5":
      fontSizeClass = "heading5";
      break;
    case "h6":
      fontSizeClass = "heading6";
      break;
    case "title":
      fontSizeClass = "text-title";
      break;
    case "body-1":
      fontSizeClass = "text-body-1";
      break;
    case "body-2":
      fontSizeClass = "text-body-2";
      break;
    case "calendar-day":
      fontSizeClass = "";
      break;
    case "heading70":
      fontSizeClass = "heading70";
      break;
    case "heading40":
      fontSizeClass = "heading40";
      break;
    case "base":
      fontSizeClass = "text-body-2";
      break;
  }

  return (
    // @ts-expect-error
    <Element
      ref={ref}
      className={`${fontSizeClass} ${className}`}
      {...(rest as HTMLProps<TypographyElementType<T>>)}
    >
      {children}
    </Element>
  );
};

// Forward ref and assert correct types
const Typography = forwardRef(TypographyElement) as <
  T extends TypographyVariants
>(
  props: TypographyProps<T> & { ref?: Ref<TypographyElementType<T>> }
) => JSX.Element;

export default Typography;
