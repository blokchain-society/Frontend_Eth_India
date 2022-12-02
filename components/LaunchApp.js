import React,{useState,useContext} from 'react'
import GlowingBtn from "../utils/glowingBtn";
import { DataContext } from "../utils/Context";
const LaunchApp = () => {
   
    const {walletConnection,currentAccount} = useContext(DataContext);
  return (
    <><nav className="bg-dk-bluish h-20 flex flex-row items-center px-8 justify-between "><div className="lg:flex lg:flex-row lg:justify-between ">
    

    <ul className="hidden font-header lg:flex lg:flex-row lg:px-8 mt-3 ">
    <li className="pl-2 cursor-pointer mx-2 ">Rent</li>
        <li className="pl-2 cursor-pointer mx-2 ">Lend</li>
        <li className="pl-2 cursor-pointer mx-2 ">Dashboard</li> 
    </ul>
    </div>
    {currentAccount ? <GlowingBtn btnName={currentAccount}/>:<GlowingBtn btnName="Connect Wallet" onClick={walletConnection} />}
    </nav></>
  )
}

export default LaunchApp