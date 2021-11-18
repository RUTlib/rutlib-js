# [RUTlib](http://rutlib.cl)

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

## Usage

#### Clean a RUT

Delete all non-numeric characters from a RUT.

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

Verify if a RUT is valid.

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

Get de verificator digit(VD) of a number.

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

Format a RUT to a valid format.

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

Generate a RUT with a random number.

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

---

Version 1.0.1
