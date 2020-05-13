import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: 4rem 1fr;

  .sidebar {
    grid-area: 1 / 1 / 3 / 2;
    @media (max-width: 870px) {
    }
  }

  .content {
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.01);
    position: relative;

    @media (max-width: 870px) {
      grid-area: 2 / 1 / 3 / 2;
    }

    @media (max-width: 600px) {
      padding: 2rem 0.8rem;
    }
  }

  @media (max-width: 870px) {
    grid-template-columns: auto;
    grid-template-rows: 4rem 1fr;
  }
`;
