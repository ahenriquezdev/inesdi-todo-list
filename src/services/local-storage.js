const readLocalStorage = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    if (!storedData) {
      return [];
    }
    return JSON.parse(storedData);
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

const writeLocalStorage = (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
};

export { readLocalStorage, writeLocalStorage };
