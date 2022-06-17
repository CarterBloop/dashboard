import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"
// Private Keys
import privateKeys from "../data/pk.json"

function WithdrawMinipool(props) {
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider("http://localhost:8545"));
    let node = w.address; // Or NodeID()
    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'withdrawMinipoolFunds', { signer:w })
    const { status } = state

    const withdrawPool = () => {
      void send(node.address,{})
    }

    return (
      <div >
        <p>Withdraw Minipool Funds: <button className="button-1" onClick={() => withdrawPool()}>Withdraw</button> </p>
        <p>---Status: {status}</p>
      </div>
    )
}

export default WithdrawMinipool;

