import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"


function ContractBalances() {
  // Contracts
  const multicall = useEtherBalance(contractAddresses["Multicall"]);
  const wavax = useEtherBalance(contractAddresses["WAVAX"]);
  const storage = useEtherBalance(contractAddresses["Storage"]);
  const oneInch = useEtherBalance(contractAddresses["OneInchMock"]);
  const vaultAVAX = useEtherBalance(contractAddresses["Vault"]);
  const vaultGGP = useTokenBalance(
    contractAddresses["TokenGGP"],
    contractAddresses["Vault"]
  );
  const oracle = useEtherBalance(contractAddresses["Oracle"]);
  const protocolDao = useEtherBalance(contractAddresses["ProtocolDao"]);
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
        {oneInch && <li>One Inch: {formatEther(oneInch)} AVAX</li>}
        {vaultAVAX && <li>Vault: {formatEther(vaultAVAX)} AVAX</li>}
        {vaultGGP && <li>Vault: {formatEther(vaultGGP)} GGP</li>}
        {oracle && <li>Oracle: {formatEther(oracle)} AVAX</li>}
        {protocolDao && <li>ProtocolDAO: {formatEther(protocolDao)} AVAX</li>}
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
