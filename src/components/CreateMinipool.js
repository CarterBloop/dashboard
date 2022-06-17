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


function CreateMinipool(props) {
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider("http://localhost:8545"));
    let node = w.address; // Or NodeID()
    let duration = 1209600; //14 Days 
    let delegationFee = 0;
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
        <p>Create Pool (1000 AVAX, 200 GGP): <button className="button-1" onClick={() => makePool()}>Create Minipool</button></p>
        <p>---Status: {status}</p>
      </div>
    )
}

export default CreateMinipool;

