import React from 'react'
import img from "../public/asset.jpeg";
import Image from 'next/image';
const Mint = () => {
  return (
    <>
      <div className="grid grid-cols-4">
      <div className="bg-dk-bluish   p-4 m-4 md:p-8 md:m-8 rounded-lg ">
        <div className="imgWrapper ">
            <style jsx>
                {
                    `
                        .imgWrapper{
                            box-shadow: 9.899px 9.899px 30px 0 rgb(0 0 0 / 10%);
                            transition:all .4s ease;
                        }
                        .imgWrapper:hover{
                            opacity:0.5;
                            transform: scale(1.05) rotate(2deg);
                        }
                    `
                }
            </style>

        <Image src = {img} alt="mig" />
        </div>
        <h2 className="text-white md:text-2xl font-bold font-fontDM text-center pt-4">Lamborghini</h2>
        </div>
      </div>
       
    
    </>
  )
}

export default Mint