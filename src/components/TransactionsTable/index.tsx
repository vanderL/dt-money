import { Container } from "./styles"

export const TransactionTable = () => {
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
                        <td>Desenvolvimento de websites</td>
                        <td className="deposit"> + R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/09/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$1.100</td>
                        <td>Desenvolvimento</td>
                        <td>21/09/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}