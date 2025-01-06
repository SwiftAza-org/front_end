import React, { createContext, useState } from "react";

export const PinContext = createContext();

export const PinProvider = ({ children }) => {
    const [pin, setPin] = useState("");
    const [walletDetails, setWalletDetails] = useState(null);

    return (
        <PinContext.Provider value={{ pin, setPin, walletDetails, setWalletDetails }}>
            {children}
        </PinContext.Provider>
    );
};
