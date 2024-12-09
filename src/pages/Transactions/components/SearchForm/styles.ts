import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  input {
        flex: 1;
        border-radius: 20px;
        border: 0;
        background: ${props => props.theme["white-100"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["black"]};
        }
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 3px solid ${props => props.theme["red-100"]};
    color: ${props => props.theme["red-100"]};
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;



    &:hover {
        background: ${props => props.theme["red-100"]};
        color: ${props => props.theme["white-100"]};
        border-color: ${props => props.theme["green-500"]};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`