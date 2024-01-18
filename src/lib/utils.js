import slugify from 'slugify';

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const slugifyString = (string) => {
  return slugify(string, { lower: true });
};

