import { formatEther } from "@ethersproject/units";
import { useEtherBalance, useTokenBalance } from "@usedapp/core";

import DepositAVAX from "./DepositAVAX";
import CreateMinipool from "./CreateMinipool";
import WithdrawMinipool from "./WithdrawMinipool";
import ClaimMinipool from "./ClaimMinipool";
import RecordStakingStart from "./RecordStakingStart";
import RecordStakingEnd from "./RecordStakingEnd";
import RedeemggAVAX from "./RedeemggAVAX";
import SyncRewards from "./SyncRewards";



// Contract Addresses
import contractAddresses from "../data/contractAddresses.json";
// Wallet Addresses
import accounts from "../data/accounts.json";

function TestAccounts() {
  // Account #0 Balances
  const avaxBalance0 = useEtherBalance(accounts["ACCOUNT_0"]);
  const wavaxBalance0 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_0"]
  );
  const ggpBalance0 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_0"]
  );
  const ggavaxBalance0 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_0"]
  );

  // Account #1 Balances
  const avaxBalance1 = useEtherBalance(accounts["ACCOUNT_1"]);
  const wavaxBalance1 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_1"]
  );
  const ggpBalance1 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_1"]
  );
  const ggavaxBalance1 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_1"]
  );

  // Account #2 Balances
  const avaxBalance2 = useEtherBalance(accounts["ACCOUNT_2"]);
  const wavaxBalance2 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_2"]
  );
  const ggpBalance2 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_2"]
  );
  const ggavaxBalance2 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_2"]
  );

  // Account #3 Balances
  const avaxBalance3 = useEtherBalance(accounts["ACCOUNT_3"]);
  const wavaxBalance3 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_3"]
  );
  const ggpBalance3 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_3"]
  );
  const ggavaxBalance3 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_3"]
  );

  // Account #4 Balances
  const avaxBalance4 = useEtherBalance(accounts["ACCOUNT_4"]);
  const wavaxBalance4 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_4"]
  );
  const ggpBalance4 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_4"]
  );
  const ggavaxBalance4 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_4"]
  );

  // Account #5 Balances
  const avaxBalance5 = useEtherBalance(accounts["ACCOUNT_5"]);
  const wavaxBalance5 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_5"]
  );
  const ggpBalance5 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_5"]
  );
  const ggavaxBalance5 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_5"]
  );

  // Account #6 Balances
  const avaxBalance6 = useEtherBalance(accounts["ACCOUNT_6"]);
  const wavaxBalance6 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_6"]
  );
  const ggpBalance6 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_6"]
  );
  const ggavaxBalance6 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_6"]
  );

  // Account #7 Balances
  const avaxBalance7 = useEtherBalance(accounts["ACCOUNT_7"]);
  const wavaxBalance7 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_7"]
  );
  const ggpBalance7 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_7"]
  );
  const ggavaxBalance7 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_7"]
  );

  // Account #8 Balances
  const avaxBalance8 = useEtherBalance(accounts["ACCOUNT_8"]);
  const wavaxBalance8 = useTokenBalance(
    contractAddresses["WAVAX"],
    accounts["ACCOUNT_8"]
  );
  const ggpBalance8 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_8"]
  );
  const ggavaxBalance8 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_8"]
  );
  return (
    <>
      <div className="card-2">
        <table className="table-1">
          <tr>
            <th>Name</th>
            <th>AVAX</th>
            <th>ggAVAX</th>
            <th>GGP</th>
          </tr>
          <tr>
            <td>
              Alice:
              <DepositAVAX value="ACCOUNT_0" />
              <RedeemggAVAX value="ACCOUNT_0" />
            </td>
            <td>{avaxBalance0 && Math.round(formatEther(avaxBalance0))}</td>
            <td>{ggavaxBalance0 && formatEther(ggavaxBalance0)}</td>
            <td>{ggpBalance0 && formatEther(ggpBalance0)}</td>
          </tr>
          <tr>
            <td>
              Bob:
              <DepositAVAX value="ACCOUNT_1" />
              <RedeemggAVAX value="ACCOUNT_1" />
            </td>
            <td>{avaxBalance1 && Math.round(formatEther(avaxBalance1))}</td>
            <td>{ggavaxBalance1 && Math.round(formatEther(ggavaxBalance1))}</td>
            <td>{ggpBalance1 && formatEther(ggpBalance1)}</td>
          </tr>
          <tr>
            <td>
              Cam:
              <DepositAVAX value="ACCOUNT_2" />
              <RedeemggAVAX value="ACCOUNT_2" />
            </td>
            <td>{avaxBalance2 && Math.round(formatEther(avaxBalance2))}</td>
            <td>{ggavaxBalance2 && formatEther(ggavaxBalance2)}</td>
            <td>{ggpBalance2 && formatEther(ggpBalance2)}</td>
          </tr>
          <tr>
            <td>
              NodeOp1:
              <CreateMinipool value="ACCOUNT_3" />
              <WithdrawMinipool value="ACCOUNT_3" />
            </td>
            <td>{avaxBalance3 && Math.round(formatEther(avaxBalance3))}</td>
            <td>{ggavaxBalance3 && formatEther(ggavaxBalance3)}</td>
            <td>{ggpBalance3 && formatEther(ggpBalance3)}</td>
          </tr>
          <tr>
            <td>
              NodeOp2:
              <CreateMinipool value="ACCOUNT_4" />
              <WithdrawMinipool value="ACCOUNT_4" />
            </td>
            <td>{avaxBalance4 && Math.round(formatEther(avaxBalance4))}</td>
            <td>{ggavaxBalance4 && formatEther(ggavaxBalance4)}</td>
            <td>{ggpBalance4 && formatEther(ggpBalance4)}</td>
          </tr>
          <tr>
            <td>
              Rialto1:
              <ClaimMinipool value="ACCOUNT_5" />
              <RecordStakingStart value="ACCOUNT_5" />
              <RecordStakingEnd value="ACCOUNT_5" />
              <SyncRewards value="ACCOUNT_5" />
            </td>
            <td>{avaxBalance5 && Math.round(formatEther(avaxBalance5))}</td>
            <td>{ggavaxBalance5 && formatEther(ggavaxBalance5)}</td>
            <td>{ggpBalance5 && formatEther(ggpBalance5)}</td>
          </tr>
          <tr>
            <td>
              Rialto2:
              <ClaimMinipool value="ACCOUNT_6" />
              <RecordStakingStart value="ACCOUNT_6" />
              <RecordStakingEnd value="ACCOUNT_6" />
              <SyncRewards value="ACCOUNT_6" />
            </td>
            <td>{avaxBalance6 && Math.round(formatEther(avaxBalance6))}</td>
            <td>{ggavaxBalance6 && formatEther(ggavaxBalance6)}</td>
            <td>{ggpBalance6 && formatEther(ggpBalance6)}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default TestAccounts;
