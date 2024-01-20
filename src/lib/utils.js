import slugify from 'slugify';

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const slugifyString = (string) => {
  return slugify(string, { lower: true });
};

export const sortArrayOfObjAsc = (array, key) => {
  const arrayAscending = [...array].sort((a, b) => {
    const nameA = a[key].toUpperCase(); // ignore upper and lowercase
    const nameB = b[key].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return arrayAscending;
  
};

