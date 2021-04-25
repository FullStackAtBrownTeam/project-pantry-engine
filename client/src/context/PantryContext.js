import React, { createContext, useContext, useMemo, useState } from 'react'


const PantryContext = createContext()

export const PantryContextProvider = ( {children} ) => {

  const [pantry, setPantry] = useState([])

  const routes = useMemo(() => {
    return { pantry, setPantry }
  }, [pantry, setPantry])

  return <PantryContext.Provider value={routes} > {children} </PantryContext.Provider>
}

export const usePantryContext = () => useContext(PantryContext)