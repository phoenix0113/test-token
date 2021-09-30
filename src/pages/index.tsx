import React, { useState } from "react";
import Navbar from "components/Navbar";
import ERC20Token from "./ERC20Token";
import ERC721Token from "./ERC721Token";
import { HomeWrapper } from "./styles";


export default function Home() {
  const [sample, setSample] = useState("ERC20 Token");
  const changeSample = (item: string) => {
    setSample(item);
  }

  return (
    <HomeWrapper>
      <Navbar
        changeSample={changeSample}
      />
      <>
        {
          (sample === "ERC20 Token") && 
            <ERC20Token />
        }
        {
          (sample === "ERC721 Token") && 
            <ERC721Token />
        }
      </>
    </HomeWrapper>
  );
}