//const { default: test } = require('node:test');
const operations = require('../app/app');


test('add two or more numbers', () => {
   const result = operations.add( 1, 2 ); 
   expect(result).toBe(4);
});