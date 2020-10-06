/* eslint-disable */
const warning = console.warn;

console.warn = (message) => {
  if (message.includes("was created without expected prop")) {
    throw Error(message);
  }
};
