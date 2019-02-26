/* Manejo de data */
window.data = {
  filterData: (data, condition) =>{
    let typeFilter = data.filter(element => {
      return element.type.includes(condition);
    })
    return typeFilter;
  }/*,
  sortData:(data, sortBy, sortOrder) =>{

  },
  computeStats:(data) =>{

  }*/
};
