//const { default: test } = require('node:test');
const operations = require('../app/app');


test('add two or more numbers', () => {
   const result = operations.add( 1, 2 ); 
   expect(result).toBe(3);

});
describe( 'when adding two or more numbers', () => {
   const result = operations.add; 
   test(' if I receive a single parameter ', () => {
      expect(result( 1, 5 )).toBe(6); 
   });
   test(' if I receive a null parameter ', () => {
      expect(result( 0, 0 )).toBe(0); 
   });
});

describe(' when subtract two or more numbers ', () => {
   const result = operations.subtract;
   test( ' if recibe a single parameter ', () => {
      expect(result( 0, NaN )).toBeNull();
   });

   test( ' if recibe Null parameters', () => {
      expect(result( null, null )).toBeNull();
   });
})