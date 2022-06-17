import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import TokenggAVAXABI from "../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json"
// Private Keys
import privateKeys from "../data/pk.json"

function SyncRewards(props) {
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider("http://localhost:8545"));

    const ggAVAXInterface = new utils.Interface(TokenggAVAXABI.abi);
    const ggAVAXContract = new Contract(contractAddresses["TokenggAVAX"], ggAVAXInterface);

    const { state, send } = useContractFunction(ggAVAXContract, 'syncRewards', { signer:w })
    const { status } = state

    const sync = () => {
      void send()
    }

    return (
      <div className="button">
        <p>Sync ggAVAX Rewards: <button onClick={() => sync()}>Sync</button></p>
        <p>---Status: {status}</p>
      </div>
    )
}

export default SyncRewards;

