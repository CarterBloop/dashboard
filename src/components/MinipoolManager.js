import { useCall} from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"

function useMinipoolStats(func) {
    const MinipoolManagerInterface = new utils.Interface(
      MinipoolManagerABI.abi
    );
    const { value, error } =
      useCall(
        func && {
            contract: new Contract(contractAddresses["MinipoolManager"], MinipoolManagerInterface), // instance of called contract
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

function MinipoolManager() {
  // MinipoolManager.sol Stats
  const minipoolCount = useMinipoolStats("getMinipoolCount");

  return (
    <div className="card">
      <h3>Minipools:</h3>
      <ul>
        {minipoolCount && <li># of minipools: {minipoolCount.toNumber()}</li>}
      </ul>
    </div>
  );
}

export default MinipoolManager;