// MyContext.js
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [gender, setGender] = useState('');
    const [DOB, setDOB] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [country, setCountry] = useState('');
    const [postCode, setPostCode] = useState('');
    const [address, setAddress] = useState('');

  return (
    <MyContext.Provider
      value={{
        fName,
        setFName,
        lName,
        setLName,
        gender,
        setGender,
        DOB,
        setDOB,
        cardNum,
        setCardNum,
        country,
        setCountry,
        postCode,
        setPostCode,
        address,
        setAddress
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
