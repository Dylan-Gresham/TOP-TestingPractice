const {capitalize, reverseString} = require('./../StringFunctions.js');

describe('String Functions', () => {
   test('Functions are defined', () => {
      expect(typeof capitalize).toBe('function');
      expect(typeof reverseString).toBe('function');
   });

   test('Capitalize', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('123456789')).toBe('123456789');
   });

   test('Capitalize wrong type', () => {
      expect(capitalize(1)).toBe(undefined);
      expect(capitalize(undefined)).toBe(undefined);
      expect(capitalize(null)).toBe(undefined);
      expect(capitalize(() => {})).toBe(undefined);
   });

   test('Reverse String', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('123456789')).toBe('987654321');
   });

   test('Reverse String wrong type', () => {
      expect(reverseString(1)).toBe(undefined);
      expect(reverseString(undefined)).toBe(undefined);
      expect(reverseString(null)).toBe(undefined);
      expect(reverseString(() => {})).toBe(undefined);
   });
});