//const { default: test } = require('node:test');
const operations = require('../app/app');


test('add two or more numbers', () => {
   const result = operations.add( [ 1, 2 ] ); 
   expect(result).toBe(3);

});
describe( 'when adding two or more numbers', () => {
   const result = operations.add; 
   test(' if I receive two or more parameters ', () => {
      expect(result( [ 1, 2, 3, 9 ] )).toBe(15); 
   });
   test(' if I receive a single parameter ', () => {
      expect(result( [ 1 ] )).toBe(1); 
   });
   test(' if I receive cero parameters ', () => {
      expect(result( [] )).toBe(0); 
   });
   test(' if I receive nan parameter ', () => {
      expect(result( [NaN] )).toBe(NaN); 
   });
   test(' if I receive Null parameter ', () => {
      expect(result( [null] )).toBe(0); 
   });

});

describe(' when subtract two or more numbers ', () => {
   const result = operations.subtract;
   test(' if I receive two or more parameters ', () => {
      expect(result( [ 1, 2, 3, 9 ] )).toBe(-15); 
   });
   test(' if I receive a single parameter ', () => {
      expect(result( [ 2 ] )).toBe(2); 
   });
   test(' if I receive cero parameters ', () => {
      expect(result( [] )).toBe(0); 
   });
   test(' if I receive nan parameter ', () => {
      expect(result( [NaN] )).toBe(NaN); 
   });
   test(' if I receive Null parameter ', () => {
      expect(result( [null] )).toBe(0); 
   });
})