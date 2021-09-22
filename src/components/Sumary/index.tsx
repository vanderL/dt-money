import { Container } from "./styles"
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Sumary = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong> + R$1000,00</strong>
            </div>
            <div> 
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong> - R$1.100,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>- R$100,00</strong>
            </div>
        </Container>
    )
}