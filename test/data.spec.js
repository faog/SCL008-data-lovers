global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('data', ()=> {
  it('debería ser un objeto', () => {
    assert.equal(typeof data, 'object');
  });

  describe('data.filterData', () => {

    const data = [
      {
        num: "001", name: 'Bulbasaur',type: "Poison",
        candy_count: "25", egg: "2 km", weaknesses:"Fire"
  
      },
      {
        num: "005", name: 'Charmeleon', type: "Fire",
        candy_count: 100, egg: "Not in Eggs", weaknesses: "Water"
      }
    ]
  
    it('debería ser una función', () => {
      assert.equal(typeof window.filterData, 'function');
    });

    it('debería retornar el objeto Bulbasaur al filtrar', () => {
      assert.deepEqual(window.filterData(data, 'Grass'), [{num: "001", name: 'Bulbasaur', type: "Grass", candy_count: "25", 
      egg: "2 km",weaknesses: "Fire"}])
    })
  
  })

})


