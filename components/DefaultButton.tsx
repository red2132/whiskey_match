"use client";

import React from "react";

export default function DefaultButton({
  children,
  className = "default-button-sm ",
  onClick = () => {},
  disabled,
}: {
  children: string | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}): JSX.Element {
  return (
    <button
      className={`${className}`}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      <div className="button-text">{children}</div>
    </button>
  );
}
