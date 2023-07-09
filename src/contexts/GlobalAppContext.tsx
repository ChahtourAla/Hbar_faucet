import { createContext, ReactNode } from "react";

const defaultValue = {}

export const GlobalAppContext = createContext(defaultValue)

export const GlobalAppContextProvider = (props: { children: ReactNode | undefined }) => {
  return (
    <GlobalAppContext.Provider
      value={{}}
    >
      {props.children}
    </GlobalAppContext.Provider>
  )
}
