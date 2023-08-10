export const getDirtyValues = (dirtyFields, values) => {
  return Object.keys(dirtyFields).reduce((acc, key) => {
    acc[key] = values[key];
    return acc;
  }, {});
};

export const convertUnderscoreToTitleCase = (str) => {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
