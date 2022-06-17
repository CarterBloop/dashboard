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
      <div className="balances">
        <h3>Alice:</h3>
        <ul>
          {avaxBalance0 && <li>{formatEther(avaxBalance0)} AVAX</li>}
          {wavaxBalance0 && <li>{formatEther(wavaxBalance0)} WAVAX</li>}
          {ggpBalance0 && <li>{formatEther(ggpBalance0)} GGP</li>}
          {ggavaxBalance0 && <li>{formatEther(ggavaxBalance0)} ggAVAX</li>}
          <DepositAVAX value="ACCOUNT_0"/>
          <RedeemggAVAX value="ACCOUNT_0"/>
        </ul>
      </div>
      <div className="balances">
        <h3>Bob:</h3>
        <ul>
          {avaxBalance1 && <li>{formatEther(avaxBalance1)} AVAX</li>}
          {wavaxBalance1 && <li>{formatEther(wavaxBalance1)} WAVAX</li>}
          {ggpBalance1 && <li>{formatEther(ggpBalance1)} GGP</li>}
          {ggavaxBalance1 && <li>{formatEther(ggavaxBalance1)} ggAVAX</li>}
          <DepositAVAX value="ACCOUNT_1"/>
          <RedeemggAVAX value="ACCOUNT_1"/>
        </ul>
      </div>
      <div className="balances">
        <h3>Cam:</h3>
        <ul>
          {avaxBalance2 && <li>{formatEther(avaxBalance2)} AVAX</li>}
          {wavaxBalance2 && <li>{formatEther(wavaxBalance2)} WAVAX</li>}
          {ggpBalance2 && <li>{formatEther(ggpBalance2)} GGP</li>}
          {ggavaxBalance2 && <li>{formatEther(ggavaxBalance2)} ggAVAX</li>}
          <DepositAVAX value="ACCOUNT_2"/>
          <RedeemggAVAX value="ACCOUNT_2"/>
        </ul>
      </div>
      <div className="balances">
        <h3>NodeOp1:</h3>
        <ul>
          {avaxBalance3 && <li>{formatEther(avaxBalance3)} AVAX</li>}
          {wavaxBalance3 && <li>{formatEther(wavaxBalance3)} WAVAX</li>}
          {ggpBalance3 && <li>{formatEther(ggpBalance3)} GGP</li>}
          {ggavaxBalance3 && <li>{formatEther(ggavaxBalance3)} ggAVAX</li>}
          <CreateMinipool value="ACCOUNT_3"/>
          <WithdrawMinipool value="ACCOUNT_3"/>
        </ul>
      </div>
      <div className="balances">
        <h3>NodeOp2:</h3>
        <ul>
          {avaxBalance4 && <li>{formatEther(avaxBalance4)} AVAX</li>}
          {wavaxBalance4 && <li>{formatEther(wavaxBalance4)} WAVAX</li>}
          {ggpBalance4 && <li>{formatEther(ggpBalance4)} GGP</li>}
          {ggavaxBalance4 && <li>{formatEther(ggavaxBalance4)} ggAVAX</li>}
          <CreateMinipool value="ACCOUNT_4"/>
          <WithdrawMinipool value="ACCOUNT_4"/>
        </ul>
      </div>
      <div className="balances">
        <h3>Rialto1:</h3>
        <ul>
          {avaxBalance5 && <li>{formatEther(avaxBalance5)} AVAX</li>}
          {wavaxBalance5 && <li>{formatEther(wavaxBalance5)} WAVAX</li>}
          {ggpBalance5 && <li>{formatEther(ggpBalance5)} GGP</li>}
          {ggavaxBalance5 && <li>{formatEther(ggavaxBalance5)} ggAVAX</li>}
          <ClaimMinipool value="ACCOUNT_5"/>
          <RecordStakingStart value="ACCOUNT_5"/>
          <RecordStakingEnd value="ACCOUNT_5"/>
          <SyncRewards value="ACCOUNT_5"/>
        </ul>
      </div>
      <div className="balances">
        <h3>Rialto2:</h3>
        <ul>
          {avaxBalance6 && <li>{formatEther(avaxBalance6)} AVAX</li>}
          {wavaxBalance6 && <li>{formatEther(wavaxBalance6)} WAVAX</li>}
          {ggpBalance6 && <li>{formatEther(ggpBalance6)} GGP</li>}
          {ggavaxBalance6 && <li>{formatEther(ggavaxBalance6)} ggAVAX</li>}
          <ClaimMinipool value="ACCOUNT_6"/>
          <RecordStakingStart value="ACCOUNT_6"/>
          <RecordStakingEnd value="ACCOUNT_6"/>
          <SyncRewards value="ACCOUNT_6"/>
        </ul>
      </div>
      <div className="balances">
        <h3>Deployer:</h3>
        <ul>
          {avaxBalance7 && <li>{formatEther(avaxBalance7)} AVAX</li>}
          {wavaxBalance7 && <li>{formatEther(wavaxBalance7)} WAVAX</li>}
          {ggpBalance7 && <li>{formatEther(ggpBalance7)} GGP</li>}
          {ggavaxBalance7 && <li>{formatEther(ggavaxBalance7)} ggAVAX</li>}
        </ul>
      </div>
      <div className="balances">
        <h3>Rewarder:</h3>
        <ul>
          {avaxBalance8 && <li>{formatEther(avaxBalance8)} AVAX</li>}
          {wavaxBalance8 && <li>{formatEther(wavaxBalance8)} WAVAX</li>}
          {ggpBalance8 && <li>{formatEther(ggpBalance8)} GGP</li>}
          {ggavaxBalance8 && <li>{formatEther(ggavaxBalance8)} ggAVAX</li>}
        </ul>
      </div>
    </>
  );
}

export default TestAccounts;
