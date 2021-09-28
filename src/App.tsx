import React, { useEffect, useState } from 'react';
import { Button, Typography, TextField } from "@mui/material";
import { ethers } from "ethers";
import TestTokenArtifacts from "artifacts/contracts/TestToken.sol/TestToken.json";
import { Content, Section, Right } from './styles';
import { DEPLOY_ADDRESS } from "utils";

declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider;
  }
}
function App() {
  const [mintStatus, setMintStatus] = useState(false); // Status to set sales permission
  const [testTokenName, setTestTokenName] = useState(""); // Test Token's Name
  const [testTokenSymbol, setTestTokenSymbol] = useState(""); // Test Token's Symbol
  const [swapRate, setSwapRate] = useState(0);
  const [currentTestBalance, setCurrentTestBalance] = useState(0); // Current Test Token's Balance
  const [currentEtherBalance, setCurrentEtherBalance] = useState(0); // Current Ether's Balance
  const [buyAmount, setBuyAmount] = useState(0); // Amount of tokens to buy
  const [receiveAddress, setReceiveAddress] = useState("0xdD2FD4581271e230360230F9337D5c0430Bf44C0"); // Address to send tokens
  const [receiveAmount, setReceiveAmount] = useState(0); // Amount of tokens to send

  // function for connect to Metamask
  const requestAccount = async () => {
    if (window.ethereum?.request)
      return window.ethereum.request({ method: "eth_requestAccounts" });

    throw new Error(
      "Missing install Metamask. Please access https://metamask.io/ to install extension on your browser"
    );
  }

  // function for change the mint permission
  const onChangeMintStatus = () => {
    setMintStatus(!mintStatus);
  };

  // function for buy tokens
  const onBuyTokens = async () => {
    let ether_amount = buyAmount / swapRate;
    if (ether_amount >= currentEtherBalance) {
      alert("Not enough Ether in your wallet!");
    } else {
      const [account] = await requestAccount();
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(DEPLOY_ADDRESS, TestTokenArtifacts.abi, provider);
        try {
          const success: boolean = await contract.swap(account, buyAmount);
          console.log(success);
        } catch (err) {
          console.log(`Error: ${err}`);
        }
      }
    }
  };

  // function for send tokens
  const onSendTokens = async () => {
    let ether_amount = buyAmount;
    if (ether_amount >= currentEtherBalance) {
      alert("Not enough Ether in your wallet!");
    } else {
      const [account] = await requestAccount();
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(DEPLOY_ADDRESS, TestTokenArtifacts.abi, provider);
        try {
          const success: boolean = await contract.swap(account, buyAmount);
          console.log(success);
        } catch (err) {
          console.log(`Error: ${err}`);
        }
      }
    }
  };

  // function for get current status
  useEffect(() => {
    const fetchData = async () => {
      const [account] = await requestAccount();
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setCurrentEtherBalance(Number(ethers.utils.formatEther(balance)));
        const contract = new ethers.Contract(DEPLOY_ADDRESS, TestTokenArtifacts.abi, provider);
        try {
          setTestTokenName(await contract.name());
          setTestTokenSymbol(await contract.symbol());
          setCurrentTestBalance(Number(await contract.balanceOf(account)));
          setSwapRate(Number(await contract.swapRate()));
        } catch (err) {
          console.log(`Error: ${err}`);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <Content>
      <Section>
        <Typography>Sales Permission: {mintStatus ? "True" : "False"}</Typography>
      </Section>
      <Right>
        <Button
          variant="contained"
          disableElevation
          onClick={onChangeMintStatus}
        >
          {mintStatus ? "Stop Sale" : "Start Sale"}
        </Button>
      </Right>
      
      <Section>
        <Typography>Current {testTokenName}'s Balance:</Typography>
        <Typography>{currentTestBalance} {testTokenSymbol}</Typography>
      </Section>

      <Section>
        <Typography>Current Ether's Balance:</Typography>
        <Typography>{currentEtherBalance} ETH</Typography>
      </Section>

      <Section>
        <Typography>Buy Tokens: </Typography>
        <TextField
          id="standard-basic"
          type="number"
          label="Token's Amount"
          variant="standard"
          value={buyAmount}
          onChange={(e) => setBuyAmount(+e.target.value)}
        />
      </Section>
      <Right>
        <Button
          variant="contained"
          disableElevation
          onClick={onBuyTokens}
        >
          Buy Tokens ({Number(buyAmount / swapRate)} ETH)
        </Button>
      </Right>

      <Section>
        <Typography>Receive Address: </Typography>
        <TextField
          id="standard-basic"
          label="Receive Address"
          variant="standard"
          value={receiveAddress}
          onChange={(e) => setReceiveAddress(e.target.value)}
        />
      </Section>

      <Section>
        <Typography>Receive Amount: </Typography>
        <TextField
          id="standard-basic"
          type="number"
          label="Receive Amount"
          variant="standard"
          value={receiveAmount}
          onChange={(e) => setReceiveAmount(+e.target.value)}
        />
      </Section>
      <Right>
        <Button
          variant="contained"
          disableElevation
          onClick={onSendTokens}
        >
          Send Tokens
        </Button>
      </Right>
    </Content>
  );
}

export default App;
