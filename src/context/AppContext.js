import React, { useState } from 'react';

const AppContext = React.createContext({});

export function AppContextProvider({ children }) {

  const [amountValue, setAmountValue] = useState(5000)
  const [termValue, setTermValue] = useState(3)
  const [feeValue, setFeeValue] = useState((5000 / 3).toFixed(2))

  const state = {
    amountValue, setAmountValue,
    termValue, setTermValue,
    feeValue, setFeeValue,
  };

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;