"use client";

import { SmartLink, Column, Text } from "@once-ui-system/core";
import type { About } from "@/types";

type TocSection = {
  title: string;
  display: boolean;
  items: string[];
};

interface TableOfContentsProps {
  structure: TocSection[];
  about: About;
}

export default function TableOfContents({ structure }: TableOfContentsProps) {
  const visible = structure.filter((s) => s.display);

  if (visible.length === 0) return null;

  return (
    <Column gap="16" style={{ minWidth: "160px" }}>
      {visible.map((section) => (
        <Column key={section.title} gap="8">
          <SmartLink href={`#${section.title}`} style={{ textDecoration: "none" }}>
            <Text variant="label-strong-s" onBackground="neutral-strong">
              {section.title}
            </Text>
          </SmartLink>
          {section.items.map((item) => (
            <SmartLink key={item} href={`#${item}`} style={{ textDecoration: "none" }}>
              <Text
                variant="label-default-xs"
                onBackground="neutral-weak"
                style={{ paddingLeft: "8px" }}
              >
                {item}
              </Text>
            </SmartLink>
          ))}
        </Column>
      ))}
    </Column>
  );
}
