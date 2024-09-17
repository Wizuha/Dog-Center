import React, { createContext } from 'react'

const SearchContext = createContext();


export const MyProvider = ({ children }) => {

    const contextValue = {};

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

export default { SearchContext }
