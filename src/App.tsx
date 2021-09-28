import React, { useEffect, useState } from 'react';
import { Button, Typography, TextField } from "@mui/material";
import { Content, Section, Right } from './styles';
import { TOKEN_SYMBOL } from "./utils";

function App() {
  const [mintStatus, setMintStatus] = useState(false); // Status to set sales permission
  const [currentTestBalance, setCurrentTestBalance] = useState(0); // Current Test Token's Balance
  const [currentEtherBalance, setCurrentEtherBalance] = useState(0); // Current Ether's Balance
  const [buyAmount, setBuyAmount] = useState(0); // Amount of tokens to buy
  const [receiveAddress, setReceiveAddress] = useState(""); // Address to send tokens
  const [receiveAmount, setReceiveAmount] = useState(0); // Amount of tokens to send

  // function for change the mint permission
  const onChangeMintStatus = () => {
    setMintStatus(!mintStatus);
  };

  // function for buy tokens
  const onBuyTokens = () => {
    console.log(buyAmount);
  };

  // functioin for send tokens
  const onSendTokens = () => {
    console.log(receiveAddress);
    console.log(receiveAmount);
  };

  // function for get current status
  useEffect(() => {
    const fetchData = async () => {
      setCurrentTestBalance(-1);
      setCurrentEtherBalance(-1);
    }

    fetchData();
  });

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
        <Typography>Current Test Token's Balance:</Typography>
        <Typography>{currentTestBalance} {TOKEN_SYMBOL}</Typography>
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
          onChange={(e) => setBuyAmount(+e.target.value)}
        />
      </Section>
      <Right>
        <Button
          variant="contained"
          disableElevation
          onClick={onBuyTokens}
        >
          Buy Tokens
        </Button>
      </Right>

      <Section>
        <Typography>Receive Address: </Typography>
        <TextField
          id="standard-basic"
          label="Receive Address"
          variant="standard"
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
