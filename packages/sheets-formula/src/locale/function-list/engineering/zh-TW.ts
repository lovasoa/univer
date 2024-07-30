/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
    BESSELI: {
        description: '傳回修正的貝賽耳函數 In(x)',
        abstract: '傳回修正的貝賽耳函數 In(x)',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/besseli-%E5%87%BD%E6%95%B0-8d33855c-9a8d-444b-98e0-852267b1c0df',
            },
        ],
        functionParameter: {
            x: { name: 'X', detail: '這是用於評估函數的值。' },
            n: { name: 'N', detail: '這是Bessel函數的順序。如果n不是整數，則會取至整數。' },
        },
    },
    BESSELJ: {
        description: '傳回貝賽耳函數 Jn(x)',
        abstract: '返回貝賽耳函數 Jn(x)',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/besselj-%E5%87%BD%E6%95%B0-839cb181-48de-408b-9d80-bd02982d94f7',
            },
        ],
        functionParameter: {
            x: { name: 'X', detail: '這是用於評估函數的值。' },
            n: { name: 'N', detail: '這是Bessel函數的順序。如果n不是整數，則會取至整數。' },
        },
    },
    BESSELK: {
        description: '傳回修正的貝賽耳函數 Kn(x)',
        abstract: '返回修正的貝賽耳函數 Kn(x)',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/besselk-%E5%87%BD%E6%95%B0-606d11bc-06d3-4d53-9ecb-2803e2b90b70',
            },
        ],
        functionParameter: {
            x: { name: 'X', detail: '這是用於評估函數的值。' },
            n: { name: 'N', detail: '這是Bessel函數的順序。如果n不是整數，則會取至整數。' },
        },
    },
    BESSELY: {
        description: '傳回貝賽耳函數 Yn(x)',
        abstract: '返回貝賽耳函數 Yn(x)',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bessely-%E5%87%BD%E6%95%B0-f3a356b3-da89-42c3-8974-2da54d6353a2',
            },
        ],
        functionParameter: {
            x: { name: 'X', detail: '這是用於評估函數的值。' },
            n: { name: 'N', detail: '這是Bessel函數的順序。如果n不是整數，則會取至整數。' },
        },
    },
    BIN2DEC: {
        description: '將二進制數轉換為十進制數',
        abstract: '將二進位數轉換為十進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bin2dec-%E5%87%BD%E6%95%B0-63905b57-b3a0-453d-99f4-647bb519cd6c',
            },
        ],
        functionParameter: {
            number: { name: '二進制數', detail: '您要轉換的二進制數。' },
        },
    },
    BIN2HEX: {
        description: '將二進制數轉換為十六進制數',
        abstract: '將二進位數轉換為十六進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bin2hex-%E5%87%BD%E6%95%B0-0375e507-f5e5-4077-9af8-28d84f9f41cc',
            },
        ],
        functionParameter: {
            number: { name: '二進制數', detail: '您要轉換的二進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
    BIN2OCT: {
        description: '將二進制數轉換為八進制數',
        abstract: '將二進位數轉換為八進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bin2oct-%E5%87%BD%E6%95%B0-0a4e01ba-ac8d-4158-9b29-16c25c4c23fd',
            },
        ],
        functionParameter: {
            number: { name: '二進制數', detail: '您要轉換的二進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
    BITAND: {
        description: '傳回兩個數的「位元與」',
        abstract: '傳回兩數的「位元與」',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bitand-%E5%87%BD%E6%95%B0-8a2be3d7-91c3-4b48-9517-64548008563a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BITLSHIFT: {
        description: '傳回左移 shift_amount 位的計算值接收數',
        abstract: '傳回左移 shift_amount 位元的計算值接收數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bitlshift-%E5%87%BD%E6%95%B0-c55bb27e-cacd-4c7c-b258-d80861a03c9c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BITOR: {
        description: '傳回兩個數的「位元或」',
        abstract: '傳回兩個數字的「位元或」',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bitor-%E5%87%BD%E6%95%B0-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BITRSHIFT: {
        description: '傳回右移 shift_amount 位元的計算值接收數',
        abstract: '返回右移 shift_amount 位元的計算值接收數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bitrshift-%E5%87%BD%E6%;95%B0-274d6996-f42c-4743-abdb-4ff95351222c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BITXOR: {
        description: '傳回兩個數的位元「異或」',
        abstract: '傳回兩數的位元「異或」',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/bitxor-%E5%87%BD%E6%95%B0-c81306a1-03f9-4e89-85ac-b86c3cba10e4',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    COMPLEX: {
        description: '將實係數和虛係數轉換為複數',
        abstract: '將實係數和虛係數轉換為複數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/complex-%E5%87%BD%E6%95%B0-f0b8f3a9-51cc-4d6d-86fb-3a9362fa4128',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CONVERT: {
        description: '將數字從一種度量系統轉換為另一種度量系統',
        abstract: '將數字從一種度量系統轉換為另一種度量系統',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/convert-%E5%87%BD%E6%95%B0-d785bef1-808e-4aac-bdcd-666c810f9af2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DEC2BIN: {
        description: '將十進制數轉換為二進制數',
        abstract: '將十進位數轉換為二進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/dec2bin-%E5%87%BD%E6%95%B0-0f63dd0e-5d1a-42d8-b511-5bf5c6d43838',
            },
        ],
        functionParameter: {
            number: { name: '十進制數', detail: '您要轉換的十進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
    DEC2HEX: {
        description: '將十進制數轉換為十六進制數',
        abstract: '將十進位數轉換為十六進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/dec2hex-%E5%87%BD%E6%95%B0-6344ee8b-b6b5-4c6a-a672-f646666704619',
            },
        ],
        functionParameter: {
            number: { name: '十進制數', detail: '您要轉換的十進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
    DEC2OCT: {
        description: '將十進制數轉換為八進制數',
        abstract: '將十進位數轉換為八進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/dec2oct-%E5%87%BD%E6%95%B0-c9d835ca-20b7-40c4-8a9e-d3be351ce00f',
            },
        ],
        functionParameter: {
            number: { name: '十進制數', detail: '您要轉換的十進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
    DELTA: {
        description: '檢驗兩個值是否相等',
        abstract: '檢驗兩個值是否相等',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/delta-%E5%87%BD%E6%95%B0-2f763672-c959-4e07-ac33-fe03220ba432',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    ERF: {
        description: '返回誤差函數',
        abstract: '返回誤差函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/erf-%E5%87%BD%E6%95%B0-c53c7e7b-5482-4b6c-883e-56df3c9af349',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    ERF_PRECISE: {
        description: '返回誤差函數',
        abstract: '返回誤差函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/erf-precise-%E5%87%BD%E6%95%B0-9a349593-705c-4278-9a98-e4122831a8e0',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    ERFC: {
        description: '返回互補誤差函數',
        abstract: '返回互補誤差函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/erfc-%E5%87%BD%E6%95%B0-736e0318-70ba-4e8b-8d08-461fe68b71b3',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    ERFC_PRECISE: {
        description: '傳回從 x 到無窮大積分的互補 ERF 函數',
        abstract: '傳回從 x 到無窮大積分的互補 ERF 函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/erfc-precise-%E5%87%BD%E6%95%B0-e90e6bab-f45e-45df-b2ac-cd2eb4d4a273',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GESTEP: {
        description: '檢驗數字是否大於門檻',
        abstract: '檢驗數字是否大於門檻',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/gestep-%E5%87%BD%E6%95%B0-f37e7d2a-41da-4129-be95-640883fca9df',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    HEX2BIN: {
        description: '將十六進制數轉換為二進制數',
        abstract: '將十六進位數轉換為二進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/hex2bin-%E5%87%BD%E6%95%B0-a13aafaa-5737-4920-8424-643e581828c1',
            },
        ],
        functionParameter: {
            number: { name: '十六進制數', detail: '您要轉換的十六進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
    HEX2DEC: {
        description: '將十六進制數轉換為十進制數',
        abstract: '將十六進位數轉換為十進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/hex2dec-%E5%87%BD%E6%95%B0-8c8c3155-9f37-45a5-a3ee-ee5379ef106e',
            },
        ],
        functionParameter: {
            number: { name: '十六進制數', detail: '您要轉換的十六進制數。' },
        },
    },
    HEX2OCT: {
        description: '將十六進制數轉換為八進制數',
        abstract: '將十六進位數轉換為八進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/hex2oct-%E5%87%BD%E6%95%B0-54d52808-5d19-4bd0-8a63-1096a5d11912',
            },
        ],
        functionParameter: {
            number: { name: '十六進制數', detail: '您要轉換的十六進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
    IMABS: {
        description: '傳回複數的絕對值（模數）',
        abstract: '傳回複數的絕對值（模）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imabs-%E5%87%BD%E6%95%B0-b31e73c6-d90c-4062-90bc-8eb351d765a1',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMAGINARY: {
        description: '傳回複數的虛係數',
        abstract: '傳回複數的虛係數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imaginary-%E5%87%BD%E6%95%B0-dd5952fd-473d-44d9-95a1-9a17b23e428a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMARGUMENT: {
        description: '傳回參數 theta，即以弧度表示的角',
        abstract: '傳回參數 theta，即以弧度表示的角',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imargument-%E5%87%BD%E6%95%B0-eed37ec1-23b3-4f59-b9f3-d340358a034a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMCONJUGATE: {
        description: '傳回複數的共軛複數',
        abstract: '傳回複數的共軛複數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imconjugate-%E5%87%BD%E6%95%B0-2e2fc1ea-f32b-4f9b-9de6-233853bafd42',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMCOS: {
        description: '傳回複數的餘弦',
        abstract: '傳回複數的餘弦',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imcos-%E5%87%BD%E6%95%B0-dad75277-f592-4a6b-ad6c-be93a808a53c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMCOSH: {
        description: '傳回複數的雙曲餘弦值',
        abstract: '傳回複數的雙曲餘弦值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imcosh-%E5%87%BD%E6%95%B0-053e4ddb-4122-458b-be9a-457c405e90ff',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMCOT: {
        description: '傳回複數的餘弦值',
        abstract: '傳回複數的餘弦值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imcot-%E5%87%BD%E6%95%B0-dc6a3607-d26a-4d06-8b41-8931da36442c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMCSC: {
        description: '傳回複數的餘割值',
        abstract: '傳回複數的餘割值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imcsc-%E5%87%BD%E6%95%B0-9e158d8f-2ddf-46cd-9b1d-98e29904a323',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMCSCH: {
        description: '傳回複數的雙曲餘割值',
        abstract: '傳回複數的雙曲餘割值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imcsch-%E5%87%BD%E6%95%B0-c0ae4f54-5f09-4fef-8da0-dc33ea2c5ca9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMDIV: {
        description: '傳回兩個複數的商數',
        abstract: '傳回兩個複數的商',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imdiv-%E5%87%BD%E6%95%B0-a505aff7-af8a-4451-8142-77ec3d74d83f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMEXP: {
        description: '傳回複數的指數',
        abstract: '傳回複數的指數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imexp-%E5%87%BD%E6%95%B0-c6f8da1f-e024-4c0c-b802-a60e7147a95f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMLN: {
        description: '傳回複數的自然對數',
        abstract: '傳回複數的自然對數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imln-%E5%87%BD%E6%95%B0-32b98bcf-8b81-437c-a636-6fb3aad509d8',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMLOG10: {
        description: '傳回複數的以 10 為底的對數',
        abstract: '傳回複數的以 10 為底的對數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imlog10-%E5%87%BD%E6%95%B0-58200fca-e2a2-4271-8a98-ccd4360213a5',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMLOG2: {
        description: '傳回複數的以 2 為底的對數',
        abstract: '傳回複數的以 2 為底的對數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imlog2-%E5%87%BD%E6%95%B0-152e13b4-bc79-486c-a243-e6a676878c51',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMPOWER: {
        description: '傳回複數的整數冪',
        abstract: '傳回複數的整數冪',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/impower-%E5%87%BD%E6%95%B0-210fd2f5-f8ff-4c6a-9d60-30e34fbdef39',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMPRODUCT: {
        description: '傳回 2 到 255 的複數的乘積',
        abstract: '傳回 2 到 255 的複數的乘積',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/improduct-%E5%87%BD%E6%95%B0-2fb8651a-a4f2-444f-975e-8ba7aab3a5ba',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMREAL: {
        description: '傳回複數的實係數',
        abstract: '傳回複數的實係數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imreal-%E5%87%BD%E6%95%B0-d12bc4c0-25d0-4bb3-a25f-ece1938bf366',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMSEC: {
        description: '傳回複數的正切值',
        abstract: '傳回複數的正切值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imsec-%E5%87%BD%E6%95%B0-6df11132-4411-4df4-a3dc-1f17372459e0',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMSECH: {
        description: '傳回複數的雙曲正切值',
        abstract: '傳回複數的雙曲正切值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imsech-%E5%87%BD%E6%95%B0-f250304f-788b-4505-954e-eb01fa50903b',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMSIN: {
        description: '傳回複數的正弦',
        abstract: '傳回複數的正弦',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imsin-%E5%87%BD%E6%95%B0-1ab02a39-a721-48de-82ef-f52bf37859f6',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMSINH: {
        description: '傳回複數的雙曲正弦值',
        abstract: '傳回複數的雙曲正弦值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imsinh-%E5%87%BD%E6%95%B0-dfb9ec9e-8783-4985-8c42-b028e9e8da3d',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMSQRT: {
        description: '傳回複數的平方根',
        abstract: '傳回複數的平方根',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imsqrt-%E5%87%BD%E6%95%B0-e1753f80-ba11-4664-a10e-e17368396b70',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMSUB: {
        description: '傳回兩個複數的差',
        abstract: '傳回兩個複數的差',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imsub-%E5%87%BD%E6%95%B0-2e404b4d-4935-4e85-9f52-cb08b9a45054',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMSUM: {
        description: '傳回多個複數的和',
        abstract: '傳回多個複數的和',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imsum-%E5%87%BD%E6%95%B0-81542999-5f1c-4da6-9ffe-f1d7aaa9457f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    IMTAN: {
        description: '傳回複數的正切值',
        abstract: '傳回複數的正切值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/imtan-%E5%87%BD%E6%95%B0-8478f45d-610a-43cf-8544-9fc0b553a132',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    OCT2BIN: {
        description: '將八進制數轉換為二進制數',
        abstract: '將八進位數轉換為二進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/oct2bin-%E5%87%BD%E6%95%B0-55383471-3c56-4d27-9522-1a8ec646c589',
            },
        ],
        functionParameter: {
            number: { name: '八進制數', detail: '您要轉換的八進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
    OCT2DEC: {
        description: '將八進制數轉換為十進制數',
        abstract: '將八進位數轉換為十進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/oct2dec-%E5%87%BD%E6%95%B0-87606014-cb98-44b2-8dbb-e48f8ced1554',
            },
        ],
        functionParameter: {
            number: { name: '八進制數', detail: '您要轉換的八進制數。' },
        },
    },
    OCT2HEX: {
        description: '將八進制數轉換為十六進制數',
        abstract: '將八進位數轉換為十六進位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/oct2hex-%E5%87%BD%E6%95%B0-912175b4-d497-41b4-a029-221f051b858f',
            },
        ],
        functionParameter: {
            number: { name: '八進制數', detail: '您要轉換的八進制數。' },
            places: { name: '字元數', detail: '這是要使用的字元數。' },
        },
    },
};
