function isValidDate(d?: Date | string) {
  // @ts-ignore
  return d instanceof Date && !isNaN(d);
}

export function getDate(
  date: string | Date,
  locale?: string | string[] | undefined,
  options?: Intl.DateTimeFormatOptions,
) {
  let tmpDate = date;
  if (!(date instanceof Date)) {
    tmpDate = new Date(date);
  }
  if (isValidDate(tmpDate))
    return Intl.DateTimeFormat(
      locale ?? "it-IT",
      options ?? {
        year: "numeric",
        month: "long",
        day: "2-digit",
      },
    )?.format(tmpDate as Date);
}

export function getDateTime(date: Date) {
  return date.toISOString();
}
