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
        num: "001", name: 'Bulbasaur',type: "Grass",
        candy_count: "25", egg: "2 km", weaknesses:"Fire"
  
      },
      {
        num: "005", name: 'Charmeleon', type: "Fire",
        candy_count: 100, egg: "Not in Eggs", weaknesses: "Water"
      }
    ]
  
    it('debería ser una función', () => {
      assert.equal(typeof window.data.filterData, 'function');
    });
    /*Test 1 filtro por tipo*/
    it('debería retornar el objeto Bulbasaur al filtrar por tipo Grass', () => {
      assert.deepEqual(window.data.filterData(data, (element)=>{
        return element.type.includes("Grass");
      }),
      [{num: "001", name: 'Bulbasaur', type: "Grass", candy_count: "25", 
      egg: "2 km",weaknesses: "Fire"}])
    })

    /*Test 2 filtro por tipo*/
    it('debería retornar el objeto Charmeleon al filtrar por tipo Fire', () => {
      assert.deepEqual(window.data.filterData(data, (element)=>{
        return element.type.includes("Fire");
      }),
      [{ num: "005", name: 'Charmeleon', type: "Fire",
      candy_count: 100, egg: "Not in Eggs", weaknesses: "Water"}])
    })

    /*Test 3 filtro por debilidad*/
    it('debería retornar el objeto Bulbasaur al filtrar por debilidad Fire', () => {
      assert.deepEqual(window.data.filterData(data, (element)=>{
        return element.weaknesses.includes('Fire');
      }),
      [{num: "001", name: 'Bulbasaur',type: "Grass",
        candy_count: "25", egg: "2 km", weaknesses:"Fire"}])
    }) 

    it('debería retornar el objeto Charmeleon al filtrar por debilidad Water', () => {
      assert.deepEqual(window.data.filterData(data, (element)=>{
        return element.weaknesses.includes('Water');
      }),
      [{num: "005", name: 'Charmeleon', type: "Fire",
        candy_count: 100, egg: "Not in Eggs", weaknesses: "Water"}])
    })
  
  })

})


