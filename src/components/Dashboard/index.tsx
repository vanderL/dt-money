import { Sumary } from "../Sumary"
import { TransactionTable } from "../TransactionsTable"

import { Container } from "./styles"

export const Dashboard = () => {
    return(
        <Container>
            <Sumary />
            <TransactionTable />
        </Container>
    )
}