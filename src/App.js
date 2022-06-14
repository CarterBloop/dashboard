import "./App.css";

import { formatEther } from "@ethersproject/units";
import { useEtherBalance, useTokenBalance, useCall } from "@usedapp/core";
import { ethers } from "ethers";

const ACCOUNT_0 = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const ACCOUNT_1 = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const ACCOUNT_2 = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
const ACCOUNT_3 = "0x90F79bf6EB2c4f870365E785982E1f101E93b906";
const ACCOUNT_4 = "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65";
const ACCOUNT_5 = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const ACCOUNT_6 = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";
const ACCOUNT_7 = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";
const ACCOUNT_8 = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f";

let contractAddresses = {
  Multicall: "0xef11D1c2aA48826D4c41e54ab82D1Ff5Ad8A64Ca",
  WAVAX: "0x39dD11C243Ac4Ac250980FA3AEa016f73C509f37",
  Storage: "0x76ca03a67C049477FfB09694dFeF00416dB69746",
  Vault: "0x1696C7203769A71c97Ca725d42b13270ee493526",
  MultisigManager: "0x332Fb35767182F8ac9F9C1405db626105F6694E0",
  BaseQueue: "0x982830D87C95479dB81Fe62cd08dd9118D080697",
  TokenGGP: "0x37cA242a94945CdC3d3F155452a82Af6374bebD7",
  TokenggAVAX: "0x07AF11e412ed7C343603c0F4b35645f7870686Eb",
  MinipoolManager: "0xEF86CEc1CEf0C78E5725fA6Cc3E9929788bBde35",
};

// function useBlasdbaosubdou(tokenAddress,address) {
//   const { value, error } =
//     useCall(
//       address &&
//         tokenAddress && {
//           contract: new ethers.Contract(tokenAddress, ERC20Interface), // instance of called contract
//           method: "balanceOf", // Method to be called
//           args: [address], // Method arguments - address to be checked for balance
//         }
//     ) ?? {};
//   if(error) {
//     console.error(error.message)
//     return undefined
//   }
//   return value?.[0]
// }

// "alice",
// 		"bob",
// 		"cam",
// 		"nodeOp1",
// 		"nodeOp2",
// 		"rialto1",
// 		"rialto2",
// 		"deployer",
// 		"rewarder",

