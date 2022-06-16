import { formatEther } from "@ethersproject/units";
import { useCall} from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import oracleABI from "../abi/contract/Oracle.sol/Oracle.json";

function useOracleStats(func) {
    const OracleInterface = new utils.Interface(
      oracleABI.abi
    );
    const { value, error } =
      useCall(
        func && {
            contract: new Contract(contractAddresses["Oracle"], OracleInterface), // instance of called contract
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

function Oracle() {
  // Oracle.sol Stats
  const GGPPrice = useOracleStats("getGGPPrice");

  return (
    <div className="balances">
      <h3>Oracle.sol</h3>
      <ul>
        {GGPPrice && (
          <li>GGP Price: {formatEther(GGPPrice)}</li>
        )}
      </ul>
    </div>
  );
}

export default Oracle;