import { createContext, useContext, useState } from "react";

const AddressContext = createContext(null);

const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState("https://aegistube.vercel.app");

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export { AddressProvider, useAddress };
