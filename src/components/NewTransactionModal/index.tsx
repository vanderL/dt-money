import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';

import { TransactionsContext, useTransactions } from '../../hooks/useTransactions';

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
    const { createTransaction } = useTransactions();
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }
    
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
            <Container onSubmit={handleCreateTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    type="text" 
                    placeholder="Título" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Valor"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                />
                
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

                <input 
                    type="text" 
                    placeholder="Categoria" 
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}