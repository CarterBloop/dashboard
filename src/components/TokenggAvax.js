import { formatEther } from "@ethersproject/units";
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
    <div className="balances">
      <h3>TokenggAvax.sol</h3>
      <ul>
        {rewardsCycleLength && (
          <li>Rewards Cycle Length: {rewardsCycleLength}</li>
        )}
        {lastSync && <li>Last Sync: {lastSync}</li>}
        {rewardsCycleEnd && <li>Rewards Cycle End: {rewardsCycleEnd}</li>}
        {lastRewardAmount && (
          <li>Last Reward Amount: {formatEther(lastRewardAmount)}</li>
        )}
        {totalReleasedAssets && (
          <li>Total Released Assets: {formatEther(totalReleasedAssets)}</li>
        )}
        {stakingTotalAssets && (
          <li>Staking Total Assets: {formatEther(stakingTotalAssets)}</li>
        )}
        {totalFloat && <li>Total Float: {formatEther(totalFloat)}</li>}
        {amountAvailableForStaking && (
          <li>
            Amount Available for Staking:{" "}
            {formatEther(amountAvailableForStaking)}
          </li>
        )}
        {totalAssets && <li>Total Assets: {formatEther(totalAssets)}</li>}
      </ul>
    </div>
  );
}

export default TokenggAvax;