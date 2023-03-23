import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

const Block = props => {
  const [block, setBlock] = useState({});

  const [showBlock, setShowBlock] = useState(false);

  const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(settings);

  const num = props.curBlockNumber;

  async function getBlock() {
    setBlock(await alchemy.core.getBlock(num));
  }

  function blockContent() {
    getBlock(num);
    setShowBlock(true);
  }

  useEffect(() => {
    blockContent();
  });

  //   blockContent();

  return <div style={{ display: 'block' }}>{JSON.stringify(block)}</div>;
};

export default Block;
