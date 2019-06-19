'use strict';

const app = require('../app.js');
const server = require('../server.js');

describe('convertCase', () => {
  it('should convert a string to uppercase', () => {
    let string = 'test string';
    let convertedString = app.convertCase(string);
    expect(convertedString).toEqual('TEST STRING');
  });
});