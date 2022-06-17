import "./App.css";

import TokenggAvax from "./components/TokenggAvax";
import TestAccounts from "./components/TestAccounts";
import VaultBalances from "./components/VaultBalances";
import Oracle from "./components/Oracle";
import SetGGPPrice from "./components/SetGGPPrice";
import MinipoolManager from "./components/MinipoolManager";


import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBCardLink,
} from 'mdb-react-ui-kit';
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
          <MinipoolManager/>
        </div>
      </header>
    </div>
  );
}

export default App;
