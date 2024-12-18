import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2.5rem 0 7.5rem;

`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;


export const NewTransactionButton = styled.button`
    height: 50px;
    background: transparent;
    border: 3px solid ${props => props.theme["red-100"]};
    color: ${props => props.theme['red-100']};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 20px;
    cursor: pointer;
    
    
    &:hover {
        background: ${props => props.theme["red-100"]};
        color: ${props => props.theme["white-100"]};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s; 
    }
`;
