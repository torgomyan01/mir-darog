export const RandomKey = (length = 5) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const generateAdminPassword = () => {
  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  return `${day < 10 ? `0${day}` : day}${month < 10 ? `0${month}` : month}${year}`;
};
