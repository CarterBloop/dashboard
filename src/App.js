import "./App.css";

import TokenggAvax from "./components/TokenggAvax";
import TestAccounts from "./components/TestAccounts";
import ContractBalances from "./components/ContractBalances";
import Oracle from "./components/Oracle";
import SetGGPPrice from "./components/SetGGPPrice";
import MinipoolManager from "./components/MinipoolManager";
import CreateMinipool from "./components/CreateMinipool";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <TestAccounts/>
        </div>
        <div className="right">
          <ContractBalances />
          <TokenggAvax/>
          <Oracle/>
          <SetGGPPrice/>
          <MinipoolManager/>
          <CreateMinipool/>
        </div>
      </header>
    </div>
  );
}

export default App;
