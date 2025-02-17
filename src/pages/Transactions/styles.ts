import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
    color: ${props => props.theme['black']};
`;

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;
    

    td {
        padding: 1.25rem 2rem;
        background-color: ${props => props.theme['white-100']};

    

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
    }

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        color: ${props => props.theme['black-100']};

        &:hover{
            transition: 0.2s;
            color: ${props => props.theme['red-100']}
        }
    }

`;

interface PriceHighLightProps {
    variant: 'income' | 'outcome';
}


export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant === 'income' ? props.theme['blue-100'] : props.theme['red-100'] }
`;

