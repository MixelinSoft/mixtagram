export const localStorageManager = (action, name, data) => {
  if (action === 'set') {
    const stringData = JSON.stringify(data);
    localStorage.setItem(name, stringData);
    console.log(`${name} setted to Local Storage`);
  }

  if (action === 'get') {
    const stringData = localStorage.getItem(name);
    const objectData = JSON.parse(stringData);
    console.log(`${name} getted from Local Storage`);
    return objectData;
  }

  if (action === 'remove') {
    localStorage.removeItem(name);
  }
};
