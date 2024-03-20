// Function to set an item in local storage
export function setItem(key: string, value: any): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("Error setting item in local storage:", error);
    return false;
  }
}

// Function to get an item from local storage
export function getItem(key: string): any {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Error getting item from local storage:", error);
    return null;
  }
}

// Function to remove an item from local storage
export function removeItem(key: string): boolean {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("Error removing item from local storage:", error);
    return false;
  }
}

// Function to clear all items from local storage
export function clearStorage(): boolean {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error("Error clearing local storage:", error);
    return false;
  }
}

// Function to check if a key exists in local storage
export function keyExists(key: string): boolean {
  try {
    return localStorage.getItem(key) !== null;
  } catch (error) {
    console.error("Error checking if key exists in local storage:", error);
    return false;
  }
}

// Function to get the number of items in local storage
export function storageLength(): number {
  try {
    return localStorage.length;
  } catch (error) {
    console.error("Error getting length of local storage:", error);
    return -1;
  }
}
