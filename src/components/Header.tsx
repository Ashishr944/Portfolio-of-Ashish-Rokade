"use client";

import { usePathname } from "next/navigation";
import {
  Row,
  Flex,
  SmartLink,
  Text,
  IconButton,
  Avatar,
} from "@once-ui-system/core";
import { person, social, routes } from "@/resources";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Work",    href: "/work" },
  { label: "Gallery", href: "/gallery" },
  { label: "GitHub",  href: "/github" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <Flex
      as="header"
      fillWidth
      horizontal="center"
      paddingX="l"
      paddingY="12"
      style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)" }}
    >
      <Row maxWidth="m" fillWidth horizontal="between" vertical="center">

        {/* Logo / name */}
        <SmartLink href="/" style={{ textDecoration: "none" }}>
          <Row gap="12" vertical="center">
            <Avatar src={person.avatar} size="s" />
            <Text variant="label-strong-m" onBackground="neutral-strong">
              {person.firstName}
            </Text>
          </Row>
        </SmartLink>

        {/* Nav links */}
        <Row as="nav" gap="4" vertical="center" className={styles.nav}>
          {navLinks.map(({ label, href }) => {
            // only show if the route is enabled in config
            if (href !== "/" && !routes[href as keyof typeof routes]) return null;
            const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <SmartLink
                key={href}
                href={href}
                style={{ textDecoration: "none" }}
              >
                <Text
                  variant="label-default-s"
                  onBackground={active ? "neutral-strong" : "neutral-weak"}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: active ? "var(--neutral-alpha-weak)" : "transparent",
                    transition: "background 0.2s",
                  }}
                >
                  {label}
                </Text>
              </SmartLink>
            );
          })}
        </Row>

        {/* Right side: social icons + theme toggle */}
        <Row gap="4" vertical="center">
          {social
            .filter((s) => ["GitHub", "LinkedIn"].includes(s.name) && s.link)
            .map((s) => (
              <IconButton
                key={s.name}
                href={s.link}
                icon={s.icon}
                tooltip={s.name}
                size="s"
                variant="ghost"
              />
            ))}
          <ThemeToggle />
        </Row>

      </Row>
    </Flex>
  );
}
