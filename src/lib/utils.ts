export const getFakeUserName = () => {
  const names = ["Andrii", "Ivan", "Oleg", "Petro", "Vlad", "Yura"];
  const surname = ["Kovalenko", "Ivanenko", "Petrov", "Vladov", "Yuriev"];
  return `${names[Math.floor(Math.random() * names.length)]} ${
    surname[Math.floor(Math.random() * surname.length)]
  }`;
};

export const getRandomBlah = () =>
  "Blah ".repeat(Math.floor(Math.random() * 20) + 1);
