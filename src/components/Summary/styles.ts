import styled, { css } from "styled-components";

export const SummaryContainer = styled.header`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;
`;

interface SummaryCardProps {
    variant?: 'blue';
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background-color: ${props => props.theme.black};
    border-radius: 20px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme['white-100']};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'blue' && css`
        background: ${props.theme['blue-100']};
    `}

`;