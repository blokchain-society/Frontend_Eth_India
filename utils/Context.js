import React, { createContext, useEffect,useState } from 'react'
import { getWeb3 } from './web3';
import {Revise} from 'revise-sdk';
// import { toast } from 'react-toastify';
import axios from 'axios';
export const DataContext= createContext();
const ContextProvider = ({children}) => {
    

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZTkyNmUwLTA0MTgtNGFmYi05Yjg1LTVkODVlZDUxYTljMCIsImtleSI6InhoMG1mODRtIiwiaWF0IjoxNjcwMDU2NjI0fQ.H67LRci5ra0JjalrKI0UMb94EGOoSY308x1xNkNw33w";

const revise = new Revise({auth: AUTH_TOKEN});
    // const addCollection=async(collectionName,collectionURI)=>{
    //     try {
    //         let res= await revise.addCollection(collectionName,collectionURI);
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
  const mintNft = async()=>{
    try {
        const tokenData ={
            "name": "Lamborghini",
            "image": "string",
            "tokenId": "37781973573605582095880511607555594450371183149967330698384866539359313068033",
            "description?": "Rare and Royal .... Just for testing purpose of Metaborrow"
          };
          const properties=[{fuel:50},{game:"gta 5"}]
        const newNFT = await revise.addNFT(tokenData, properties);
        
    } catch (error) {
        console.log(error)
    }

  }

  const getchSingleNft=async ()=>{
    try {
        const nft = await revise.fetchNFT('fc451d76-20de-48e6-8300-c793ade33430');
        console.log(nft)
    } catch (error) {
        console.log(error)
    }
  }
  const getAllNftsByCollectionId=async ()=>{
    try {
        let nfts = await revise.fetchNFTs('collection-id');
        console.log(nfts)
    } catch (error) {
        console.log(error)
    }
  }
  const setName=async(nftId,_name)=>{
    try {
        
        let res = await (await revise.updateNFT(nftId)).setName(_name).save();
        console.log(res);

    } catch (error) {
        console.log(error)
    }
  }

  const setDesc=async(nftId,_desc)=>{
    try {
        
        let res = await (await revise.updateNFT(nftId)).setDescription(_desc).save();
        console.log(res);

    } catch (error) {
        console.log(error)
    }
  }

  const setImage=async(nftId,_imgUrl)=>{
    try {
        
        let res = await (await revise.updateNFT(nftId)).setImage(_imgUrl).save();
        console.log(res);

    } catch (error) {
        console.log(error)
    }
  }
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
        // getchSingleNft();
        // getAllNftsByCollectionId();
        // addCollection("GTA-5","https://testnets.opensea.io/collection/metaborrow");
    },[])
   
  return (
    <DataContext.Provider value={{walletConnection,currentAccount,isConnect}}>
        {children}
    </DataContext.Provider>
  )
}

export default ContextProvider