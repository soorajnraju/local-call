# local-call

A tiny module for manipulating local storage.

## Installation

You can install `local-call` via npm or yarn:

```bash
npm install local-call
```

or

```bash
yarn add local-call
```

# Usage

## Importing the module

```
import * as localStorageModule from "local-call";
```

## Functions

`setItem(key: string, value: any): boolean`
Sets an item in local storage with the specified key and value.

> `key`: The key of the item.
> `value`: The value to be stored. It can be of any data type.
> Returns `true` if the item was successfully set, `false` otherwise.

`getItem(key: string): any`
Gets an item from local storage with the specified key.

> `key`: The key of the item.
> Returns the `value` of the item if found, `null` otherwise.

`removeItem(key: string): boolean`
Removes an item from local storage with the specified key.

> `key`: The key of the item to be removed.
> Returns `true` if the item was successfully removed, `false` otherwise.

`clearStorage(): boolean`
Clears all items from local storage.

Returns `true` if the storage was successfully cleared, `false` otherwise.

`keyExists(key: string): boolean`
Checks if an item with the specified key exists in local storage.

> `key`: The key to check.
> Returns `true` if the item exists, `false` otherwise.

`storageLength(): number`
Gets the number of items in local storage.

Returns the number of items in local storage, or `-1` if an error occurs.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
