import { MDXRemote } from "next-mdx-remote/rsc";
import { HeadingLink } from "@/components/HeadingLink";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLink id={String(props.children).toLowerCase().replace(/\s+/g, "-")} level={1} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLink id={String(props.children).toLowerCase().replace(/\s+/g, "-")} level={2} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLink id={String(props.children).toLowerCase().replace(/\s+/g, "-")} level={3} {...props} />
  ),
};

interface CustomMDXProps {
  source: string;
}

export function CustomMDX({ source }: CustomMDXProps) {
  return <MDXRemote source={source} components={components} />;
}
