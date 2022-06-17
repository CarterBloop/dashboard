import { useContractFunction, useCall } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"
// Private Keys
import privateKeys from "../data/pk.json"

async function now() {
  const p = ethers.getDefaultProvider("http://localhost:8545");
  const latest = await p.getBlockNumber();
	const b = await p.getBlock(latest);
	return ethers.BigNumber.from(b.timestamp);
}

function RecordStakingEnd(props) {
    let reward = "0";
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider("http://localhost:8545"));
    let n = new ethers.Wallet(privateKeys["ACCOUNT_3"],ethers.getDefaultProvider("http://localhost:8545"));

    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'recordStakingEnd', { signer:w })
    const { status } = state

    const recordEnd = () => {
      void send(n.address,now(),ethers.utils.parseEther(reward),{value:ethers.utils.parseEther("1000")})
    }

    return (
      <div className="balances">
        <p>Record Staking End: <button onClick={() => recordEnd()}>Record End</button></p>
        <p>---Status: {status}</p>
      </div>
    )
}

export default RecordStakingEnd;

