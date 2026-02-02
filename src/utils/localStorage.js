function localStorageSetItem(key, value) {
  if (typeof key !== "string") {
    throw new Error("Key must be a string");
    return;
  }
  try {
    const JSONValue = JSON.stringify(value);
    localStorage.setItem(key, JSONValue);
  } catch (error) {
    console.error("Error setting item in localStorage:", error);
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function localStorageClear() {
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
};
