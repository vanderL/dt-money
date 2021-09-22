import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from "./styles"

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    const [type, setType] = useState('deposit');
    
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-global-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container >
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />
                
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entradas" />
                        <span> Entradas </span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saídas" />
                        <span> Saídas </span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}