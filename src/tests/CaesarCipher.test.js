const caesarCipher = require('./../CaesarCipher.js');

describe('Caesar Cipher', () => {
   test('caesarCipher is defined', () => {
      expect(typeof caesarCipher).toBe('function');
   });

   test('Single letter', () => {
      expect(caesarCipher('a', 1)).toBe('b');
      expect(caesarCipher('a', 26)).toBe('a');
      expect(caesarCipher('a', 25)).toBe('z');

      expect(caesarCipher('a', -1)).toBe('z');
      expect(caesarCipher('a', -15)).toBe('l');
      expect(caesarCipher('A', -1)).toBe('Z');
      expect(caesarCipher('A', -15)).toBe('L');

      expect(caesarCipher('A', 1)).toBe('B');
      expect(caesarCipher('A', 26)).toBe('A');
      expect(caesarCipher('A', 25)).toBe('Z');
   });

   test('Words', () => {
      expect(caesarCipher('Bussy', 5)).toBe('Gzxxd');
      expect(caesarCipher('Friend', 10)).toBe('Pbsoxn');
   });

   test('Numbers', () => {
      expect(caesarCipher('123', 15)).toBe('123');
      expect(caesarCipher(123, 15)).toBe(undefined);
   });
});