export const getAnimalResponse = (animal, callback) => {
  const responses = {
    dog: () => {
      const barks = ['гав', 'гав-гав', 'гав', 'гав-гав-гав', 'гав-гав'];
      const randomBark = () => barks[Math.floor(Math.random() * barks.length)];
      const numberOfBarks = Math.floor(Math.random() * 7) + 1;
      let response = Array.from({ length: numberOfBarks }, randomBark).join(
        ', ',
      );
      return capitalizeFirstLetter(response) + '!';
    },
    cat: () => {
      const meows = ['мяу', 'мур-мур', 'мяу', 'мур', 'мяу-мяу'];
      const randomMeow = () => meows[Math.floor(Math.random() * meows.length)];
      const numberOfMeows = Math.floor(Math.random() * 7) + 1;
      let response = Array.from({ length: numberOfMeows }, randomMeow).join(
        ', ',
      );
      return capitalizeFirstLetter(response) + ' 🐱';
    },
    hen: () => {
      const clucks = ['ко-ко', 'куд-кудах', 'ко-ко', 'кудах'];
      const randomCluck = () =>
        clucks[Math.floor(Math.random() * clucks.length)];
      const numberOfClucks = Math.floor(Math.random() * 7) + 1;
      let response = Array.from({ length: numberOfClucks }, randomCluck).join(
        ', ',
      );
      return capitalizeFirstLetter(response) + ' 🐔';
    },
    rooster: () => {
      const crows = ['кукареку', 'кукареку', 'кукареку', 'кукареку'];
      const randomCrow = () => crows[Math.floor(Math.random() * crows.length)];
      const numberOfCrows = Math.floor(Math.random() * 7) + 1;
      let response = Array.from({ length: numberOfCrows }, randomCrow).join(
        ', ',
      );
      return capitalizeFirstLetter(response) + ' 🐓';
    },
  };

  const delay = Math.floor(Math.random() * 5000) + 1000; // рандомное время от 1 до 5 секунд

  setTimeout(() => {
    if (responses[animal]) {
      callback(responses[animal]());
    } else {
      callback('Неизвестное животное 🐾');
    }
  }, delay);
};

// Вспомогательная функция для капитализации первой буквы
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
