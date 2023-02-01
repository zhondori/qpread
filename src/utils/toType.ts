export default (value: string): boolean | string | number => {
  if (value === "true" || value === "false") {
    return Boolean(value);
  } else if (typeof Number(value) == "number") {
    return Number(value);
  }
  return value.toString();
};
