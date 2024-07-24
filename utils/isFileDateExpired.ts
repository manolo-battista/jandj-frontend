const isFileDateExpired = (file: File, expireTimeInDays?: number) => {
  const expireTime = expireTimeInDays || 365;
  const now = new Date();
  const fileDate = new Date(file.lastModified);
  const diff = now.getTime() - fileDate.getTime();
  const diffInDays = diff / (1000 * 3600 * 24);
  return diffInDays > expireTime;
};

export default isFileDateExpired;
