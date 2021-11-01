export const formatNumber = (number, decimals = 1) => {
  const formated = number?.toFixed(decimals);
  if (formated?.slice(-1) === "0") {
    return formated?.substring(0, formated?.length - 2);
  }
  return formated;
};

export const notDefault = 1;
