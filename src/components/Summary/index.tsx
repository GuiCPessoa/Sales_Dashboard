import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#1CA7D8"/>
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#D72F59"/>
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant='blue'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FBFBFB"/>
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}