"use client";

import React from "react";

interface HeadingLinkProps {
  id: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export function HeadingLink({ id, level = 2, children }: HeadingLinkProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag id={id} style={{ scrollMarginTop: "80px" }}>
      <a
        href={`#${id}`}
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {children}
      </a>
    </Tag>
  );
}
