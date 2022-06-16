import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"
// Private Keys
import privateKeys from "../data/pk.json"

const emptyWallet = (seed) => {
	const pk = utils.randomBytes(32);
	const w = new ethers.Wallet(pk);
	return w;
};

// Random addresses to use for nodeIDs
const nodeID = (seed) => {
	return emptyWallet(seed).address;
};

function CreateMinipool() {
    let w = new ethers.Wallet(privateKeys["ACCOUNT_3"]);
    let node = w.address;
    let duration = 9999;
    let delegationFee = 5;
    let ggpBondAmt = utils.parseEther("200");
    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'createMinipool', { signer:w })
    const { status } = state

    const makePool = () => {
      void send(node,duration,delegationFee,ggpBondAmt,{ value: utils.parseEther("1000") })
    }

    return (
      <div>
        <button onClick={() => makePool()}>Create Minipool</button>
        <p>Status: {status}</p>
      </div>
    )
}

export default CreateMinipool;

