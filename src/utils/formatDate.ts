export function formatDate(date: string, includeRelative = false): string {
  const d = new Date(date);

  const formatted = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!includeRelative) return formatted;

  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let relative: string;
  if (diffDays < 1) relative = "today";
  else if (diffDays < 7) relative = `${diffDays}d ago`;
  else if (diffDays < 30) relative = `${Math.floor(diffDays / 7)}w ago`;
  else if (diffDays < 365) relative = `${Math.floor(diffDays / 30)}mo ago`;
  else relative = `${Math.floor(diffDays / 365)}y ago`;

  return `${formatted} (${relative})`;
}
