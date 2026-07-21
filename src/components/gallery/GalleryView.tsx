"use client";

import { useState } from "react";
import { Column, Row, Flex, Text, Heading } from "@once-ui-system/core";
import { gallery } from "@/resources";
import Image from "next/image";

export default function GalleryView() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Column fillWidth gap="l" paddingY="24">
      <Column horizontal="center" gap="8">
        <Heading variant="display-strong-m" align="center">
          {gallery.title}
        </Heading>
        <Text onBackground="neutral-weak" align="center">
          {gallery.description}
        </Text>
      </Column>

      {/* Masonry-style grid */}
      <Row wrap gap="16" horizontal="center">
        {gallery.images.map((image, idx) => (
          <Flex
            key={idx}
            radius="l"
            overflow="hidden"
            style={{
              cursor: "pointer",
              width: image.orientation === "horizontal" ? "480px" : "220px",
              height: image.orientation === "horizontal" ? "300px" : "320px",
              position: "relative",
              flexShrink: 0,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onClick={() => setSelected(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes={image.orientation === "horizontal" ? "480px" : "220px"}
            />
          </Flex>
        ))}
      </Row>

      {/* Lightbox */}
      {selected && (
        <Flex
          position="fixed"
          style={{
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => setSelected(null)}
        >
          <Flex
            radius="l"
            overflow="hidden"
            style={{
              position: "relative",
              width: "min(90vw, 900px)",
              height: "min(80vh, 600px)",
            }}
          >
            <Image
              src={selected}
              alt="Gallery image"
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
            />
          </Flex>
          <Text
            style={{
              position: "absolute",
              top: "16px",
              right: "24px",
              color: "white",
              fontSize: "2rem",
              lineHeight: 1,
            }}
          >
            ×
          </Text>
        </Flex>
      )}
    </Column>
  );
}
