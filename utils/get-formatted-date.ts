// Return date with format "dd MMM yyyy"

export const getFormattedDate = (date: Date | undefined) => {
  if (!date) return;
  const month = date.toLocaleString("it-IT", { month: "short" });
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} ${capitalizedMonth} ${year}`;
};
