import { useEffect } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"

export const TransactionTable = () => {
    
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data));
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Cliente 1</td>
                        <td className="deposit"> + R$1.000</td>
                        <td>Recorrente</td>
                        <td>20/09/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$1.1000</td>
                        <td>Desenvolvimento</td>
                        <td>21/09/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}