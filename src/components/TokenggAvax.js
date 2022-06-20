import { formatEther, formatUnits } from "@ethersproject/units";
import { useCall} from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import TokenggAvaxABI from "../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json"

function useGGAVAXStats(func) {
    const TokenggAvaxInterface = new utils.Interface(
      TokenggAvaxABI.abi
    );
    const { value, error } =
      useCall(
        func && {
            contract: new Contract(contractAddresses["TokenggAVAX"], TokenggAvaxInterface), // instance of called contract
            method: func, // Method to be called
            args: [], // Method arguments - address to be checked for balance
          }
      ) ?? {};
    if(error) {
      console.error(error.message)
      return undefined
    }
    return value?.[0]
}

function TokenggAvax() {
  // tokenggAvax.sol Stats
  const totalFloat = useGGAVAXStats("totalFloat");
  const amountAvailableForStaking = useGGAVAXStats("amountAvailableForStaking");
  const totalAssets = useGGAVAXStats("totalAssets");
  const rewardsCycleLength = useGGAVAXStats("rewardsCycleLength");
  const lastSync = useGGAVAXStats("lastSync");
  const rewardsCycleEnd = useGGAVAXStats("rewardsCycleEnd");
  const lastRewardAmount = useGGAVAXStats("lastRewardAmount");
  const totalReleasedAssets = useGGAVAXStats("totalReleasedAssets");
  const stakingTotalAssets = useGGAVAXStats("stakingTotalAssets");

  return (
    <div className="card">
      <h3>ggAVAX:</h3>
      <table className="table">
        <tr>
          {totalFloat && (<><td>Total Float: </td><td>{formatEther(totalFloat)}</td></>)}
        </tr>
        <tr>
          {totalAssets && (<><td>Total Assets: </td><td>{formatEther(totalAssets)}</td></>)}
        </tr>
        <tr>
          {amountAvailableForStaking && (<><td>Available for Staking: </td><td>{formatEther(amountAvailableForStaking)}</td></>)}
        </tr>
        <tr>
          {stakingTotalAssets && (<><td>Staking Total Assets: </td><td>{formatEther(stakingTotalAssets)}</td></>)}
        </tr>
        <tr>
          {totalReleasedAssets && (<><td>Total Released Assets: </td><td>{formatEther(totalReleasedAssets)}</td></>)}
        </tr>
        <tr>
          {lastRewardAmount && (<><td>Last Reward Amount: </td><td>{formatEther(lastRewardAmount)}</td></>)}
        </tr>
        <tr>
          {rewardsCycleEnd && (<><td>Rewards Cycle End </td><td>{rewardsCycleEnd}</td></>)}
        </tr>
        <tr>
          {rewardsCycleLength && (<><td>Rewards Cycle Length: </td><td>{rewardsCycleLength}</td></>)}
        </tr>
        <tr>
          {lastSync && (<><td>Last Sync: </td><td>{lastSync}</td></>)}
        </tr>
      </table>
    </div>
  );
}

export default TokenggAvax;