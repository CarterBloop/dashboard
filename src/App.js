import "./App.css";

import TokenggAvax from "./components/TokenggAvax";
import TestAccounts from "./components/TestAccounts";
import ContractBalances from "./components/ContractBalances";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <TestAccounts/>
        </div>
        <div className="right">
        <TokenggAvax/>
        <ContractBalances/>
        </div>
      </header>
    </div>
  );
}

export default App;
