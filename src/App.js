import "./App.css";

import TokenggAvax from "./components/TokenggAvax";
import TestAccounts from "./components/TestAccounts";
import VaultBalances from "./components/VaultBalances";
import Oracle from "./components/Oracle";
import SetGGPPrice from "./components/SetGGPPrice";
import MinipoolManager from "./components/MinipoolManager";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <TestAccounts/>
        </div>
        <div className="right">
          <VaultBalances />
          <TokenggAvax/>
          <Oracle/>
          <SetGGPPrice/>
          <MinipoolManager/>
        </div>
      </header>
    </div>
  );
}

export default App;
