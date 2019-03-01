global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('data', ()=> {
  it('debería ser un objeto', () => {
    assert.equal(typeof data, 'object');
  });

  describe('data.filterData', () => {

    const dataFilter = [
      {
        num: "001", name: 'Bulbasaur',type: "Grass",
        candy_count: "25", egg: "2 km", weaknesses:"Fire"
  
      },
      {
        num: "005", name: 'Charmeleon', type: "Fire",
        candy_count: 100, egg: "Not in Eggs", weaknesses: "Water"
      },
      {
        num: "009", name: 'Blastoise', type: "Water",
        egg: "Not in Eggs", weaknesses: "Electric"
      }


    ]
  
    it('debería ser una función', () => {
      assert.equal(typeof window.data.filterData, 'function');
    });

    /*Test 1 filtro por tipo*/
    it('debería retornar el objeto Bulbasaur al filtrar por tipo Grass', () => {
      assert.deepEqual(window.data.filterData(dataFilter, (element)=>{
        return element.type.includes("Grass");
      }),
      [{num: "001", name: 'Bulbasaur', type: "Grass", candy_count: "25", 
      egg: "2 km",weaknesses: "Fire"}])
    })

    /*Test 2 filtro por tipo*/
    it('debería retornar el objeto Charmeleon al filtrar por tipo Fire', () => {
      assert.deepEqual(window.data.filterData(dataFilter, (element)=>{
        return element.type.includes("Fire");
      }),
      [{ num: "005", name: 'Charmeleon', type: "Fire",
      candy_count: 100, egg: "Not in Eggs", weaknesses: "Water"}])
    })

    /*Test 3 filtro por debilidad*/
    it('debería retornar el objeto Bulbasaur al filtrar por debilidad Fire', () => {
      assert.deepEqual(window.data.filterData(dataFilter, (element)=>{
        return element.weaknesses.includes('Fire');
      }),
      [{num: "001", name: 'Bulbasaur',type: "Grass",
        candy_count: "25", egg: "2 km", weaknesses:"Fire"}])
    }) 
    /*Test 4 filtro por debilidad*/
    it('debería retornar el objeto Charmeleon al filtrar por debilidad Water', () => {
      assert.deepEqual(window.data.filterData(dataFilter, (element)=>{
        return element.weaknesses.includes('Water');
      }),
      [{num: "005", name: 'Charmeleon', type: "Fire",
        candy_count: 100, egg: "Not in Eggs", weaknesses: "Water"}])
    })
    /*Test 5 filtro por cantidad de candys*/
    it('debería retornar el objeto Bulbasaur al filtrar por 25 candys', () => {
      assert.deepEqual(window.data.filterData(dataFilter, (element)=>{
        return element.candy_count===('25');
      }),
      [{num: "001", name: 'Bulbasaur',type: "Grass",
        candy_count: "25", egg: "2 km", weaknesses:"Fire"}])
    }) 

    /*Test 6 filtro por cantidad de candys*/
    it('debería retornar el objeto Charmeleon al filtrar por undefined', () => {
      assert.deepEqual(window.data.filterData(dataFilter, (element)=>{
        return element.candy_count===undefined;
      }),
      [{num: "009", name: 'Blastoise', type: "Water",
      egg: "Not in Eggs", weaknesses: "Electric"}])
    })  
    
    /*Test 7 filtro por distancia en km para conseguir huevos*/
    it('debería retornar el objeto Bulbasaur al filtrar por 2 km', () => {
      assert.deepEqual(window.data.filterData(dataFilter, (element)=> {
        return element.egg===('2 km');
      }),
      [{num: "001", name: 'Bulbasaur',type: "Grass",
        candy_count: "25", egg: "2 km", weaknesses:"Fire"}])
    })

    /*Test 8 filtro por distancia en km para conseguir huevos*/
    it ('debería retornar los objetos Charmeleon y Blastoise al filtrar por Not in Eggs', () => {
      assert.deepEqual(window.data.filterData(dataFilter, (element)=> {
        return element.egg===('Not in Eggs');
      }),
      [{num: "005", name: 'Charmeleon', type: "Fire",
      candy_count: 100, egg: "Not in Eggs", weaknesses: "Water"},
      {num: "009", name: 'Blastoise', type: "Water",
      egg: "Not in Eggs", weaknesses: "Electric"}]
      )
    })
  }),
  
  describe ('data.sortData',()=>{
    
    const dataSort = [
      {
        num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg" 
      },
      {
        num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"   
      },
      {
        num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"  
      },
    ]

    it('debería ser una función', () => {
      assert.equal(typeof window.data.sortData, 'function');
    });

    /*Test 9 Ordenar nombres A-Z*/
    it('debería retornar los objetos Oddish, Wartortle y Fearow ordenados como  Fearow, Oddish y Wartortle', () => {
      assert.deepEqual(window.data.sortData(dataSort, 'name', ('asc')),
        [{num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"},
        {num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg"},
        {num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"}]         
      )
    })

    /*Test 10 Ordenar nombres Z-A*/
    it('debería retornar los objetos Oddish, Wartortle y Fearow  ordenados como Wartortle, Oddish y Fearow', () => {
      assert.deepEqual(window.data.sortData(dataSort, 'name', ('desc')),
        [{num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"},
        {num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg"},
        {num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"}]         
      )
    })

    /*Test 11 Ordenar por número de menor a mayor*/
    it('debería retornar los objetos Oddish, Wartortle y Fearow ordenados como Wartortle, Fearow, Oddish', () => {
      assert.deepEqual(window.data.sortData(dataSort, 'num', ('asc')),
        [{num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"},
        {num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"},
        {num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg"}]
      )
    })

    /*Test 12 Ordenar por número de mayor a menor*/
    it('debería retornar los objetos Oddish, Wartortle y Fearow ordenados como Oddish, Fearow, Wartortle', () => {
      assert.deepEqual(window.data.sortData(dataSort, 'num', ('desc')),
        [{num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg"},
        {num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"},
        {num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"}]
      )
    })

    /*Test 13 Ordenar por altura de menor a mayor*/
    it('debería retornar los objetos Oddish, Wartortle y Fearow ordenados como Oddish, Wartortle y Fearow', () => {
      assert.deepEqual(window.data.sortData(dataSort, 'height', ('asc')),
        [{num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg"},
        {num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"},
        {num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"}]
      )
    })


    /*Test 14 Orenar por altura de mayor a menor*/
    it('debería retornar los objetos Oddish, Wartortle y Fearow ordenados como Fearow, Wartortle y Oddish', () => {
      assert.deepEqual(window.data.sortData(dataSort, 'height', ('desc')),
        [{num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"},
        {num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"},
        {num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg"}]
      )
    })


    /*Test 15 Ordenar por peso de menor a mayor*/
    it('debería retornar los objetos Oddish, Wartortle y Fearow ordenados como Oddish, Wartortle y Fearow', () => {
      assert.deepEqual(window.data.sortData(dataSort, 'weight', ('asc')),
        [{num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg"},
        {num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"},
        {num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"}]
      )
    })

    /*Test 16 Ordenar por peso de mayor a menor*/
    it('debería retornar los objetos Oddish, Wartortle y Fearow ordenados como Fearow, Wartortle y Oddish', () => {
      assert.deepEqual(window.data.sortData(dataSort, 'weight', ('desc')),
        [{num: "022", name: 'Fearow', height: "1.19 m",weight: "38.0 kg"},        
        {num: "008", name: 'Wartortle', height: "0.99 m",weight: "22.5 kg"},
        {num: "043", name: 'Oddish', height: "0.51 m",weight: "5.4 kg"}]
      )
    })

    
    
     
  })

})