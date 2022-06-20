import { useContractFunction, useCall } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"
// Private Keys
import privateKeys from "../data/pk.json"

import { nodeID, useCalcEndTime} from "../utils/utils.js";

function RecordStakingEnd(props) {
    let reward = "0";
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider("http://localhost:8545"));
    let duration = useCalcEndTime("NodeOp1")

    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'recordStakingEnd', { signer:w })
    const { status } = state

    const recordEnd = () => {
      void send(nodeID("NodeOp1"),duration,ethers.utils.parseEther(reward),{value:ethers.utils.parseEther("1000")})
    }

    return (
      <div><button className="button-1" onClick={() => recordEnd()}>Record End</button>
        <p2>---Status: {status}</p2>
      </div>
    )
}

export default RecordStakingEnd;

