import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"


function VaultBalances() {
  // Contracts
  const vaultAVAX = useEtherBalance(contractAddresses["Vault"]);
  const vaultGGP = useTokenBalance(
    contractAddresses["TokenGGP"],
    contractAddresses["Vault"]
  )  
  return (
    <div className="card">
      <h3>Vault:</h3>
      <ul>
        {vaultAVAX && <li>{formatEther(vaultAVAX)} AVAX</li>}
        {vaultGGP && <li> {formatEther(vaultGGP)} GGP</li>}
      </ul>
    </div>
  );
}

export default VaultBalances;
