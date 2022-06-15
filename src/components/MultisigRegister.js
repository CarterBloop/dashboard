import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import multisigManagerABI from "../abi/contract/MultisigManager.sol/MultisigManager.json"

function MultisigRegister(actor,nodeID,duration,delegationFee,ggpBondAmt) {
    const multisigInterface = new utils.Interface(multisigManagerABI.abi);
    const multisigContract = new Contract(contractAddresses["MultisigManager"], multisigInterface);

    const { state, send } = useContractFunction(multisigContract, 'registerMultisig', { signer:actor })
    const { status } = state

    const registerMultisig = () => {
      void send(nodeID,duration,delegationFee,ggpBondAmt,{ value: utils.parseEther(1000) })
    }

    return (
      <div>
        <button onClick={() => registerMultisig()}>RegisterMultisig</button>
        <p>Status: {status}</p>
      </div>
    )
}

export default MultisigRegister;

