/* Manejo de data */
window.data = {
  filterData: (data, condition) =>{
    let filterData = data.filter(condition);
    return filterData;   
    
  },
  sortData:(data, sortBy, sortOrder) =>{
    let sortedData;
    //Condición si el usuario quiere ordenar por peso o altura
    if (sortBy==='weight' || sortBy==='height'){
      sortedData = data.sort((a,b) =>{
        //split= extrae la información que se encuentra antes del espacio (string), guardandola en una variable
        let aSplit=a[sortBy].split(" ");
        let bSplit=b[sortBy].split(" ");
        //Los string debo transformarlos a numero, usando parseFloat
        return parseFloat(aSplit[0])-parseFloat(bSplit[0]);
      });
      //Condición si el usuario quiere ordenar por nombre y numero
    }else{      
      sortedData = data.sort((a,b) =>{
        return a[sortBy].localeCompare(b[sortBy]);
      });
    }
    
    if (sortOrder === "desc"){
      sortedData.reverse();
    }
    return sortedData;
  }/*,
  computeStats:(data) =>{

  }*/
};

