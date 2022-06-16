import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
import privateKeys from "../data/pk.json"
// ABI
import ggAvaxABI from "../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json"

function DepositAVAX() {
    const ggAvaxInterface = new utils.Interface(ggAvaxABI.abi)
    const ggAvaxContract = new Contract(contractAddresses["TokenggAVAX"], ggAvaxInterface)

    let w = new ethers.Wallet(privateKeys["ACCOUNT_1"],ethers.getDefaultProvider("http://localhost:8545"));
  
    const { state, send } = useContractFunction(ggAvaxContract, 'depositAVAX', {signer: w})
    const { status } = state
  
    const stakeAVAX = () => {
      void send({ value: ethers.utils.parseEther("2000")})
    }
  
    return (
      <div>
        <button onClick={() => stakeAVAX()}>Stake</button>
        <p>Status: {status}</p>
      </div>
    )
}

export default DepositAVAX