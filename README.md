# [RUTlib](http://rutlib.cl)

<p align="center">
  <img src="https://github.com/RUTlib/rutlib-js/blob/main/images/rutlibJS_logo.png?raw=tru" alt="RUTlib's javascipt library logo"/>
</p>

[![NPM](https://nodei.co/npm/rutlib.png)](https://npmjs.org/package/rutlib)

[![GitHub license](https://img.shields.io/github/license/RUTlib/rutlib-js?logo=javascript&style=for-the-badge)](https://github.com/RUTlib/rutlib-js/blob/main/LICENSE.md)

<!--
[![GitHub issues](https://img.shields.io/github/issues/RUTlib/rutlib-js?logo=javascript&style=for-the-badge)](https://github.com/RUTlib/rutlib-js/issues) [![GitHub forks](https://img.shields.io/github/forks/RUTlib/rutlib-js?logo=javascript&style=for-the-badge)](https://github.com/RUTlib/rutlib-js/network) [![GitHub stars](https://img.shields.io/github/stars/RUTlib/rutlib-js?logo=javascript&style=for-the-badge)](https://github.com/RUTlib/rutlib-js/stargazers)
 -->

A JavaScript date library for parsing, validating, manipulating, generating and formatting RUTs (chilean identification).

## Quick Installation

```bash
npm i rutlib
```

The module exports the following functions:

- **cleanRut(rut: string): string**
- **validateRut(rut: string): boolean**
- **getLastDigitOfRut(rutNumbers: number): string**
- **formatRut(rut: string, withDots: boolean = true): string**
- **generateRut(length: number = 8, formatted: boolean = true): string**

## Usage

#### Clean a RUT

This function takes a RUT as a string and removes all non-numeric characters, and transforms the input to uppercase.

| Function | Params       | Return | Description                        |
| -------- | ------------ | ------ | ---------------------------------- |
| cleanRut | RUT (String) | String | RUT without non-numeric characters |

```javascript
import { cleanRut } from 'rutlib';

cleanRut('1.234-3'); // 12343
cleanRut('1234-3'); // 12343
cleanRut('12343'); // 12343
```

#### Validate a RUT

This function checks whether a RUT is valid according to the RUT verification rules. Returns true if the RUT is valid and false otherwise.

| Function    | Params       | Return  | Description                                            |
| ----------- | ------------ | ------- | ------------------------------------------------------ |
| validateRut | RUT (String) | Boolean | Return true if RUT is valid, false otherwisecharacters |

```javascript
import { validateRut } from 'rutlib';

validateRut('1.234-3'); // true
validateRut('1234-3'); // true
validateRut('12343'); // true

validateRut('1.234-0'); // false
validateRut('1234-0'); // false
validateRut('12340'); // false
```

#### Get Verificator Digit of a number

This function receives the numeric part of the RUT and calculates the corresponding verification digit.

| Function          | Params                  | Return | Description                       |
| ----------------- | ----------------------- | ------ | --------------------------------- |
| getLastDigitOfRut | RUT without VD (Number) | String | Return RUT last verificator digit |

```javascript
import { getLastDigitOfRut } from 'rutlib';

getLastDigitOfRut(1234); // 3
getLastDigitOfRut(1235); // 1
getLastDigitOfRut(1236); // K
```

#### Format RUT

This function takes a RUT and formats it according to the RUT format conventions, with the option to add or not separation points every three digits.

| Function  | Params                                               | Return | Description          |
| --------- | ---------------------------------------------------- | ------ | -------------------- |
| formatRut | rut (String) <br > withDots:True (optional) (Bolean) | String | Return RUT formatted |

```javascript
import { formatRut } from 'rutlib';

formatRut('1.234-3'); // 1.234-3
formatRut('1234-3'); //  1.234-3
formatRut('12343'); //  1.234-3

formatRut('1.234-3', false); // 1234-3
formatRut('1234-3', false); //  1234-3
formatRut('12343', false); //  1234-3
```

#### Get random RUT

This function generates a valid RUT randomly. You can specify the length of the RUT number and whether the generated RUT should be formatted or not.

| Function    | Params                                                             | Return | Description          |
| ----------- | ------------------------------------------------------------------ | ------ | -------------------- |
| generateRut | length:8 (optional) (Number)<br>formated:True (optional) (boolean) | String | Return RUT generated |

```javascript
import { generateRut } from 'rutlib';

generateRut(); // 12.345.678-5 (random)
generateRut(); // 87.654.321-4 (random)

generateRut(7); // 1.234.567-4 (random)
generateRut(7); // 7.654.321-6 (random)

generateRut(9, false); // 123456789-2 (random)
generateRut(9, false); // 987654321-1 (random)
```

#### Compare two RUTs

This function compares two RUTs. It takes two RUTs as strings, cleans them using the `cleanRut` function, validates them using the `validateRut` function, and then compares them. If both RUTs are valid and are the same, it returns true; otherwise, it returns false. If any of the RUTs is invalid, it will throw an error.

| Function    | Params                       | Return  | Description                                                                                                          |
| ----------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| compareRuts | rut1 (String), rut2 (String) | Boolean | Return true if both RUTs are valid and are the same, false otherwise. Throws an error if any of the RUTs is invalid. |

```javascript
import { compareRuts } from 'rutlib';

try {
  const result = compareRuts('12.345.678-5', '12345678-5');
  console.log(result); // Will print true if the RUTs are the same and valid
} catch (error) {
  console.error(error.message); // Will print the error message if any of the RUTs is invalid
}
```

## Support the Project

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/fvergaracl)

## If you'd like to contribute

If you want to contribute to this module, you can do so by creating Issues in the repository or through Pull Requests. Remember to follow the code of conduct and best practices for clean code.

It is important to mention that any change in the logic of the module's functions should be properly tested and documented.

## More information

For more information about the RUT, you can consult the following link: RUT (Chile)

---

Version 1.0.4
