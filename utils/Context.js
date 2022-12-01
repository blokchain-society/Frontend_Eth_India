import React, { createContext, useEffect,useState } from 'react'
import { getWeb3 } from './web3';
export const DataContext= createContext();
const ContextProvider = ({children}) => {
    const [isConnect,setIsConnect]=useState(false);
    const [currentAccount,setCurrentAccount]=useState(undefined);


    const walletConnection=async()=>{
        setIsConnect(true);
        try {
            let web3 = await getWeb3();
            let accs= await web3.eth.getAccounts();
            console.log(accs);
            setCurrentAccount(accs[0]);
            setIsConnect(false);
        } catch (error) {
            console.log(error);
            setIsConnect(false);

        }
    }

    useEffect(()=>{
        walletConnection();
    },[])
  return (
    <DataContext.Provider value={{}}>
        {children}
    </DataContext.Provider>
  )
}

export default ContextProvider