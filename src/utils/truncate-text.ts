const truncateText = (text: string, limit: number = 10) => {
  if (!text) {
    return "";
  }

  if (text.length > limit) {
    return text.slice(0, limit - 3) + "...";
  }

  return text;
};

export default truncateText;
