/* Manejo de data */
window.data = {
  filterData: (data, condition) =>{
    let filterType = data.filter(element => {
      return element.type.includes(condition);      
    })
    return filterType;      

    let filterCandy = data.filter(element => {
      return element.candy_count===condition;      
    })
    return filterCandy;   
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
