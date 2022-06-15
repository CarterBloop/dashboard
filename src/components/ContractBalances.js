import { useEtherBalance} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"


function ContractBalances() {
  // Contracts
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
        {tokenggavax && <li>TokenggAVAX: {formatEther(tokenggavax)} AVAX</li>}
        {minipoolmanager && (
          <li>MinipoolManager {formatEther(minipoolmanager)} AVAX</li>
        )}
      </ul>
    </div>
  );
}

export default ContractBalances;
