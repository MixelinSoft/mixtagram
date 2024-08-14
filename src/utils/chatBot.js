export const getAnimalResponse = (animal, callback) => {
  const responses = {
    dog: () => {
      const barks = ['гав', 'гав-гав', 'гав-гав-гав'];
      const randomBark = () => barks[Math.floor(Math.random() * barks.length)];
      const numberOfBarks = Math.floor(Math.random() * 7) + 1;
      let response = Array.from({ length: numberOfBarks }, randomBark).join(
        ', ',
      );
      return capitalizeFirstLetter(response) + '!';
    },

    cat: () => {
      const meows = [
        'мяу',
        'мур',
        'мур-мур',
        'мяу-мяу',
        'мяу-мяу-мяу',
        'мур-мур-мур',
        'мур-мяу',
      ];
      const randomMeow = () => meows[Math.floor(Math.random() * meows.length)];
      const numberOfMeows = Math.floor(Math.random() * 7) + 1;
      let response = Array.from({ length: numberOfMeows }, randomMeow).join(
        ', ',
      );
      return capitalizeFirstLetter(response) + ' 🐱';
    },

    hen: () => {
      const clucks = ['ко-ко', 'куд-кудах', 'ко-ко', 'кудах', 'ко-ко-ко'];
      const randomCluck = () =>
        clucks[Math.floor(Math.random() * clucks.length)];
      const numberOfClucks = Math.floor(Math.random() * 7) + 1;
      let response = Array.from({ length: numberOfClucks }, randomCluck).join(
        ', ',
      );
      return capitalizeFirstLetter(response) + ' 🐔';
    },

    rooster: () => {
      const crows = ['кукареку-у-у', 'кукареку', 'ко-ко', 'ко-ко-ко'];
      const randomCrow = () => crows[Math.floor(Math.random() * crows.length)];
      const numberOfCrows = Math.floor(Math.random() * 7) + 1;
      let response = Array.from({ length: numberOfCrows }, randomCrow).join(
        ', ',
      );
      return capitalizeFirstLetter(response) + ' 🐓';
    },
  };

  const delay = Math.floor(Math.random() * 5000) + 1000;

  setTimeout(() => {
    callback(responses[animal]());
  }, delay);
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
