export const tokenCheck = () => {
  const token = window.localStorage.getItem("fcalendartoken");

  if (token) {
    return token;
  } else {
    return false;
  }
};
