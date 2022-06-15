import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import oracleABI from "../abi/contract/Oracle.sol/Oracle.json"

function SetGGPPrice() {
    const oracleInterface = new utils.Interface(oracleABI.abi)
    const oracleContract = new Contract(contractAddresses["Oracle"], oracleInterface)

    const { state, send } = useContractFunction(oracleContract, 'setGGPPrice',{ transactionName: 'SetPrice'})
    const { status } = state

    const setPrice = () => {
      void send(ethers.utils.parseEther("3331"),9999)
    }

    return (
      <div>
        <button onClick={() => setPrice()}>Set Price</button>
        <p>Status: {status}</p>
      </div>
    )
}

export default SetGGPPrice;

