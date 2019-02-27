/* Manejo de data */
window.data = {
  filterData: (data, condition) =>{
    let filterData = data.filter(condition);
    return filterData;   
    
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

