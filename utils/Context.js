import React, { createContext, useEffect, useState } from 'react'
import { getWeb3 } from './web3';
import { Revise } from 'revise-sdk';
// import { toast } from 'react-toastify';
import axios from 'axios';
export const DataContext = createContext();
const ContextProvider = ({ children }) => {

    const [isConnect, setIsConnect] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");

    const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmZWQzNjc0LTZjMmUtNGJiYi1iYWU0LWMxMTU3MWMwMmVmZSIsImtleSI6ImdoaDVvNndwIiwiaWF0IjoxNjcwMTAyNzEwfQ.TpJ549CYxjxcEo7UOxq1AZk7fkUoxHG2oa5DRhVjo-U";

    const revise = new Revise({ auth: AUTH_TOKEN });
    // const addCollection=async(collectionName,collectionURI)=>{
    //     try {
    //         let res= await revise.addCollection(collectionName,collectionURI);
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const mintNft = async (_name, _image, _tokenId, _desc, props) => {
        try {
            const tokenData = {
                "name": _name,
                "image": _image,
                "tokenId": _tokenId,
                "description?": _desc
            };
            const properties = props;
            console.log(tokenData);
            console.log(properties);
            const newNFT = await revise.addNFT(tokenData, properties);
            console.log(newNFT);
        } catch (error) {
            console.log(error)
        }

    }

    const getchSingleNft = async () => {
        try {
            const nft = await revise.fetchNFT('fc451d76-20de-48e6-8300-c793ade33430');
            console.log(nft)
        } catch (error) {
            console.log(error)
        }
    }
    const getAllNftsByCollectionId = async () => {
        try {
            let nfts = await revise.fetchNFTs();
            console.log("nfts",nfts)
        } catch (error) {
            console.log(error)
        }
    }
    const setProperties= async (nftId="",prop="")=>{
        try {
            let res = await (await revise.updateNFT("94c768e1-2356-487a-9899-bc4456921f22")).setProperty('availableMag',"20");
            console.log("res",res)
        } catch (error) {
            console.log(error)
        }
    }
    const setName = async (nftId, _name) => {
        try {

            let res = await (await revise.updateNFT(nftId)).setName(_name).save();
            console.log(res);

        } catch (error) {
            console.log(error)
        }
    }

    const setDesc = async (nftId, _desc) => {
        try {

            let res = await (await revise.updateNFT(nftId)).setDescription(_desc).save();
            console.log(res);

        } catch (error) {
            console.log(error)
        }
    }

    const setImage = async (nftId, _imgUrl) => {
        try {

            let res = await (await revise.updateNFT(nftId)).setImage(_imgUrl).save();
            console.log(res);

        } catch (error) {
            console.log(error)
        }
    }

    const walletConnection = async () => {
        setIsConnect(true);
        try {
            let web3 = await getWeb3();
            let accs = await web3.eth.getAccounts();
            console.log(accs);
            setCurrentAccount(accs[0]);
            setIsConnect(false);
            console.log(currentAccount)
        } catch (error) {
            console.log(error);
            setIsConnect(false);

        }
    }
    useEffect(() => {
        // getchSingleNft();
        getAllNftsByCollectionId();
        // addCollection("GTA-5","https://testnets.opensea.io/collection/metaborrow");
        walletConnection();

    }, [])
    setProperties();
    return (
        <DataContext.Provider value={{
            walletConnection,
            currentAccount,
            isConnect,
            mintNft,
            getchSingleNft,
            getAllNftsByCollectionId,
            setName,
            setDesc,
            setImage
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider