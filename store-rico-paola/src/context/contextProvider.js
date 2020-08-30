import React, { useState } from "react";

export const AppContext = React.createContext();

const initial = {
  name : '',
  points: 0

}

export default function AppProvider({ children }) {
  const [user, setUser] = useState(initial);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}