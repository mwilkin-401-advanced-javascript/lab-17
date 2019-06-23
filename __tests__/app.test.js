'use strict';

const app = require('../app.js');

// jest.mock('fs');

describe('convertCase', () => {
  it('should convert a string to uppercase', () => {
    let string = 'test string';
    let convertedString = app.convertCase(string);
    expect(convertedString).toEqual('TEST STRING');
  });

  it('dummy test', () => {
    expect(1).toEqual(1);
  });
});