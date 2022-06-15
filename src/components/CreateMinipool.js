import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"

function CreateMinipool(actor,nodeID,duration,delegationFee,ggpBondAmt) {
    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'createMinipool', { signer:actor })
    const { status } = state

    const makePool = () => {
      void send(nodeID,duration,delegationFee,ggpBondAmt,{ value: utils.parseEther(1000) })
    }

    return (
      <div>
        <button onClick={() => makePool()}>Create Minipool</button>
        <p>Status: {status}</p>
      </div>
    )
}

export default CreateMinipool;

