// passwordUtils.js
export const checkPasswordValidity = (password) => {
  const validPasswords = [
    "password1",
    "password2",
    "password3",
    "password4",
    "password5",
  ]; // Valid passwords list

  return validPasswords.includes(password);
};
