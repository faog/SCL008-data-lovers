/* Manejo de data */
window.data = {
  filterData: (data, condition) =>{
    let filterType = data.filter(element => {
      return element.type.includes(condition);      
    })
    return filterType; 

    /*if (condition===data.condition){
      let filterType = data.filter(element => {
        return element.type.includes(condition);      
      })
      return filterType; 

    }else if(condition==='weaknesses'){
      let filterWeakness = data.filter(element => {
        return element.weaknesses.includes(condition);      
      })
      return filterWeakness; 
    }
        
    let filterCandy = data.filter(element => {
      return element.candy_count===condition;      
    })
    return filterCandy; */
  },
  sortData:(data, sortBy, sortOrder) =>{
    let sortedData = data.sort((a,b) =>{
      return a[sortBy].localeCompare(b[sortBy]);
    });
    if (sortOrder === "desc"){
      sortedData.reverse();
    }
    return sortedData;
  }/*,
  computeStats:(data) =>{

  }*/
};

window.filterData = filterData;