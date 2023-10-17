import { createContext, useState } from "react";

export const AppContext = createContext();



export const AppProvider = ({ children }) => {

    const [processedData, setProcessedData] = useState([]);
  

  
    return (
      <AppContext.Provider
        value={{
          processedData,
          setProcessedData
        }} >
        {children}
      </AppContext.Provider>
    );
};