function App() {
  // Account #0 Balances
  const avaxBalance0 = useEtherBalance(ACCOUNT_0);
  const wavaxBalance0 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_0);
  const ggpBalance0 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_0);
  const ggavaxBalance0 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_0
  );

  // Account #1 Balances
  const avaxBalance1 = useEtherBalance(ACCOUNT_1);
  const wavaxBalance1 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_1);
  const ggpBalance1 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_1);
  const ggavaxBalance1 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_1
  );

  // Account #2 Balances
  const avaxBalance2 = useEtherBalance(ACCOUNT_2);
  const wavaxBalance2 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_2);
  const ggpBalance2 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_2);
  const ggavaxBalance2 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_2
  );

  // Account #3 Balances
  const avaxBalance3 = useEtherBalance(ACCOUNT_3);
  const wavaxBalance3 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_3);
  const ggpBalance3 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_3);
  const ggavaxBalance3 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_3
  );

  // Account #4 Balances
  const avaxBalance4 = useEtherBalance(ACCOUNT_4);
  const wavaxBalance4 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_4);
  const ggpBalance4 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_4);
  const ggavaxBalance4 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_4
  );

  // Account #5 Balances
  const avaxBalance5 = useEtherBalance(ACCOUNT_5);
  const wavaxBalance5 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_5);
  const ggpBalance5 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_5);
  const ggavaxBalance5 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_5
  );

  // Account #6 Balances
  const avaxBalance6 = useEtherBalance(ACCOUNT_6);
  const wavaxBalance6 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_6);
  const ggpBalance6 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_6);
  const ggavaxBalance6 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_6
  );

  // Account #7 Balances
  const avaxBalance7 = useEtherBalance(ACCOUNT_7);
  const wavaxBalance7 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_7);
  const ggpBalance7 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_7);
  const ggavaxBalance7 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_7
  );

  // Account #8 Balances
  const avaxBalance8 = useEtherBalance(ACCOUNT_8);
  const wavaxBalance8 = useTokenBalance(contractAddresses["WAVAX"], ACCOUNT_8);
  const ggpBalance8 = useTokenBalance(contractAddresses["TokenGGP"], ACCOUNT_8);
  const ggavaxBalance8 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    ACCOUNT_8
  );

  const multicall = useEtherBalance(contractAddresses["Multicall"]);
  const wavax = useEtherBalance(contractAddresses["WAVAX"]);
  const storage = useEtherBalance(contractAddresses["Storage"]);
  const vault = useEtherBalance(contractAddresses["Vault"]);
  const multisigmanager = useEtherBalance(contractAddresses["MultisigManager"]);
  const basequeue = useEtherBalance(contractAddresses["BaseQueue"]);
  const tokenggp = useEtherBalance(contractAddresses["TokenGGP"]);
  const tokenggavax = useEtherBalance(contractAddresses["TokenggAVAX"]);
  const minipoolmanager = useEtherBalance(contractAddresses["MinipoolManager"]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <div className="balances">
            <h3>Alice:</h3>
            <ul>
              {avaxBalance0 && <li>{formatEther(avaxBalance0)} AVAX</li>}
              {wavaxBalance0 && <li>{formatEther(wavaxBalance0)} WAVAX</li>}
              {ggpBalance0 && <li>{formatEther(ggpBalance0)} GGP</li>}
              {ggavaxBalance0 && <li>{formatEther(ggavaxBalance0)} ggAVAX</li>}
            </ul>
          </div>
          <div className="balances">
            <h3>Bob:</h3>
            <ul>
              {avaxBalance1 && <li>{formatEther(avaxBalance1)} AVAX</li>}
              {wavaxBalance1 && <li>{formatEther(wavaxBalance1)} WAVAX</li>}
              {ggpBalance1 && <li>{formatEther(ggpBalance1)} GGP</li>}
              {ggavaxBalance1 && <li>{formatEther(ggavaxBalance1)} ggAVAX</li>}
            </ul>
          </div>
          <div className="balances">
            <h3>Cam:</h3>
            <ul>
              {avaxBalance2 && <li>{formatEther(avaxBalance2)} AVAX</li>}
              {wavaxBalance2 && <li>{formatEther(wavaxBalance2)} WAVAX</li>}
              {ggpBalance2 && <li>{formatEther(ggpBalance2)} GGP</li>}
              {ggavaxBalance2 && <li>{formatEther(ggavaxBalance2)} ggAVAX</li>}
            </ul>
          </div>
          <div className="balances">
            <h3>NodeOp1:</h3>
            <ul>
              {avaxBalance3 && <li>{formatEther(avaxBalance3)} AVAX</li>}
              {wavaxBalance3 && <li>{formatEther(wavaxBalance3)} WAVAX</li>}
              {ggpBalance3 && <li>{formatEther(ggpBalance3)} GGP</li>}
              {ggavaxBalance3 && <li>{formatEther(ggavaxBalance3)} ggAVAX</li>}
            </ul>
          </div>
          <div className="balances">
            <h3>NodeOp2:</h3>
            <ul>
              {avaxBalance4 && <li>{formatEther(avaxBalance4)} AVAX</li>}
              {wavaxBalance4 && <li>{formatEther(wavaxBalance4)} WAVAX</li>}
              {ggpBalance4 && <li>{formatEther(ggpBalance4)} GGP</li>}
              {ggavaxBalance4 && <li>{formatEther(ggavaxBalance4)} ggAVAX</li>}
            </ul>
          </div>
        </div>
        <div className="right">
        <div className="balances">
            <h3>Rialto1:</h3>
            <ul>
              {avaxBalance5 && <li>{formatEther(avaxBalance5)} AVAX</li>}
              {wavaxBalance5 && <li>{formatEther(wavaxBalance5)} WAVAX</li>}
              {ggpBalance5 && <li>{formatEther(ggpBalance5)} GGP</li>}
              {ggavaxBalance5 && <li>{formatEther(ggavaxBalance5)} ggAVAX</li>}
            </ul>
          </div>
          <div className="balances">
            <h3>Rialto2:</h3>
            <ul>
              {avaxBalance6 && <li>{formatEther(avaxBalance6)} AVAX</li>}
              {wavaxBalance6 && <li>{formatEther(wavaxBalance6)} WAVAX</li>}
              {ggpBalance6 && <li>{formatEther(ggpBalance6)} GGP</li>}
              {ggavaxBalance6 && <li>{formatEther(ggavaxBalance6)} ggAVAX</li>}
            </ul>
          </div>
          <div className="balances">
            <h3>Deployer:</h3>
            <ul>
              {avaxBalance7 && <li>{formatEther(avaxBalance7)} AVAX</li>}
              {wavaxBalance7 && <li>{formatEther(wavaxBalance7)} WAVAX</li>}
              {ggpBalance7 && <li>{formatEther(ggpBalance7)} GGP</li>}
              {ggavaxBalance7 && <li>{formatEther(ggavaxBalance7)} ggAVAX</li>}
            </ul>
          </div>
          <div className="balances">
            <h3>Rewarder:</h3>
            <ul>
              {avaxBalance8 && <li>{formatEther(avaxBalance8)} AVAX</li>}
              {wavaxBalance8 && <li>{formatEther(wavaxBalance8)} WAVAX</li>}
              {ggpBalance8 && <li>{formatEther(ggpBalance8)} GGP</li>}
              {ggavaxBalance8 && <li>{formatEther(ggavaxBalance8)} ggAVAX</li>}
            </ul>
          </div>
          <div className="balances">
            <h3>Vault:</h3>
            <ul>{vault && <li>{formatEther(vault)} AVAX</li>}</ul>
          </div>
          <div className="balances">
            <h3>Contracts:</h3>
            <ul>
              {multicall && <li>Multicall: {formatEther(multicall)} AVAX</li>}
              {wavax && <li>WAVAX: {formatEther(wavax)} AVAX</li>}
              {storage && <li>Storage: {formatEther(storage)} AVAX</li>}
              {vault && <li>Vault: {formatEther(vault)} AVAX</li>}
              {multisigmanager && (
                <li>MultisigManager: {formatEther(multisigmanager)} AVAX</li>
              )}
              {basequeue && <li>BaseQueue: {formatEther(basequeue)} AVAX</li>}
              {tokenggp && <li>TokenGGP: {formatEther(tokenggp)} AVAX</li>}
              {tokenggavax && (
                <li>TokenggAVAX: {formatEther(tokenggavax)} AVAX</li>
              )}
              {minipoolmanager && (
                <li>MinipoolManager {formatEther(minipoolmanager)} AVAX</li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
