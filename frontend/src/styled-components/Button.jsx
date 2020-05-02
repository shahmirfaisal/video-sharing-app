import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  background-image: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  ${(props) =>
    props.block
      ? css`
          width: 100%;
        `
      : null}

  :hover {
    background-image: linear-gradient(90deg, #00d2ff 0%, #6875ff 100%);
  }

  i {
    margin-right: 0.5rem;
  }
`;
