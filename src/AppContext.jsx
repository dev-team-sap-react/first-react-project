import { createContext, useState } from "react";
import ComputeSum from "./services/ComputeSum";
import FilteredArray from "./services/FilteredArray";

export const AppContext = createContext();



export const AppProvider = ({ children }) => {

    const [processedData, setProcessedData] = useState([]);
   // const [filteredArray, setFilteredArray] = useState([]);
   //const [totalSum, setTotalSum] = useState([]);

   // const calculatedData = data => {
    //  data.filter((item) => item.Table.startsWith(filter));
   // }



  //setTotalSum(totalSumData);


  
    return (
      <AppContext.Provider
        value={{
          processedData,
          ComputeSum,
          FilteredArray,
          setProcessedData
        }} >
        {children}
      </AppContext.Provider>
    );
};