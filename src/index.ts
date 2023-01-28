import toType from "./utils/toType";

export default {
  toUrl: function (obj: any): string {
    return Object.entries(obj)
      .map((el) => {
        if (typeof el[1] !== "object") {
          return `${el[0]}=${el[1]}`;
        }
        return undefined;
      })
      .filter((el) => el)
      .join("&");
  },
  toObject: function (url: string) {
    const firstIndex = url.indexOf("?");
    const arr = url
      .slice(firstIndex + 1)
      .split("&")
      .map((el) => el.split("="));

    const obj: any = {};

    for (let value of arr) {
      obj[value[0]] = toType(value[1]);
    }
    return obj;
  },
};
