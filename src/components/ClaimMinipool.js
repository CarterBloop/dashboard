import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"
// Private Keys
import privateKeys from "../data/pk.json"

function ClaimMinipool(props) {
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider("http://localhost:8545"));
    let n = new ethers.Wallet(privateKeys["ACCOUNT_3"],ethers.getDefaultProvider("http://localhost:8545"));
    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'claimAndInitiateStaking', { signer:w })
    const { status } = state

    const claimPool = () => {
      void send(n.address,{})
    }

    return (
      <div> <button className="button-1" onClick={() => claimPool()}>Claim Minipool (NodeOp1)</button>
        <p2>---Status: {status}</p2>
      </div>
    )
}

export default ClaimMinipool;

