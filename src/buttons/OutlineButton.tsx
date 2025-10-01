"use client";

import { ReactNode } from "react";

type OutlineButtonProps = {
  text?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export default function OutlineButton({
  text,
  icon,
  disabled,
  onClick,
}: OutlineButtonProps) {
  return (
    <button
      className="button-outline flex items-center gap-2"
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <>{icon}</>}
      {text && <span>{text}</span>}
    </button>
  );
}
