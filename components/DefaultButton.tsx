"use client";

import React from "react";

export default function DefaultButton({
  children,
  className = "default-button-sm ",
  onClick = () => {},
}: {
  children: string | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}): JSX.Element {
  return (
    <button className={`${className}`} onClick={(e) => onClick(e)}>
      <div className="button-text">{children}</div>
    </button>
  );
}
