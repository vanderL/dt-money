import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOperan, SetIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
      SetIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal(){
      SetIsNewTransactionModal(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModalOperan}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
