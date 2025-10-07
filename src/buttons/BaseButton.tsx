"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type BaseProps = {
    text?: string;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
  };
  
  type ButtonProps =
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string });
  
  export type VariantButtonProps = BaseProps &
  ButtonProps & {
      variant: "primary" | "secondary" | "outline";
    };
  
export type PublicButtonProps = BaseProps & ButtonProps;

export default function BaseButton({
  text,
  icon,
  disabled,
  onClick,
  href,
  variant,
  ...props
}: VariantButtonProps) {
  if (!text && !icon) {
    throw new Error("Button must have either text or icon");
  }

  const content = (
    <>
      {icon && <>{icon}</>}
      {text && <span>{text}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`button-${variant} ${
          disabled ? "opacity-50 pointer-events-none" : ""
        }`}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`button-${variant}`}
      disabled={disabled}
      onClick={onClick}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
