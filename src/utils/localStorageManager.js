export const localStorageManager = (action, name, data) => {
  if (action === 'set') {
    const stringData = JSON.stringify(data);
    console.log(name, stringData);
    localStorage.setItem(name, stringData);
    console.log(`${name} setted to Local Storage`);
  }

  if (action === 'get') {
    const stringData = localStorage.getItem(name);
    const objectData = JSON.parse(stringData);
    console.log(`${name} sgetted from Local Storage`);
    return objectData;
  }

  if (action === 'remove') {
    localStorage.removeItem(name);
  }
};
