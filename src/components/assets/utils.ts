export const showYear = (date: string) => {
  return date.split("-")[0];
};

export const listColor = (period: string) => {
  switch (period) {
    case "Medieval":
      return "#cc5500";
    case "Renaissance":
      return "#00bdc0";
    case "Baroque":
      return "#7badc5";
    case "Classical":
      return "#00008b";
    case "Early Romantic":
      return "#af4035";
    case "Romantic":
      return "#7851a9";
    case "Late Romantic":
      return "#e75480";
    case "20th Century":
      return "#9ab10a";
    case "Post-War":
      return "#800000";
    case "21st Century":
      return "#8b8000";
    default:
      return "rgb(240, 240, 240)";
  }
};

export const listYears = (period: string) => {
  switch (period) {
    case "Medieval":
      return "1150 - 1400";
    case "Renaissance":
      return "1400 - 1600";
    case "Baroque":
      return "1600 - 1750";
    case "Classical":
      return "1750 - 1830";
    case "Early Romantic":
      return "1830 - 1860";
    case "Romantic":
      return "1860 - 1890";
    case "Late Romantic":
      return "1890 - 1910";
    case "20th Century":
      return "1900 - 1945";
    case "Post-War":
      return "1945 - 2000";
    case "21st Century":
      return "2000 - 2100";
    default:
      return " - ";
  }
};
