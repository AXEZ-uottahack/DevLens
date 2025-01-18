/*The MIT License

Copyright JS Foundation and other contributors <https://js.foundation/>

Based on Underscore.js, copyright Jeremy Ashkenas,
DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/lodash/lodash

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

Copyright and related rights for sample code are waived via CC0. Sample
code is defined as all source code displayed within the prose of the
documentation.

CC0: http://creativecommons.org/publicdomain/zero/1.0/

====

Files located in the node_modules and vendor directories are externally
maintained libraries used by this software which have their own
licenses; we recommend you read them, as their terms may differ from the
terms above.
*/ // hacky copy of lodash utils we need for gadget-server that doesn't require us to have lodash available in gadget-server
// we can't add it to all apps' node_modules, so we copy what we need over here
// we plan to add a versioning scheme to gadget-server that will trigger a yarn install when the version changes, so when we have that, we can delete this and add a real dependency on lodash
declare const asyncTag: string, funcTag: string, genTag: string, mapTag: string, nullTag: string, proxyTag: string, setTag: string, undefinedTag: string;
declare const symToStringTag: any;
declare const nativeObjectToString: (this: any) => string;
declare const hasOwnProperty: (this: any, key: string) => boolean;
declare function baseGetTag(value: any);
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ declare function getRawTag(value: any);
export declare function assert<T>(value: T | false | undefined | null, message?: string): T;
export declare function isObject(value: any): value is object;
export declare function isObjectLike(value: any): value is object;
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export declare function isFunction(value: any): value is Function;
export declare function isArrayLike(value: any): boolean;
export declare function isEmpty(value: null | undefined | any[] | object): boolean;
export declare function isString(value: any): value is string;
export declare function keyBy<T>(array: T[], iteratee: keyof T | ((value: T) => string)): Record<string, T>;
export declare function pickBy<T extends object>(object: T, predicate: (value: T[keyof T], key: keyof T) => boolean): Partial<T>;
/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 1 }
 *
 * invert(object)
 * // => { '1': 'c', '2': 'b' }
 */ export declare function invert(object: any): Record<string, any>;
declare function mapValue(object: any, iteratee: any): Record<string, any>;
export default mapValue;
export declare const defaults: (...args: any[]) => Record<string, any>;
export declare const isProductionEnvironment: () => boolean;
