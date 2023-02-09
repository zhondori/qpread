export default (value: string): boolean | string | number => {
  if (value === "true" || value === "false") {
    return value === "true";
  } else if (typeof Number(value) == "number" && !isNaN(Number(value))) {
    return Number(value);
  }
  return value.toString();
};
