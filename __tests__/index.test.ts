import * as localStorageModule from "../src/index";

// Mocking localStorage for testing
const localStorageMock = (() => {
  let store: Record<string, any> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: any) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    // Calculate the length based on the number of keys
    get length() {
      return Object.keys(store).length;
    },
  };
})();

// Mock global localStorage
Object.defineProperty(global, "localStorage", { value: localStorageMock });

describe("localStorageModule", () => {
  // Test setItem function
  test("setItem should set an item in local storage", () => {
    const testValue = "testValue";
    expect(localStorageModule.setItem("testKey", testValue)).toBe(true);
    expect(localStorage.getItem("testKey")).toBe(testValue);
  });

  // Test getItem function
  test("getItem should get an item from local storage", () => {
    localStorage.setItem("testKey", "testValue");
    expect(localStorageModule.getItem("testKey")).toBe("testValue");
  });

  // Test removeItem function
  test("removeItem should remove an item from local storage", () => {
    localStorage.setItem("testKey", "testValue");
    expect(localStorageModule.removeItem("testKey")).toBe(true);
    expect(localStorage.getItem("testKey")).toBe(null);
  });

  // Test clearStorage function
  test("clearStorage should clear all items from local storage", () => {
    localStorage.setItem("testKey1", "testValue1");
    localStorage.setItem("testKey2", "testValue2");
    expect(localStorageModule.clearStorage()).toBe(true);
    expect(localStorage.length).toBe(0);
  });

  // Test keyExists function
  test("keyExists should check if a key exists in local storage", () => {
    localStorage.setItem("testKey", "testValue");
    expect(localStorageModule.keyExists("testKey")).toBe(true);
    expect(localStorageModule.keyExists("nonexistentKey")).toBe(false);
  });

  // Test storageLength function
  test("storageLength should get the number of items in local storage", () => {
    localStorage.clear();
    localStorage.setItem("testKey1", "testValue1");
    localStorage.setItem("testKey2", "testValue2");
    expect(localStorageModule.storageLength()).toBe(2); // Adjust the expected value according to your test case
  });
});
