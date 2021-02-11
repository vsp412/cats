// asyncBreedsTest.js
const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
  it('provides, via callback, breed details for the Bombay breed', (done) => {


    const breed = 'Bombay';
    breedDetailsFromFile(breed, (content) => {
    const expectedOp = 'breed is indonesian bali cat. good for cat meat. fat cat meat. dark meat. yummy meat.';
    assert.equal(content, expectedOp);
    done();

    });

  });


  it('provides, via callback, undefined for a breed that does not exist', (done) => {
    breedDetailsFromFile('Saphire', (desc) => {
      assert.equal(undefined, desc);
      done(); 
    });      
  });
});


// const assert = require('chai').assert;
// const breedDetailsFromFile = require('../asyncBreeds');

// describe('#breedDetailsFromFile', () => {
//   it('provides, via callback, breed details for the Bombay breed', (done) => {
//     breedDetailsFromFile('Bombay', (bombay) => {
//       const expectedDesc = "breed is indonesian bali cat. good for cat meat. fat cat meat. dark meat. yummy meat.";
//       assert.equal(expectedDesc, bombay);
//       done(); 
//     });      
//   });
// });