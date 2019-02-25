/* Manejo de data */
window.data = {
  filterData: (data, condition) =>{
    let typeFilter = data.typeFilter(element => {
      return element.type ===condition;
    })
    return typeFilter;
  }/*,
  sortData:(data, sortBy, sortOrder) =>{

  },
  computeStats:(data) =>{

  }*/
};
