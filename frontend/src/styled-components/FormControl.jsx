import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column-reverse;

  input,
  textarea {
    font-size: 1.05rem;
    padding: 0.8rem 0.8rem 0.6rem 0.8rem;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    outline: none;
    box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    :focus + label {
      transform: translate(0.4rem, 0.76rem);
      z-index: 1;
    }

    :focus::placeholder {
      visibility: hidden;
    }
  }

  textarea {
    height: 10rem;
    resize: none;
    -webkit-resize: none;
    -moz-resize: none;
  }

  label {
    font-weight: 500;
    font-size: 1.05rem;
    transform: translate(0.8rem, 2rem);
    background-color: white;
    align-self: flex-start;
    padding: 0 0.2rem;
    transition: all 0.4s;
    z-index: -1;
  }
`;
