import styled from "styled-components";

export const Videos = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 2.5rem 2.5rem;

  p {
    font-weight: 500;
    text-align: center;
    font-size: 1.2rem;
    opacity: 0.7;
    grid-column: 1 / -1;
  }
`;
