export const cleanDescription = (html: string, limit: number = 100) => {
  const text = html.replace(/<[^>]*>/g, "").trim(); // remove tags HTML
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};
