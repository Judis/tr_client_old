const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    }
  };
})();

global.localStorage = localStorageMock;


const JSONMock = (() => {
  return {
    parse(str) {
      return {};
    }
  };
})();

global.JSON = JSONMock;
