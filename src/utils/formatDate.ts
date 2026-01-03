export function formatDate(date: string | undefined | null, includeRelative = false) {
  // 1. Guard Clause: If date is missing or not a string, return empty
  if (!date || typeof date !== 'string') {
    return "";
  }

  const currentDate = new Date();

  // 2. Safe check for "T"
  let dateToParse = date;
  if (!dateToParse.includes("T")) {
    dateToParse = `${dateToParse}T00:00:00`;
  }

  const targetDate = new Date(dateToParse);
  
  // 3. Check if the date is actually valid after parsing
  if (isNaN(targetDate.getTime())) {
    return "";
  }

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}