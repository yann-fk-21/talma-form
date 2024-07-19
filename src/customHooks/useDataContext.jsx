import { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }

  return context;
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});

  return (
    <DataContext.Provider value={{ data, setData, data1,
      setData1}}>
      {children}
    </DataContext.Provider>
  );
};