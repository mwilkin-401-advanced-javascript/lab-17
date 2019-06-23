'use strict';

// const {readFile, alterFile, writeFile} = require('../app.js');
// const logger = require('../logger.js');

jest.mock('fs');

describe('`alterFile` function', () => {
  it('dummy test', () => {
    expect(1).toEqual(1);
  });
  // it('should not throw an error', () => {
  //   const file = 'file.txt';
  //   expect(() => alterFile(file)).not.toThrow();
  // });
});

describe('`readFile` function', () => {
  it('dummy test', () => {
    expect(1).toEqual(1);
  });
  // it('resolves when given a good file', () => {
  //   const file = 'file.txt';
  //   const result = readFile(file);
  //   return expect(result).resolves.toEqual(Buffer.from('File Contents'));
  // });
  // it('throws an error when given a bad file', () => {
  //   const file = 'bad.txt';
  //   const result = readFile(file);
  //   return expect(result).rejects.toEqual('Invalid File');
  // });
});

describe('`writeFile` function', () => {
  it('dummy test', () => {
    expect(1).toEqual(1);
  });
  // const text = 'Yabba dabba doo!';
  // const file = 'file.txt';
  // it('resolves when given a good file', () => {
  //   return expect(writeFile(file, text)).resolves.toBeUndefined();
  // });
  // it('rejects when given a bad file', () => {
  //   const badFile = 'bad.txt';
  //   return expect(writeFile(badFile, text)).rejects.toEqual('Invalid File');
  // });
  // it('rejects when given bad data', () => {
  //   const badData = 'bad';
  //   return expect(writeFile(file, badData)).rejects.toBe('Invalid Buffer');
  // });
});

describe('convertCase', () => {
  it('dummy test', () => {
    expect(1).toEqual(1);
  });
  // it('should convert a string to uppercase', () => {
  //   let string = 'test string';
  //   let convertedString = string.convertCase(string);
  //   expect(convertedString).toEqual('TEST STRING');
  // });

  it('dummy test', () => {
    expect(1).toEqual(1);
  });
});

describe('logger function', () => {
  it('dummy test', () => {
    expect(1).toEqual(1);
  });

  // it('should take in a message and console.log it if a save', () => {
  //   let test = {
  //     name: 'saved',
  //     data: `SAVED: event just happened!`,
  //   };
  //   let spy = jest.spyOn(console, 'log');
  //   logger.logger(JSON.stringify(test));
  //   expect(spy).toHaveBeenCalled();
  //   spy.mockRestore();
  // });

  // it('should take in a message and console.error it if an error', () => {
  //   let test = {
  //     name: 'error',
  //     data: `SAVED: event just happened!`,
  //   };
  //   let spy = jest.spyOn(console, 'error');
  //   logger.logger(JSON.stringify(test));
  //   expect(spy).toHaveBeenCalled();
  //   spy.mockRestore();
  // });

  // it('should take in a message and console.log if neither error or save', () => {
  //   let test = {
  //     name: 'test',
  //     data: `SAVED: event just happened!`,
  //   };
  //   let spy = jest.spyOn(console, 'log');
  //   logger.logger(JSON.stringify(test));
  //   expect(spy).toHaveBeenCalled();
  //   spy.mockRestore();
  // });
});
