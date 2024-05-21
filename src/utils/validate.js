export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const isPasswordsValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
  const isName = /^[A-Za-z][A-Za-z ]{3,29}$/.test(name);

  if (!isName) return "Name is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordsValid) return "Password is not valid";
  return null;
};
