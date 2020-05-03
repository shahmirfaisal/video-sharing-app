import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: 4rem 1fr;

  .sidebar {
    grid-area: 1 / 1 / 3 / 2;
  }

  .content {
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.01);
  }
`;
