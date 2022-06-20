import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"
// Private Keys
import privateKeys from "../data/pk.json"

import { now } from "../utils/utils.js";

function RecordStakingStart(props) {
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider("http://localhost:8545"));
    let n = new ethers.Wallet(privateKeys["ACCOUNT_3"],ethers.getDefaultProvider("http://localhost:8545"));
    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'recordStakingStart', { signer:w })
    const { status } = state

    const recordStart = () => {
      void send(n.address,now(),{gasPrice: 18000000,
        gasLimit: 3000000 })
    }

    return (
      <div> <button className="button-1" onClick={() => recordStart()}>Record Start</button>
        <p2>---Status: {status}</p2>
      </div>
    )
}

export default RecordStakingStart;

